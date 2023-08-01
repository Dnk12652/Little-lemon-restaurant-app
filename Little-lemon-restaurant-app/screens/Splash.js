import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function SplashScreen() {
  return (
      <View style={styles.logoImageParent}>
        <Image
          style={styles.logoImageStyle}
          source={require("../assets/Logo.png")}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  logoImageParent: {
    alignItems: "center",
  },
  logoImageStyle: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
});

export default SplashScreen;
