import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Form, Item, Label, Input } from 'native-base'

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default class Overlay extends Component {
    render() {
        //top,bottom,overlay windowHeight/2 - boxHeight/2
        return (
            <View style={styles.container}  >
                <Form>
                    <Item floatingLabel>
                        <Label>Email Address</Label>
                        <Input />
                    </Item>
                    <Text style={{ textAlign: 'center' }}>or sign up with</Text>
                    <Item floatingLabel>
                        <Label>Google</Label>
                        <Input />
                    </Item>
                </Form>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        shadowOffset: { width: 0, height: 4, },
        shadowColor: 'gray',
        shadowOpacity: 0.6,
        shadowRadius: 10,

        flex: 3,
        backgroundColor: 'white',
        borderWidth: 1, borderColor: 'gray',
        position: 'absolute',
        top: (winHeight / 2 - 125),
        left: (winWidth / 2 - 160),
        width: 320, height: 250

    },
})