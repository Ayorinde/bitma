import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/styles';

export default class HeaderW extends Component {
    render() {
        //top,bottom,overlay
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>
                        My Wallet
                    </Text>
                </View>
                <View>
                    <Text style={styles.subheading}>
                        N150,058:35k
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginLeft: 25,

    },
    heading: {
        fontSize: 15,


    },
    subheading: {
        fontSize: 16,

    }
})