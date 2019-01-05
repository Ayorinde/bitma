import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { Form, Item, Label, Input } from 'native-base';

import { colors } from './../../constants/styles';

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

const googleIcon = require('./../../../assets/googleIcon.png');



export default class Overlay extends Component {
    render() {
        //top,bottom,overlay windowHeight/2 - boxHeight/2
        return (
            <View style={styles.container}  >
                <Form>
                    <Item floatingLabel style={styles.item}>
                        <Label>Email Address</Label>
                        <Input />
                    </Item>
                    <Text style={{ textAlign: 'center', marginVertical: 10 }}>or sign up with</Text>
                    <Item regular style={styles.item}>
                        <Label><Image source={googleIcon} style={{ width: 20, height: 20 }} /> Google</Label>
                        <Input />
                    </Item>
                </Form>
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