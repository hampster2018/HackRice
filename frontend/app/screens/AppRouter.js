import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import CalendarScreen from "./AgendaScreen";

// Sample Components

const Home = () => {
  const email = useSelector((state) => state.user.email);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome, {email}!</Text>
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

const AppRouter = () => {
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
    </Drawer.Navigator>
  );
};

export default AppRouter;
