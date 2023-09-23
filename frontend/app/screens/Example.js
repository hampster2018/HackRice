import * as React from "react";
import { Pressable, View, Text } from "react-native";
import LoginView from "./Login";

export default function Example({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      ></Pressable>
    </View>
  );
}
