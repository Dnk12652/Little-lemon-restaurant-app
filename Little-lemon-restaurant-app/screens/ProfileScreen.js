import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TextInput, ScrollView } from 'react-native'
import ImagePickerExample from "../Utils/ImagePicker";
import CustomButton from "../Utils/CustomButton";
import CheckBox from "@react-native-community/checkbox";

function ProfileScreen() {
   const [done, setTaskDone] = useState(false);
  const InputFieldComponent = (props) => {
    return (
      <View style={styles.textInputParent}>
        <Text style={styles.textFieldForm}>{props.label}</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={props.placeholder}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
    );
  }
  const CheckBoxCompo = (props) => {
    return (
      <View style={styles.checkboxstyle}>
        <CheckBox
          value={done}
          onValueChange={(newValue) => setTaskDone(newValue)}
        />
        <Text>{props.text}</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainParent}>
          <Text style={styles.personalText}>Personal Information</Text>
          <View style={styles.person_logo_parent}>
            <Image
              style={styles.imageStyle}
              source={require("../assets/irone-strong.jpg")}
            />
            <CustomButton
              width={100}
              height={40}
              title="Change"
              color="grey"
              // onPressFunction={NavigateComp}
            />
            <CustomButton
              width={100}
              height={40}
              title="Remove"
              color="#ff7f00"
              // onPressFunction={NavigateComp}
            />
          </View>
        </View>
        <View>
          <InputFieldComponent
            label={"FirstName"}
            placeholder={"Enter a FirstName"}
          />
          <InputFieldComponent
            label={"LastName"}
            placeholder={"Enter a LastName"}
          />
          <InputFieldComponent label={"Email"} placeholder={"Enter a Email"} />
          <InputFieldComponent
            label={"Phone"}
            placeholder={"Enter a PhoneNumber"}
          />
        </View>
        <View>
          <Text style={styles.personalText}>Email Notification</Text>
          <View>
            <CheckBoxCompo text={"Order Notification"} />
            <CheckBoxCompo text={"Order Notification"} />
            <CheckBoxCompo text={"Order Notification"} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 10,
  },
  mainParent: {
    margin: 10,
  },
  personalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    paddingTop: 10,
  },
  imageStyle: {
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  person_logo_parent: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textFieldForm: {
    color: "black",
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 5,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "black",
    width: 350,
    height: 40,
    borderRadius: 10,
    paddingLeft: 24,
  },
  textInputParent: {
    marginLeft: 20,
  },
  checkboxstyle: {
    flexDirection:"row"
  }
});


export default ProfileScreen
