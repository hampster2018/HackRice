import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import AgendaItem from "./AgendaItem";
import { Agenda } from "react-native-calendars";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";

const width_proportion = "80%";
const pixel_height = 100;

function transformDataForAgenda(data) {
  const result = {};

  data.forEach((item) => {
    const date = item.date;

    // Exclude the 'date' key from the item as it is not needed in the result format.
    const transformedItem = {
      name: item.event_name,
      addToSchedule: true,
      ...item,
    };
    delete transformedItem.date;

    if (result[date]) {
      result[date].push(transformedItem);
    } else {
      result[date] = [transformedItem];
    }
  });

  return result;
}

function Events({ route, navigation }) {
  const events = route.params.data;
  // const [agendaEvents, setAgendaEvents] = useState(
  //   transformDataForAgenda(events)
  // );
  //console.log(agendaEvents);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.title} marginBottom={15}>
            Your Optimal Schedule
          </Text>
        </View>
        {events.map((event) => {
          return (
            <Pressable key={event.event_name}>
              <AgendaItem event={event} />
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
    // <View style={{ flex: 1 }}>
    //   <Agenda
    //     selected="2023-09-24"
    //     items={agendaEvents}
    //     renderItem={(item, index) => {
    //       console.log(item.event_name);
    //       const startTime = moment(item.start_time, "HH:mm");
    //       const endTime = moment(item.end_time, "HH:mm");
    //       const duration = moment.duration(endTime.diff(startTime));
    //       const height = Math.max(duration.asMinutes() * 2, 90); // 2 pixels per minute
    //       let icon = "square";
    //       if (item.addToSchedule === true) {
    //         icon = "check-square";
    //       }
    //       return (
    //         <TouchableOpacity
    //           key={item.event_name}
    //           style={[styles.item, { height }]}
    //           onPress={() => {
    //             item.addToSchedule = !item.addToSchedule;
    //             const newItems = { ...agendaEvents, [item.event_date]: item };
    //             setAgendaEvents(newItems);
    //           }}
    //         >
    //           <View style={styles.textContainer}>
    //             <Text style={styles.itemText}>{item.event_name}</Text>
    //             <Text style={styles.itemText}>{item.event_description}</Text>
    //             <Text style={styles.time}>
    //               {item.start_time} - {item.end_time}
    //             </Text>
    //           </View>
    //           <View style={styles.iconContainer}>
    //             <Feather name={icon} size={30} color="black" />
    //           </View>
    //         </TouchableOpacity>
    //       );
    //     }}
    //   />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: "flex-start",
//     width: "100%",
//   },
//   iconContainer: {
//     height: "100%",
//     justifyContent: "center",
//   },
//   item: {
//     backgroundColor: "white",
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17,
//     flexDirection: "row",
//   },
//   itemText: {
//     color: "#888",
//     fontSize: 16,
//   },
// });

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 15,
    marginBottom: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
  date: {
    fontWeight: "bold",
    fontSize: 16,
  },
  time: {
    marginTop: 5,
    color: "#888",
  },
  eventName: {
    marginTop: 10,
    fontSize: 18,
  },
  description: {
    marginTop: 10,
    fontStyle: "italic",
  },
  points: {
    marginTop: 10,
    fontWeight: "bold",
  },
  completed: {
    marginTop: 10,
    color: "#f00",
  },
});

export default Events;
