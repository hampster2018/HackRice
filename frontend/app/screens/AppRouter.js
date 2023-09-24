import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

import CalendarScreen from "./AgendaScreen";
import Event from "./Event";
import GainedPoints from "./GainedPoints";
import { Calendar } from "react-native-calendars";

// Sample Components

const Home = () => {
  const email = useSelector((state) => state.user.email);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Leaderboard = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Leaderboard Screen</Text>
    </View>
  );
};

// App Router using Stack Navigator
const Drawer = createDrawerNavigator();

const AppRouter = ({route}) => {
  console.log("AppRouter");
  console.log(route);
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
        component={Leaderboard}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={24} color="black" />
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
