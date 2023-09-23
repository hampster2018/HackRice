import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

// Sample Components

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Calendar = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Calendar Screen</Text>
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
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Leaderboard" component={Leaderboard} />
    </Drawer.Navigator>
  );
};

export default AppRouter;
