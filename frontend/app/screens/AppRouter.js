import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Leaderboard" component={Leaderboard} />
    </Drawer.Navigator>
  );
};

export default AppRouter;
