import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import complete_event from "../../api/complete_event";
import get_events from "../../api/get_events";
import { setEvents } from "../../reducers/UserReducer";

const Event = ({ route, navigation }) => {
  const {
    event,
    points,
    start_time,
    end_time,
    date,
    eventDescription,
    completed,
  } = route.params;
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);
  const hour = parseInt(start_time.split(":")[0], 10);
  const minute = parseInt(start_time.split(":")[1], 10);
  let numHours = hour - new Date().getHours();
  let numMinutes = minute - new Date().getMinutes();
  if (numMinutes < 0) {
    numHours += 1;
    numMinutes += 60;
  }
  let timeString = "";
  if (numHours > 0) {
    timeString += numHours + "h ";
  }
  if (numMinutes > 0) {
    timeString += numMinutes + "m";
  }
  if (timeString === "") {
    timeString = "In Progress";
  }
  const re = /(\b[a-z](?!\s))/g;
  const eventNew = event.replace(re, (x) => x.toUpperCase());

  return (
    <View style={styles.page}>
      <View style={styles.backArrow}>
        <AntDesign
          name="leftsquareo"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Calendar")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.eventTitle}>{eventNew}</Text>
          <Text style={styles.eventTimeTillTitle}>Time until event:</Text>
          <Text style={styles.eventTimeTill}>{timeString}</Text>
          <Text style={styles.eventDate}>Date: {date}</Text>
          <Text style={styles.eventTime}>
            Time: {start_time} - {end_time}
          </Text>
          <Text style={styles.eventDescriptionTitle}>Event Description:</Text>
          <Text style={styles.eventDescription}>{eventDescription}</Text>
        </View>
        <View style={styles.finishTaskButton}>
          <Pressable
            onPress={async () => {
              const newPoints = await complete_event(event, 1, 1, points);
              const events = await get_events(id);
              dispatch(setEvents(events));
              navigation.navigate("GainedPoints", {
                points: newPoints,
                event,
              });
            }}
          >
            <Text>Finished Task</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backArrow: {
    marginTop: "10%",
    marginLeft: "5%",
  },
  container: {
    flex: 1,
    width: "80%",
    height: "70%",
    marginLeft: "10%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  infoContainer: {
    height: "90%",
  },
  eventTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
  eventTimeTillTitle: {
    fontSize: 15,
    fontWeight: "medium",
    marginTop: 50,
  },
  eventTimeTill: {
    fontSize: 30,
    fontWeight: "semibold",
  },
  eventDate: {
    fontSize: 15,
    fontWeight: "medium",
    marginTop: 30,
  },
  eventTime: {
    fontSize: 15,
    fontWeight: "medium",
  },
  eventDescriptionTitle: {
    marginTop: "10%",
    fontSize: 15,
    fontWeight: "thin",
  },
  eventDescription: {
    fontSize: 20,
    fontWeight: "bold",
  },
  finishTaskButton: {
    alignSelf: "center",
    width: "50%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Event;
