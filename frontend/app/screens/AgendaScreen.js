import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import moment from "moment/moment";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const AgendaScreen = (data, { route }) => {
  const navigator = useNavigation();
  const events = useSelector((state) => state.user.events);
  console.log(events);
  const [selectedDate, setSelectedDate] = useState(
    new Date().getFullYear() +
      "-" +
      new Date().getDate() +
      "-" +
      new Date().getMonth()
  );

  useFocusEffect(() => {}, []);

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
        selected="2023-09-24"
        items={events}
        renderItem={(item) => {
          const startTime = moment(item.start_time, "HH:mm");
          const endTime = moment(item.end_time, "HH:mm");
          const duration = moment.duration(endTime.diff(startTime));
          const height = duration.asMinutes() * 2; // 2 pixels per minute
          let icon = "square";
          if (item.completed === 1) {
            icon = "check-square";
          }
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
              <View style={styles.textContainer}>
                <Text style={styles.itemText}>{item.event_name}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Feather name={icon} size={30} color="black" />
              </View>
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
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  iconContainer: {
    height: "100%",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flexDirection: "row",
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
});

export default AgendaScreen;
