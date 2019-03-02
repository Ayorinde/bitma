import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/styles';

export default class TransacttionItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text>{this.props.message}</Text>

                </View>
                <View style={styles.right}>
                    <Text style={styles.naira}>NGN {this.props.naira}</Text>
                    <Text style={styles.date}>{this.props.date}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginLeft: 25,
        flex: 1,
        flexDirection: 'row',
        //height: 100,
        borderWidth: 0.85,
        borderColor: '#E2E0E0',
        padding: 10,
    },
    left: {
        flex: 1,


    },
    right: {
        flex: 1,
        alignItems: 'flex-end',

    },
    naira: {
        color: colors.dangerText,
        fontSize: 15,

    },
    date: {
        color: colors.grayText,
        fontSize: 12,

    },
})