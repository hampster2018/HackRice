import openai
import json
from typing import List


def generate_schedule(transcription: str) -> List[object]:
    with open("secrets.json", "r") as f:
        secrets = json.load(f)["key"]
        openai.api_key = secrets

    model = "gpt-3.5-turbo"

    # transcription = """
    # I want to pick up my prescription, do my laundry, and get some groceries from the grocery store.
    # """

    messages = [
        {
            "role": "system",
            "content": "You are a climate-conscious schedule planner. Your client will give you a list of tasks to complete in a day. Output a schedule.",
        },
        {"role": "user", "content": transcription},
    ]

    functions = [
        {
            "name": "generate_schedule",
            "description": "This function will generate a schedule for the user to view and follow.",
            "parameters": {
                "type": "object",
                "properties": {
                    "events": {
                        "type": "array",
                        "description": "The list of events to be scheduled. Do not format.",
                        "items": {
                            "type": "object",
                            "properties": {
                                "name_of_event": {
                                    "type": "string",
                                    "description": "The name of the event.",
                                },
                                "description_of_event": {
                                    "type": "string",
                                    "description": "The description of the event.",
                                },
                                "military_start_time": {
                                    "type": "string",
                                    "description": "The start time of the event in military time such as 20:00 or 08:30. Do not put AM or PM. Choose a realistic start time.",
                                },
                                "military_end_time": {
                                    "type": "string",
                                    "description": "The end time of the event in military time such as 21:00 or 09:30. Do not put AM or PM. Choose a realistic end time considering the start time and the description of the event. The end time must be after the start time.",
                                },
                                "carbon_points": {
                                    "type": "number",
                                    "description": "This number represents the carbon footprint of the event. The lower the number, the better. The carbon footprint must be a positive integer.",
                                },
                            },
                        },
                    },
                },
            },
        }
    ]

    function_call = {
        "name": "generate_schedule",
    }

    completion = openai.ChatCompletion.create(
        model=model, messages=messages, functions=functions, function_call=function_call
    )

    # print(completion)

    event_list = json.loads(completion.choices[0].message.function_call.arguments)[
        "events"
    ]

    # change the messages to feed the schedule back into the system and let ChatGPT generate a more optimal schedule
    messages = [
        {
            "role": "system",
            "content": f"The user has the following schedule:\n\n{json.dumps(event_list)}. Rewrite the user's schedule to lower the carbon footprint. Change the order of the events to accomplish this. Do not leave the ordering the same. Include the description of the event.",
        },
    ]

    completion = openai.ChatCompletion.create(
        model=model, messages=messages, functions=functions, function_call=function_call
    )

    # print(completion)

    event_list = json.loads(completion.choices[0].message.function_call.arguments)[
        "events"
    ]

    return event_list


if __name__ == "__main__":
    test_output = generate_schedule(
        "I want to pick up my prescription, do my laundry, and get some groceries from the grocery store."
    )

    print(test_output)

    # write the output to a json file
    with open("output.json", "w") as f:
        f.write(json.dumps(test_output))
