import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import ScheduleLoading from "./ScheduleLoading";
import get_events from "../../api/get_events";
import { addEvent, setEvents } from "../../reducers/UserReducer";
import { API_PREFIX } from "../../utils/api.utils";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const recordingOptions = {
  android: {
    extension: ".m4a",
  },
  ios: {
    extension: ".wav",
  },
};

const RecordScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [recording, setRecording] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigator = useNavigation();
  const dispatch = useDispatch();

  const user_id = useSelector((state) => state.user.id);

  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 3000)
    );
  };

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setElapsedTime((elapsedTime) => elapsedTime + 1);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleRecordPress = async () => {
    if (!isRecording) {
      try {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } =
          await Audio.Recording.createAsync(recordingOptions);
        setRecording(recording);
        console.log("Recording started");
        setIsRecording(true);
      } catch (error) {
        console.log("Error starting recording:", error);
      }
    } else {
      try {
        setIsRecording(false);
        await recording.stopAndUnloadAsync();
        const uri = await recording.getURI();

        const formData = new FormData();
        formData.append("file", {
          uri,
          type: "audio/wav",
          name: "recording.wav",
        });
        setLoading(true);
        const response = await fetch(`${API_PREFIX}/transcribe_schedule`, {
          method: "POST",
          body: formData,
        });
        setLoading(false);
        const data = await response.json();

        data.forEach(async (event) => {
          console.log("posting", event);
          console.log("user_id", user_id);
          const formdata = new FormData();
          formdata.append("carbon_points", event.carbon_points);
          formdata.append("date", event.date);
          formdata.append("end_time", event.end_time);
          formdata.append("event_description", event.event_description);
          formdata.append("event_name", event.event_name);
          formdata.append("start_time", event.start_time);
          formdata.append("user_id", user_id);

          const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
          };

          await fetch(
            "https://highly-boss-dodo.ngrok-free.app/add_event",
            requestOptions
          );
        });
        console.log("Post Data");
        console.log(data);

        const newerData = await get_events(user_id);
        console.log("Get Data");
        console.log(newerData);
        dispatch(setEvents(newerData));

        //navigator.navigate("Calendar");
      } catch (error) {
        console.log("Error stopping recording:", error);
      }
    }
  };

  return (
    <>
      {loading ? (
        <ScheduleLoading />
      ) : (
        <View style={styles.container}>
          <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
          <TouchableOpacity
            style={styles.recordButton}
            onPress={handleRecordPress}
          >
            <FontAwesome
              name={isRecording ? "stop" : "microphone"}
              size={64}
              color="white"
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "10%",
  },
  recordButton: {
    backgroundColor: "red",
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    marginTop: 20,
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
  },
  timer: {
    fontSize: 80,
    marginBottom: 300,
  },
});

export default RecordScreen;
