import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Example from "./app/screens/Example.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./app/screens/Login.js";
import AppRouter from "./app/screens/AppRouter.js";
import { Provider } from "react-redux";
import store from "./app/redux/store.js";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
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
