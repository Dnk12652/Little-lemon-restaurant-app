
import React,{useEffect,useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from "./screens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SplashScreen from "./screens/Splash";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isOnboardingCompleted,setOnoardingStatus] = useState(false)
  useEffect(() => {
   setIsLoading(true)
   getData();
 }, []);
 const getData = () => {
   try {
     AsyncStorage.getItem("UserData").then((value) => {
       if (value != null) {
         console.log("users data",value)
         setOnoardingStatus(true)
         setIsLoading(false)
       }
     });
   } catch (error) {
     console.log(error);
   }
 };
  if (isLoading) {
    return (
      <SplashScreen/>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboardingCompleted ? (
          // Onboarding completed, user is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // User is NOT signed in
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    backgroundColor: '#fff',
  },
});
