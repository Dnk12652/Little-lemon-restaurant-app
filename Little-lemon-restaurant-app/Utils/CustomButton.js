import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      disabled = {props.disabled}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#00000050" }}
      style={({ pressed }) => [
        {
          backgroundColor: props.type === "contained" ? props.color : "#FFFFFF",
        },
        props.type === "contained" ? styles.containedBtn : styles.outLinedBtn,
        { ...props.style },
      ]}
    >
      <Text style={       props.type === "contained" ? styles.containedBtnText : styles.outLinedBtnText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // text: {
  //   color: "#ffffff",
  //   fontSize: 18,
  //   margin: 6,
  //   textAlign: "center",
  // },
  // button: {
  //   alignItems: "center",
  //   borderRadius: 5,
  //   margin: 10,
  // },
  containedBtn: {
    flex: 1,
    borderRadius: 9,
    alignSelf: "stretch",
    padding: 10,
    borderWidth: 1,
    borderColor: "#3f554d",
  },
  containedBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  outLinedBtn: {
    flex: 1,
    borderRadius: 9,
    alignSelf: "stretch",
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#83918c",
  },
  outLinedBtnText: {
    fontSize: 18,
    color: "#3e524b",
    alignSelf: "center",
  },
  btntext: {
    fontSize: 22,
    color: "#3e524b",
    alignSelf: "center",
  },
});

export default CustomButton;
