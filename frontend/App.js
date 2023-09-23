import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./app/redux/Store.js";
import Event from "./app/screens/Event.js";
import GainedPoints from "./app/screens/GainedPoints.js";

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
    </Provider>
  );
}

export default App;
