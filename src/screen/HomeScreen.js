import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props)
  const onSignoutPress = () => {
    props.navigation.navigate("Login");
  };
  return (
      <View>
      <TouchableOpacity style={styles.button} onPress={() => onSignoutPress()}>
          <Text style={styles.buttonTitle}>Sign Out</Text>
        </TouchableOpacity>
        </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },

  button: {
    backgroundColor: "#788eec",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
