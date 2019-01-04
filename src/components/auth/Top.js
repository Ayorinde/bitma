import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { colors } from './../../constants/styles';

const logoWhite = require('./../../../assets/bit-logo-white.png')

export default class Top extends Component {
    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 5, backgroundColor: colors.primary }} >
                <Image source={logoWhite} style={{}} />
                <View style={{}}>

                </View>
            </View>
        );
    }
}