import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Onboard from './src/screens/onboarding/Onboarding';
import Splash from './src/screens/Splash';
import SignupGoogle from './src/screens/auth/SignupGoogle';
import AlternativeSignup from './src/screens/auth/AlternativeSignup'

const AppNavigator = createStackNavigator({
    Onboard: {
        screen: Onboard
    },
    Splash: {
        screen: Splash
    },
    SignupGoogle: {
        screen: SignupGoogle
    },
    AlternativeSignup: {
        screen: AlternativeSignup
    }
},
    {
        initialRouteName: "Splash"
    });
export default AppNavigator;