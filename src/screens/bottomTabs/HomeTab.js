import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base'

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon type="FontAwesome" name="home" />
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Home Tab le le yi ...  home tab</Text>

            </View>
        )
    }
}