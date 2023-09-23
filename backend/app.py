from typing import Dict, List
from flask import Flask
from flask_cors import CORS
import openai
from generate_optimal_function import generate_schedule
import json
from flask import request

with open("secrets.json", "r") as f:
    secrets = json.load(f)["key"]
    openai.api_key = secrets

app = Flask(__name__)
CORS(app)


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


events: List[Event] = [
    Event(
        "Pick up prescription",
        "Pick up prescription from the pharmacy.",
        "09:00",
        "09:30",
        "2021-10-10",
    ),
    Event("Do laundry", "Do laundry.", "09:30", "10:30", "2021-10-10"),
    Event(
        "Get groceries",
        "Get groceries from the grocery store.",
        "10:30",
        "11:30",
        "2021-10-10",
    ),
]


@app.route("/test")
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
                "2021-10-10",
            )
        )

    return json.dumps(current_events, cls=EventEncoder)


@app.route("/add_event", methods=["POST"])
def add_event():
    event_name = request.form["event_name"]
    event_description = request.form["event_description"]
    start_time = request.form["start_time"]
    end_time = request.form["end_time"]
    date = request.form["date"]

    event = Event(event_name, event_description, start_time, end_time, date)
    events.append(event)

    return f"Event '{event_name}' added."


@app.route("/get_events", methods=["GET"])
def get_events():
    return json.dumps(events, cls=EventEncoder)


@app.route("/delete_event", methods=["POST"])
def delete_event():
    event_name = request.form["event_name"]
    for event in events:
        if event.event_name == event_name:
            events.remove(event)
            return f"Event '{event_name}' deleted."
    return f"Event '{event_name}' not found."
