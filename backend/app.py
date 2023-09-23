from typing import Dict, List
from flask import Flask
from flask_cors import CORS
import openai
from generate_optimal_function import generate_schedule
import json
from flask import request
import sqlite3
from flask import g
import time

with open("secrets.json", "r") as f:
    secrets = json.load(f)["key"]
    openai.api_key = secrets

app = Flask(__name__)
CORS(app)
app.config["DATABASE"] = "./backend_database.db"


class Event:
    def __init__(
        self, event_name, event_description, start_time, end_time, date, carbon_points
    ) -> None:
        self.event_name = event_name
        self.event_description = event_description
        self.start_time = start_time
        self.end_time = end_time
        self.date = date
        self.carbon_points = carbon_points


class EventEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Event):
            return {
                "event_name": obj.event_name,
                "event_description": obj.event_description,
                "start_time": obj.start_time,
                "end_time": obj.end_time,
                "date": obj.date,
                "carbon_points": obj.carbon_points,
            }
        return super().default(obj)


def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        g._database = sqlite3.connect(app.config["DATABASE"])
        db = g._database
        with app.open_resource("schema.sql") as f:
            db.executescript(f.read().decode("utf8"))
        # if the database has nothing in the users, run the seed_database.sql file
        cur = db.cursor()
        cur.execute("SELECT * FROM users")
        output = cur.fetchall()
        if output == []:
            with app.open_resource("seed_database.sql") as f:
                db.executescript(f.read().decode("utf8"))
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, "_database", None)
    if db is not None:
        db.close()


@app.route("/")
def test():
    return "Hello World"


@app.route("/transcribe_schedule", methods=["POST"])
def transcribe_schedule():
    file = request.files["file"]
    filename = file.filename
    file.save(filename)
    transcription = openai.Audio.transcribe("whisper-1", filename)
    output = generate_schedule(transcription)

    # convert the output to Events
    current_events = []
    for event in output:
        current_events.append(
            Event(
                event["name_of_event"],
                event["description_of_event"],
                event["military_start_time"],
                event["military_end_time"],
                time.strftime("%Y-%m-%d"),
                event["carbon_points"],
            )
        )

    return json.dumps(current_events, cls=EventEncoder)


@app.route("/add_event", methods=["POST"])
def add_event_sql():
    event_name = request.form["event_name"]
    event_description = request.form["event_description"]
    start_time = request.form["start_time"]
    end_time = request.form["end_time"]
    date = request.form["date"]
    carbon_points = request.form["carbon_points"]
    user_id = request.form["user_id"]

    cur = get_db().cursor()
    cur.execute(
        "INSERT INTO events (user_id, name, description, start_time, end_time, date, carbon_points) VALUES (?, ?, ?, ?, ?, ?, ?)",
        (
            user_id,
            event_name,
            event_description,
            start_time,
            end_time,
            date,
            carbon_points,
        ),
    )
    get_db().commit()

    # verify that the event was added
    cur.execute(
        "SELECT * FROM events WHERE name = ? AND user_id = ?", (event_name, user_id)
    )
    output = cur.fetchone()
    if output is None:
        return f"Event '{event_name}' not added."

    return f"Event '{event_name}' added."


@app.route("/get_events/<user_id>", methods=["GET"])
def get_events(user_id):
    # get all events from the database associated with John Doe
    if user_id is None:
        user_id = 1
    cur = get_db().cursor()
    cur.execute("SELECT * FROM events WHERE user_id = ?", (user_id,))
    events = cur.fetchall()
    # convert the events to Event objects
    events = [
        Event(
            event[1],
            event[2],
            event[3],
            event[4],
            event[5],
            event[7],
        )
        for event in events
    ]
    return json.dumps(events, cls=EventEncoder)


@app.route("/delete_event", methods=["POST"])
def delete_event_sql():
    event_name = request.form["event_name"]
    user_id = request.form["user_id"]

    cur = get_db().cursor()
    cur.execute(
        "DELETE FROM events WHERE name = ? AND user_id = ?", (event_name, user_id)
    )
    get_db().commit()

    return f"Event '{event_name}' deleted."


# TODO: make this dynamic
@app.route("/set_points", methods=["POST"])
def set_points_sql():
    my_points = request.form["points"]
    user_id = request.form["user_id"]
    cur = get_db().cursor()
    cur.execute("UPDATE users SET points = ? WHERE id = ?", (my_points, user_id))
    get_db().commit()
    return f"Set points to {my_points}."


