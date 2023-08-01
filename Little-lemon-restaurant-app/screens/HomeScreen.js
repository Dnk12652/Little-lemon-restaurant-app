import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Utils/CustomButton";

function HomeScreen({ navigation }) {
  const NavigateComp = () => {
    navigation.navigate("Profile")
  }
  return (
    <View style={styles.buttonParent}>
      <CustomButton
        width={150}
        height={50}
        title="Next"
        color="#ff7f00"
        onPressFunction={NavigateComp}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "yellow",
    width: 150,
    height: 50,
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonParent: {
    alignItems: "flex-end",
  },
});

export default HomeScreen;
