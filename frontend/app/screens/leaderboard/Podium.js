// Podium.js
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Podium({ leaderboardData }) {
  return (
    <View style={styles.container}>
      {/* Second Position */}
      <View style={styles.second}>
        <Text style={styles.name}>{leaderboardData[1]?.name}</Text>
        <Text style={styles.score}>{leaderboardData[1]?.score}</Text>
      </View>

      {/* First Position */}
      <View style={styles.first}>
        <AntDesign name="Trophy" size={64} color="black" />
        <Text style={styles.name}>{leaderboardData[0]?.name}</Text>
        <Text style={styles.score}>{leaderboardData[0]?.score}</Text>
      </View>

      {/* Third Position */}
      <View style={styles.third}>
        <Text style={styles.name}>{leaderboardData[2]?.name}</Text>
        <Text style={styles.score}>{leaderboardData[2]?.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  first: {
    height: 175,
    width: 110,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  second: {
    height: 150,
    width: 100,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 15,
  },
  third: {
    height: 130,
    width: 90,
    backgroundColor: "#cd7f32",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 15,
  },
  name: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 2,
  },
  score: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 2,
  },
});
