import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import heroImg from "../assets/Hero-image.png";

const Hero = ({ keyboardVisible }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.uppercontainerChild}>
          <Text style={styles.txt1}>
            Little Lemon <Text style={styles.txt2}>Chicago</Text>
          </Text>
          <Text style={styles.txt}>
            We are a family owned Mediterranean restuarant, foused on
            traditional recipes served with a modern twist.
          </Text>
        </View>
        <View>
          <Image source={heroImg} style={styles.heroImg} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: "#495e57",
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  uppercontainerChild: {
    width: 230,
    justifyContent: "space-between",
  },
  heroImg: {
    height: 140,
    width: 140,
    borderRadius: 15,
    marginTop: 90,
  },
  txt: {
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
  txt2: {
    fontSize: 30,
    color: "white",
  },
  txt1: {
    width: 300,
    color: "yellow",
    fontWeight: "bold",
    fontSize: 50,
    overflow: "visible",
  },
});

export default Hero;
