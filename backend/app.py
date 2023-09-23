from typing import Dict, List
from flask import Flask
from flask_cors import CORS
import openai
from generate_optimal_function import generate_schedule
import json
from flask import request
import sqlite3
from flask import g

with open("secrets.json", "r") as f:
    secrets = json.load(f)["key"]
    openai.api_key = secrets

app = Flask(__name__)
CORS(app)
app.config["DATABASE"] = "backend_database.db"


class Event:
    def __init__(
        self, event_name, event_description, start_time, end_time, date
    ) -> None:
        self.event_name = event_name
        self.event_description = event_description
        self.start_time = start_time
        self.end_time = end_time
        self.date = date


class EventEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Event):
            return {
                "event_name": obj.event_name,
                "event_description": obj.event_description,
                "start_time": obj.start_time,
                "end_time": obj.end_time,
                "date": obj.date,
            }
        return super().default(obj)


def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(app.config["DATABASE"])
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
                "2023-09-23",
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

    cur = get_db().cursor()
    cur.execute(
        "INSERT INTO events (user_id, name, description, start_time, end_time, date) VALUES (1, ?, ?, ?, ?, ?)",
        (event_name, event_description, start_time, end_time, date),
    )
    get_db().commit()

    cur.execute("SELECT * FROM events")
    # print(cur.fetchall())

    # verify that the event was added
    cur.execute("SELECT * FROM events WHERE name = ?", (event_name,))
    output = cur.fetchone()
    if output is None:
        return f"Event '{event_name}' not added."

    return f"Event '{event_name}' added."


@app.route("/get_events", methods=["GET"])
def get_events_sql():
    # get all events from the database associated with John Doe
    cur = get_db().cursor()
    cur.execute("SELECT * FROM events")
    events = cur.fetchall()
    # print(events)
    # convert the events to Event objects
    events = [
        Event(
            event[1],
            event[2],
            event[3],
            event[4],
            event[5],
        )
        for event in events
    ]
    return json.dumps(events, cls=EventEncoder)


@app.route("/delete_event", methods=["POST"])
def delete_event_sql():
    event_name = request.form["event_name"]

    cur = get_db().cursor()
    cur.execute("DELETE FROM events WHERE name = ?", (event_name,))
    get_db().commit()

    return f"Event '{event_name}' deleted."


@app.route("/set_points", methods=["POST"])
def set_points_sql():
    my_points = request.form["points"]
    cur = get_db().cursor()
    cur.execute("UPDATE users SET points = ? WHERE id = 1", (my_points,))
    get_db().commit()
    return f"Set points to {my_points}."


@app.route("/get_points", methods=["GET"])
def get_points_sql():
    cur = get_db().cursor()
    cur.execute("SELECT points FROM users WHERE id = 1")
    output = cur.fetchone()[0]
    return f"{output}"
