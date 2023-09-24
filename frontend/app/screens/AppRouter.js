import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import CalendarScreen from "./AgendaScreen";
import DonatePoints from "./DonatePoints";
import DonateScreen from "./DonateScreen";
import Event from "./Event";
import GainedPoints from "./GainedPoints";
import Home from "./Home";
import LeaderboardScreen from "./leaderboard/LeaderBoardScreen";
import SmartHome from "./SmartHome";

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
        name="Smart Home"
        component={SmartHome}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="dashboard" size={size} color={color} />
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
        name="Donate to Charity"
        component={DonateScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="donate" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Commit Donation"
        component={DonatePoints}
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