@app.route("/get_points/<user_id>", methods=["GET"])
def get_points_sql(user_id):
    cur = get_db().cursor()
    cur.execute("SELECT points FROM users WHERE id = ?", (user_id))
    output = cur.fetchone()[0]
    return f"{output}"


@app.route("/get_leaderboard/<user_id>", methods=["GET"])
def get_leaderboard(user_id):
    conn = get_db()
    c = conn.cursor()
    c.execute("SELECT * FROM users ORDER BY points DESC LIMIT 10")
    rows = c.fetchall()
    output = []
    position = 1
    for row in rows:
        user = {"position": position, "name": row[1], "score": row[2]}
        output.append(user)
        position += 1
    # Check if user is in top 10
    user_in_top_10 = False
    # If user is not in top 10, add them to 11th position
    if not user_in_top_10:
        c.execute(
            "SELECT COUNT(*) FROM users WHERE points > (SELECT points FROM users WHERE id = ?)",
            (user_id,),
        )
        result = c.fetchone()
        user_position = result[0] + 1
        c.execute(f"SELECT points FROM users WHERE id = {user_id}")
        result = c.fetchone()
        user_score = result[0]
        # get the name of the user with the id
        c.execute(f"SELECT name FROM users WHERE id = {user_id}")
        user_name = c.fetchone()[0]
        user = {
            "position": user_position,
            "name": user_name,
            "score": user_score,
        }
        if user_position > 10:
            output.append(user)
    return json.dumps(output)


@app.route("/get_groups/<user_id>", methods=["GET"])
def get_groups(user_id):
    cur = get_db().cursor()

    # use a join to make this query select by user
    cur.execute(
        """
        SELECT groups.name, groups.id, groups.description
        FROM groups
        INNER JOIN users_groups ON groups.id = users_groups.group_id
        INNER JOIN users ON users_groups.user_id = users.id
        WHERE users.id = ?
        """,
        (user_id),
    )

    groups = cur.fetchall()
    groups = [
        {"name": group[0], "id": group[1], "description": group[2]} for group in groups
    ]

    return json.dumps(groups)


@app.route("/get_group_users/<group_id>", methods=["GET"])
def get_group_users(group_id):
    cur = get_db().cursor()
    cur.execute(
        """
        SELECT users.name, users.id
        FROM users
        INNER JOIN users_groups ON users.id = users_groups.user_id
        INNER JOIN groups ON users_groups.group_id = groups.id
        WHERE groups.id = ?
        """,
        (group_id,),
    )
    users = cur.fetchall()
    users = [{"name": user[0], "id": user[1]} for user in users]
    return json.dumps(users)


@app.route("/get_group_leaderboard/<group_id>/<user_id>", methods=["GET"])
def get_group_leaderboard(group_id, user_id):
    conn = get_db()
    c = conn.cursor()
    c.execute(
        f"""SELECT * FROM users 
        INNER JOIN users_groups ON users.id = users_groups.user_id
        WHERE users_groups.group_id = {group_id} 
        ORDER BY points DESC LIMIT 10""",
    )
    rows = c.fetchall()
    output = []
    position = 1
    for row in rows:
        user = {"position": position, "name": row[1], "score": row[2]}
        output.append(user)
        position += 1
    # Check if user is in top 10
    user_in_top_10 = False
    # If user is not in top 10, add them to 11th position
    if not user_in_top_10:
        c.execute(
            f"""SELECT COUNT(*) FROM users 
            INNER JOIN users_groups ON users.id = users_groups.user_id
            WHERE points > (SELECT points FROM users WHERE id = {user_id})
            AND users_groups.group_id = {group_id}""",
        )
        result = c.fetchone()
        user_position = result[0] + 1
        c.execute(f"SELECT points FROM users WHERE id = {user_id}")
        result = c.fetchone()
        user_score = result[0]
        # get the name of the user with the id
        c.execute(f"SELECT name FROM users WHERE id = {user_id}")
        user_name = c.fetchone()[0]
        user = {
            "position": user_position,
            "name": user_name,
            "score": user_score,
        }
        if user_position > 10:
            output.append(user)
    return json.dumps(output)
