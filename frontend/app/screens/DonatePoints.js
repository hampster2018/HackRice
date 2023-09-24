import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import get_available_points from "../api/get_available_points";

const DonatePoints = ({ route, navigation }) => {
  const [availablePoints, setAvailablePoints] = useState(null);

  let company = route.params.company;
  let id = useSelector((state) => state.user.id);

  useEffect(() => {
    get_available_points(setAvailablePoints, id);
  }, [availablePoints]);

  return (
    <View>
      <Text>Available Points: {availablePoints}</Text>
    </View>
  );
};

export default DonatePoints;
