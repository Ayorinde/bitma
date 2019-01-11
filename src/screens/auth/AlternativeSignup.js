import React, { Component } from 'react';
import { StyleSheet, View, Text, Container, Header, Content, Tab, Tabs } from 'react-native';

import TouchIdSignup from './TouchIdSignup';
import FaceId from './FaceIdSignup';

import Top from './../../components/auth/Top';
import AlternativeTop from './../../components/auth/AlternativeTop'
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

export default class AlternativeSignup extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 1 }}  >
                <Top />
                {/* <Overlay />
                <Bottom /> */}
            </View>
        );
    }
}

