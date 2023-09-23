import { useNavigation, useFocusEffect } from "@react-navigation/native";
import moment from "moment/moment";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";

import get_events from "../api/get_events.js";

const AgendaScreen = ({ route }) => {
  const navigator = useNavigation();
  const [events, setEvents] = useState(null);
  console.log(events);

  useEffect(() => {
    get_events(setEvents);
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log(route.params);
      if (route.params !== undefined) {
        console.log("hi");
      }
    }, []),
  );

  if (events == null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        selected="2023-09-23"
        items={events}
        renderItem={(item, index) => {
          const startTime = moment(item.start_time, "HH:mm");
          const endTime = moment(item.end_time, "HH:mm");
          const duration = moment.duration(endTime.diff(startTime));
          const height = duration.asMinutes() * 2; // 2 pixels per minute
          return (
            <TouchableOpacity
              style={[styles.item, { height }]}
              onPress={() =>
                navigator.navigate("Event", {
                  event: item.event_name,
                  start_time: item.start_time,
                  end_time: item.end_time,
                  points: item.carbon_points,
                  date: item.date,
                  eventDescription: item.event_description,
                  completed: item.completed,
                })
              }
            >
              <Text style={styles.itemText}>{item.event_name}</Text>
              <Text style={styles.itemDescription}>
                {item.event_description}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
});

export default AgendaScreen;
