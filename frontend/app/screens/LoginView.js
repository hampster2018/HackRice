import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector} from "react-redux";

import get_events from "../api/get_events";
import login_user from "../api/login_user";
import { setEmail, setId, setEvents } from "../reducers/UserReducer";

const LoginView = ({ navigation }) => {
  const [emailValue, setEmailValue] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const id = await login_user(emailValue);
    const events = await get_events(id);
    dispatch(setId(id));
    dispatch(setEvents(events));
    dispatch(setEmail(emailValue));
    navigation.navigate("Main", { screen: "Home" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Welcome to <Text style={{ color: "#28b2b3" }}>Greenhouse</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          keyboardType="email-address"
          onChangeText={(text) => setEmailValue(text)}
          value={emailValue}
        />
        <AntDesign name="login" size={24} color="black" onPress={handleLogin} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", // Ensure it takes the full width
    justifyContent: "center", // Vertically center contents
    alignItems: "center", // Horizontally center contents
    backgroundColor: "#ffffff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "50%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center", // Center the button horizontally
  },
});

export default LoginView;
