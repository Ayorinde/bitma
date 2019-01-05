import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base'
import { colors } from '../../constants/styles';

export default class Bottom extends Component {
    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 6, justifyContent: 'flex-end' }} >
                <View>
                    <Button success block style={{ margin: 20 }}
                        onPress={this.onPress} >
                        <Text style={{ textAlign: "center" }}>CONTINUE</Text>
                    </Button>
                    <View style={{ marginHorizontal: 20, paddingBottom: 50 }}>
                        <Text style={{ color: colors.darkText }}>Already have an account?
                        <Text style={{ textDecorationLine: 'underline' }}> Sign in</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}