import moment from "moment/moment";
import React from "react";
import { Agenda } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

const AgendaScreen = () => {
  const [items, setItems] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://highly-boss-dodo.ngrok-free.app/get_events"
      );
      const data = await response.json();
      console.log(data);
      const eventsByDate = data.reduce((acc, event) => {
        const date = event.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(event);
        return acc;
      }, {});
      console.log(eventsByDate);
      setItems(eventsByDate);
    }
    fetchData();
  }, []);

  if (!items) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log(items);

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        selected="2023-09-23"
        items={items}
        renderItem={(item, isFirst) => {
          console.log(item);
          const startTime = moment(item.start_time, "HH:mm");
          const endTime = moment(item.end_time, "HH:mm");
          const duration = moment.duration(endTime.diff(startTime));
          const height = duration.asMinutes() * 2; // 2 pixels per minute
          return (
            <TouchableOpacity style={[styles.item, { height }]}>
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
