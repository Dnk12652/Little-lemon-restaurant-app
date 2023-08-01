import React,{useState,useEffect} from 'react'
import { Text, View, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from './Splash';

function OnBoarding({navigation}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");

  const setData = async () => {
    if (name.length == 0 || email.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        var user = {
          Name: name,
          Email: email,
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };
    return (
      <View style={styles.container}>
        <SplashScreen/>
        <View style={styles.textParent}>
          <Text style={styles.textField}>Lets us get know you</Text>
        </View>
        <View style={styles.formParent}>
          <Text style={styles.textFieldForm}>First Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter a first name"
            onChangeText={(value) => setName(value)}
          />
          <Text style={styles.textFieldForm}>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter a Email"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.buttonParent}>
          <Pressable style={styles.buttonStyle} onPress = {setData}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  textParent: {
    alignItems: "center",
    paddingTop: 70,
  },
  textField: {
    color: "black",
    fontWeight: "semibold",
    fontSize: 20,
  },
  textFieldForm: {
    color: "black",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingLeft: 24,
  },
  formParent: {
    flex: 1,
    marginTop: 150,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "yellow",
    width: 150,
    height: 50,
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius:10
  },
  buttonText: {
    fontSize: 20,
   fontWeight:"bold"
  },
  buttonParent:{
     alignItems:"flex-end"
  }
});
export default OnBoarding;
