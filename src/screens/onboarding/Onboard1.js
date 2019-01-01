import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'native-base';

const onboardImg1 = require('../../../assets/bitmama-splash1.png')



export default class Onboard1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={onboardImg1} style={{ marginLeft: 40 }} />
            </View>
        );
    }
}