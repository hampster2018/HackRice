import { Agenda } from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment/moment";

const AgendaScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Agenda
        selected="2023-09-24"
        items={{
          "2023-09-24": [
            {
              name_of_event: "Do laundry",
              description_of_event: "Wash and fold laundry",
              military_start_time: "11:30",
              military_end_time: "13:00",
            },
            {
              name_of_event: "Pick up prescription",
              description_of_event:
                "Go to the pharmacy and pick up prescription",
              military_start_time: "10:00",
              military_end_time: "11:00",
            },
            {
              name_of_event: "Grocery shopping",
              description_of_event: "Buy groceries at the grocery store",
              military_start_time: "14:00",
              military_end_time: "15:00",
            },
          ],
        }}
        renderItem={(item, isFirst) => {
          const startTime = moment(item.military_start_time, "HH:mm:ss");
          const endTime = moment(item.military_end_time, "HH:mm:ss");
          const duration = moment.duration(endTime.diff(startTime));
          const height = duration.asMinutes() * 2; // 2 pixels per minute
          return (
            <TouchableOpacity style={[styles.item, { height }]}>
              <Text style={styles.itemText}>{item.name_of_event}</Text>
              <Text style={styles.itemDescription}>
                {item.description_of_event}
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
