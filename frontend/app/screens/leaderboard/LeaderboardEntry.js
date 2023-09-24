import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LeaderboardEntry({ name, score, rank }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{rank}. </Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rank: {
    fontSize: 18,
    flex: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  score: {
    fontSize: 18,
    flex: 1,
    textAlign: "right",
  },
});
