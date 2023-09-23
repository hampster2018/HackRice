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


@app.route("/test")
def test():
    return "Hello World"


@app.route("/transcribe_schedule", methods=["POST"])
def transcribe_schedule():
    print(f"Received: {request}")
    file = request.files["file"]
    filename = file.filename
    file.save(filename)
    transcription = openai.Audio.transcribe("whisper-1", filename)
    output = generate_schedule(transcription)

    # map the ScheduleItem objects to dictionaries with the military time interval separated
    output = [item.__dict__ for item in output]
    for item in output:
        item["start_time"] = item["time"].split("-")[0]
        item["end_time"] = item["time"].split("-")[1]
        del item["time"]

    print(f"Outputting: {output}")

    return output
