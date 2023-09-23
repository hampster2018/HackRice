import React from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import Leaderboard from "./Leaderboard";
import theme from "../../theme/Theme";

const FirstTab = () => <Leaderboard groupId="1" />;

const SecondTab = () => <Leaderboard groupId="2" />;

const renderScene = SceneMap({
  bfs: FirstTab,
  slb: SecondTab,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: theme.colors.green }}
  />
);

export default function LeaderboardScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "bfs", title: "Best Friends" },
    { key: "slb", title: "SLB" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabStyle={{ borderRadius: 10, backgroundColor: "#fff" }}
      renderTabBar={renderTabBar}
      // renderTabBar={CustomTabBar}
    />
  );
}
