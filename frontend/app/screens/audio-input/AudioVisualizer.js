import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { start, stop, addListener } from "react-native-microphone-stream";

function AudioVisualizer() {
  const [amplitude, setAmplitude] = useState(0);

  useEffect(() => {
    start({
      sampleRate: 44100, // default is 44100 but android only supports 44100
      channels: 1, // 1 or 2, default 1
      bitsPerSample: 16, // 8 or 16, default 16
      audioSource: 6, // android only (see below)
    });

    const listener = addListener((data) => {
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i] * data[i];
      }
      let rms = Math.sqrt(sum / data.length);
      setAmplitude(rms);
    });

    return () => {
      stop();
      listener.remove();
    };
  }, []);

  const dynamicHeight = {
    height: amplitude * 2, // you might want to adjust the multiplier for better visualization
  };

  return <View style={[styles.visualizer, dynamicHeight]} />;
}

const styles = StyleSheet.create({
  visualizer: {
    width: 50, // static width, adjust as needed
    backgroundColor: "red", // color for the visualization
  },
});

export default AudioVisualizer;
