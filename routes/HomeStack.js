import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "../src/screen/LoginScreen";
import RegistrationScreen from "../src/screen/RegistrationScreen";
import HomeScreen from "../src/screen/HomeScreen";

const screens = {
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegistrationScreen,
  },
  Home: {
    screen: HomeScreen,
  },
};
const LoginStack = createStackNavigator(screens);
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(
  createSwitchNavigator({ UserPresent: HomeStack, LoginFlow: LoginStack })
);
