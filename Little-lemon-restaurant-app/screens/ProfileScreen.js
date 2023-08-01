import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImagePickerExample from "../Utils/ImagePicker";

 function ProfileScreen() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Personal Information</Text>
          <View>
           <Image/>
          </View>
        </View>
      </View>
    );
 }
const styles = StyleSheet.create({
  container: {
    flex:1,
  }
    
  })


export default ProfileScreen
