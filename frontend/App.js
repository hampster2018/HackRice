import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./app/screens/Login.js";
import AppRouter from "./app/screens/AppRouter.js";
import Events from "./app/screens/Events.js";
import Event from "./app/screens/Event.js";
import GainedPoints from "./app/screens/GainedPoints.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={AppRouter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Event"
            component={Event}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GainedPoints"
            component={GainedPoints}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
