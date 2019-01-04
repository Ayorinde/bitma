import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default class Overlay extends Component {
    render() {
        //top,bottom,overlay windowHeight/2 - boxHeight/2
        return (
            <View style={{
                flex: 3, borderWidth: 2, position: 'absolute', top: (winHeight / 2 - 150),
                left: (winWidth / 2 - 150),
                width: 300, height: 300
            }}  >
                <Text style={{ textAlign: "center" }}>{'overlay'}</Text>
            </View>
        );
    }
}