import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import LeaderboardEntry from "./LeaderboardEntry";
import Podium from "./Podium";

export default function Leaderboard({ groupId }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(
          `https://highly-boss-dodo.ngrok-free.app/get_group_leaderboard/${groupId}/1`
        );
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeaderboard();
  }, [groupId]);

  if (!entries) return null;

  return (
    <View style={styles.container}>
      <Podium leaderboardData={entries.slice(0, 3)} />
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "black",
          width: "90%",
        }}
      />
      {entries.slice(3, entries.length).map((entry, index) => (
        <LeaderboardEntry
          key={index}
          name={entry.name}
          score={entry.score}
          rank={index + 4}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
  },
});
