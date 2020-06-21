import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./routes/HomeStack";
import HomeScreen from "./src/screen/HomeScreen";
import LoginScreen from "./src/screen/LoginScreen";
import RegistrationScreen from "./src/screen/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { decode, encode } from "base-64";
import {firebase} from './src/firebase/FirebaseConfig';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

//Created by Jerry for firebase tutorial in React Native using Hooks and functional
//Components

const Stack = createStackNavigator();
export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <><Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
