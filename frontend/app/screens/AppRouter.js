import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import CalendarScreen from "./AgendaScreen";
import Event from "./events/Event";
import GainedPoints from "./GainedPoints";
import Home from "./Home";
import LeaderboardScreen from "./leaderboard/LeaderBoardScreen";
const Drawer = createDrawerNavigator();

const AppRouter = ({ route }) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalendarScreen}
        initialParams={{ data: route.params }}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="barschart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Event"
        component={Event}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="GainedPoints"
        component={GainedPoints}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppRouter;
