import { FontAwesome } from "@expo/vector-icons";
import { Audio, RECORDING_OPTIONS_PRESET_HIGH_QUALITY } from "expo-av";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { API_PREFIX } from "../../utils/api.utils";

const recording = new Audio.Recording();

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const RecordScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setElapsedTime((elapsedTime) => elapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleRecordPress = async () => {
    if (!isRecording) {
      try {
        console.log("Requesting permissions..");
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        console.log("Starting recording..");
        await recording.prepareToRecordAsync(
          RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        await recording.startAsync();
        console.log("Recording started");
        setIsRecording(true);
      } catch (error) {
        console.log("Error starting recording:", error);
      }
    } else {
      try {
        await recording.stopAndUnloadAsync();
        setIsRecording(false);

        const { sound: newSound } = await recording.createNewLoadedSoundAsync();

        const formData = new FormData();
        formData.append("file", {
          uri: newSound.uri,
          type: "audio/wav",
          name: "recording.wav",
        });
        console.log("sending recording");
        const response = await fetch(`${API_PREFIX}/transcribe_schedule`, {
          method: "POST",
          body: formData,
        });

        console.log("Transcription response:", response);
      } catch (error) {
        console.log("Error stopping recording:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
      <TouchableOpacity style={styles.recordButton} onPress={handleRecordPress}>
        <FontAwesome
          name={isRecording ? "stop" : "microphone"}
          size={64}
          color="white"
        />
      </TouchableOpacity>
    </View>
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
});

export default RecordScreen;
