import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import CalendarScreen from "./AgendaScreen";
import LeaderboardScreen from "./leaderboard/LeaderBoardScreen";
import Home from "./Home";
// Sample Components

// const Leaderboard = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Leaderboard Screen</Text>
//     </View>
//   );
// };

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
        component={LeaderboardScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="barschart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppRouter;
