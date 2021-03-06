import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'native-base';

import { Provider } from 'react-redux';

import { createAppContainer } from "react-navigation";

import SplashScreen from './src/screens/Splash';
import Onboard from './src/screens/onboarding/Onboarding'
import Onboard1 from './src/screens/onboarding/onboarding1/Onboard1'

import AppNavigator from './BitmamaNavigator';
import configureStore from './src/redux/store';

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}><AppContainer /></View>
      </Provider>);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
