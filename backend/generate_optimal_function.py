import openai
import json
from typing import List


class ScheduleItem:
    def __init__(self, name, description, time, carbon_footprint):
        self.name = name
        self.description = description
        self.time = time
        self.carbon_footprint = carbon_footprint


def generate_schedule(transcription: str) -> List[ScheduleItem]:
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
                                "military_time_interval_of_event": {
                                    "type": "string",
                                    "description": "The time of the event in military time such as 20:00-21:00. Do not put AM or PM.",
                                },
                                "carbon_footprint_reduction_by_scheduling": {
                                    "type": "string",
                                    "description": "How the schedule reduces the carbon footprint.",
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

    # print(f'The transcription """{transcription}""" returns: \n\n')

    # for event in event_list:
    #     print(f"The name of the event is {event['name_of_event']}")
    #     print(f"The description of the event is {event['description_of_event']}")
    #     print(
    #         f"The military time interval of the event is {event['military_time_interval_of_event']}"
    #     )
    #     print()

    # change the messages to feed the schedule back into the system and let ChatGPT generate a more optimal schedule
    messages = [
        {
            "role": "system",
            "content": f"The user has the following schedule:\n\n{json.dumps(event_list)}. Rewrite the user's schedule to lower the carbon footprint. Change the order of the events to accomplish this. Do not leave the ordering the same.",
        },
    ]

    completion = openai.ChatCompletion.create(
        model=model, messages=messages, functions=functions, function_call=function_call
    )

    # print(completion)

    # event_list = json.loads(completion.choices[0].message.function_call.arguments)[
    #     "events"
    # ]

    # print(f'The transcription """{transcription}""" returns: \n\n')

    # for event in event_list:
    #     print(f"The name of the event is {event['name_of_event']}")
    #     print(f"The description of the event is {event['description_of_event']}")
    #     print(
    #         f"The military time interval of the event is {event['military_time_interval_of_event']}"
    #     )
    #     print()

    # convert the event_list to a list of ScheduleItem objects with typing
    event_list = [
        ScheduleItem(
            event["name_of_event"],
            event["description_of_event"],
            event["military_time_interval_of_event"],
            event["carbon_footprint_reduction_by_scheduling"],
        )
        for event in event_list
    ]

    return event_list
