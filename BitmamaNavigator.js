import React from "react";
import { View, Text } from "react-native";
import {
    createStackNavigator, createBottomTabNavigator, createDrawerNavigator,
    createAppContainer
} from "react-navigation";

import { Icon } from 'native-base';

import Onboard from './src/screens/onboarding/Onboarding';
import Splash from './src/screens/Splash';
import SignupGoogle from './src/screens/auth/SignupGoogle';
import SignupTouchId from './src/screens/auth/SignupTouchId';
import SignupFaceId from './src/screens/auth/SignupFaceId';

import Home from './src/screens/main/Home';

import HomeTab from './src/screens/bottomTabs/HomeTab';
import SendTab from './src/screens/bottomTabs/SendTab';
import WalletTab from './src/screens/bottomTabs/WalletTab';
import ReceiveTab from './src/screens/bottomTabs/ReceiveTab';

const HomeTabStack = createStackNavigator({
    Home: {
        screen: HomeTab
    }
}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<Icon ios='ios-menu' android="md-menu"
                    style={{ fontSize: 20, color: 'red', padding: 10 }}
                    onPress={() => navigation.openDrawer()} />)
            }
        }
    })

const TabNavigator = createBottomTabNavigator({
    Home: HomeTabStack,
    Send: SendTab,
    Wallet: WalletTab,
    Receive: ReceiveTab,
});

const DrawerNavigator = createDrawerNavigator({
    Home: TabNavigator,
})




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
    SignupTouchId: {
        screen: SignupTouchId
    },
    SignupFaceId: {
        screen: SignupFaceId
    },
    Home: {
        screen: DrawerNavigator,
    }

},
    {
        initialRouteName: "Splash",
        defaultNavigationOptions: {
            header: null
        }
    });
export default AppNavigator;