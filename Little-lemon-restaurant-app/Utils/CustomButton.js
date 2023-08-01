import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#00000050" }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#dddddd" : props.color,width:props.width,height:props.height },
        styles.button,
        { ...props.style },
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 18,
    margin: 6,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
  },
});

export default CustomButton;
