import { useState, useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

const LoadingComponent = () => {
  const [loadingText, setLoadingText] = useState(
    "Please wait while your schedule is in the oven"
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(getNextLoadingText());
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getNextLoadingText = () => {
    const loadingTexts = [
      "Please wait while your schedule is in the oven",
      "Optimizing your day",
      "Reducing carbon emissions",
      "Saving the world",
    ];

    let nextIndex = (currentIndex + 1) % loadingTexts.length;
    setCurrentIndex(nextIndex);
    return loadingTexts[nextIndex];
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>{loadingText}</Text>
    </View>
  );
};

export default LoadingComponent;
