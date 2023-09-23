import React from "react";
import { SceneMap, TabView } from "react-native-tab-view";

import Leaderboard from "./Leaderboard";

const SLBRoute = () => <Leaderboard region="slb" />;

const StateRoute = () => <Leaderboard region="state" />;

const renderScene = SceneMap({
  slb: SLBRoute,
  state: StateRoute,
});

export default function LeaderboardScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "slb", title: "SLB" },
    { key: "state", title: "Regional" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
}
