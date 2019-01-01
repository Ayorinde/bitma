import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'native-base'

import SplashScreen from './src/screens/Splash';
import Onboard from './src/screens/Onboarding'
import Onboard1 from './src/screens/onboarding/Onboard1'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Onboard />
      </View>
    );
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
