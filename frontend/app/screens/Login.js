import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Greenhouse</Text>
        <TextInput
          style={styles.input}
          placeholder="blank182@gmail.com"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate("Main", { screen: "Home" })}
          />
        </View>
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
