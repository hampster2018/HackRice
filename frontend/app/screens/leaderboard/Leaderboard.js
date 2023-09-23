import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import LeaderboardEntry from "./LeaderboardEntry";
import SLBData from "./slb.leaderboard.json";
import TXData from "./tx.leaderboard.json";

export default function Leaderboard({ region }) {
  const entries = useSelector((state) => {
    switch (region) {
      case "slb":
        return SLBData;
      case "zipcode":
        return state.zipcodeEntries;
      case "city":
        return state.cityEntries;
      case "state":
        return TXData;
      default:
        return [];
    }
  });

  return (
    <View style={styles.container}>
      {entries.slice(0, 5).map((entry, index) => (
        <LeaderboardEntry
          key={index}
          name={entry.name}
          score={entry.score}
          rank={index + 1}
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
