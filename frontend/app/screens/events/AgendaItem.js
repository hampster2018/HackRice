import { Feather } from "@expo/vector-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { StyleSheet, View, Text } from "react-native";

const AgendaItem = ({ event }) => {
  let icon = "square";
  if (event.addToSchedule === true) {
    icon = "check-square";
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.event_name}</Text>
      <Text style={styles.description}>{event.event_description}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.time}>
        {event.start_time} - {event.end_time}
      </Text>
      <Text style={styles.points}>Carbon Points: {event.carbon_points}</Text>
      <View style={styles.iconContainer}>
        <Feather name={icon} size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    width: "90%",
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
    fontStyle: "italic",
    marginBottom: 20,
  },
  points: {
    marginTop: 20,
    fontWeight: "bold",
  },
  completed: {
    marginTop: 10,
    color: "#f00",
  },
});

export default AgendaItem;
