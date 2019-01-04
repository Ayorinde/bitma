import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Onboard from './src/screens/Onboarding';
import Splash from './src/screens/Splash';

const AppNavigator = createStackNavigator({
    Onboard: {
        screen: Onboard
    },
    Splash: {
        screen: Splash
    }
},
    {
        initialRouteName: "Splash"
    });
export default AppNavigator;