import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { RainforestTrust } from "../image/RainforestTrust.js";
import { WorldLandTrust } from "../image/WorldLandTrust.js";

const DonateScreen = ({ navigation }) => {

  const companies = [
    {
      cause: "Rainforest Trust",
      description:
        "Rainforest Trust is a nonprofit conservation organization focused on saving rainforests and other tropical ecosystems.",
      link: "https://www.rainforesttrust.org/",
      logo: RainforestTrust,
      points: 100,
    },
    {
      cause: "World Land Trust",
      description:
        "World Land Trust (WLT) is an international conservation charity that protects the world’s most biologically significant and threatened habitats acre by acre.",
      link: "https://www.worldlandtrust.org/",
      logo: WorldLandTrust,
      points: 50,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Available Causes</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {companies.map((company, index) => (
          <View style={styles.charityContainer} key={index}>
            <Text style={styles.textTitle}>{company.cause}</Text>
            <View style={styles.topContainer}>
              <Image source={company.logo} style={styles.imageContainer} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(company.link)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Learn More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Commit Donation", { company })
                  }
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Donate</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.textDescription}>{company.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
  },
  textDescription: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textAlign: {
    textAlign: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    width: "50%",
    marginLeft: 10,
    marginRight: 10,
  },
  charityContainer: {
    flex: 1,
    elevation: 8,
    backgroundColor: "#ddd",
    alignItems: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    width: "80%",
    marginTop: 30,
    alignItems: "center",
  },
  imageContainer: {
    maxWidth: "50%",
    maxHeight: 100,
  },
  button: {
    backgroundColor: "#5783db",
    flex: 1,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    width: "80%",
    height: "40%",
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default DonateScreen;
