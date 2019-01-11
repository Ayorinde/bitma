import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default class TouchIdSignup extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        //top,bottom,overlay
        return (
            <View style={styles.container}   >
                {/* <Top /> */}
                {/* <Overlay /> */}
                {/* <Bottom /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'white',

        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#ded',
        shadowOpacity: 0.8,
        shadowRadius: 10,


        position: 'absolute',
        top: (winHeight / 2 - 120),
        left: (winWidth / 2 - 160),
        width: 320, height: 200,
        color: colors.darkText,

    },
    item: {
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 10,
    }
})