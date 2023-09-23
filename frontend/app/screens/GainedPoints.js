import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GainedPoints({ route, navigation }) {
  const animation = useRef(null);

  const gainedPoints = route.params.points;

  useEffect(() => {
    //animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate("Calendar", {
              event: route.params.event,
              completed: true,
            })
          }
        >
          <LottieView
            autoPlay
            ref={animation}
            style={styles.lottie}
            source={require("../../assets/GainedPointsAnimation.json")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.pointsText}>
              You have gained {gainedPoints} points!
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
  },
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 320,
    height: 320,
    backgroundColor: "#eee",
  },
  textContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  pointsText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default GainedPoints;
