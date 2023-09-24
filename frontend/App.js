import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

import store from "./app/redux/Store.js";
import AppRouter from "./app/screens/AppRouter.js";
import LoginView from "./app/screens/Login.js";

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
