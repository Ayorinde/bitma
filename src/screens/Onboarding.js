import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Onboard1 from './onboarding/Onboard1';
import Onboard1Subtitle from './onboarding/Onboard1Subtitle';
import Onboard2 from './onboarding/onboarding2/Onboard2';
import Onboard2Subtitle from './onboarding/onboarding2/Onboard2Subtitle';
import Onboard3 from './onboarding/onboarding3/Onboard3';
import Onboard3Subtitle from './onboarding/onboarding3/Onboard3Subtitle';

const firstImg = require('../../assets/bitmama-splash1.png')
const secondImg = require('../../assets/bitmama-splash2.png')
const thirdImg = require('../../assets/bitmama-splash3.png')


export default class Onboard extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Onboard1 />,
                        title: 'Real Time',
                        subtitle: <Onboard1Subtitle />,
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Onboard2 />,
                        title: 'Get Real Time Data',
                        subtitle: <Onboard2Subtitle />,
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Onboard3 />,
                        title: 'Trade In Multiple Currency',
                        subtitle: <Onboard3Subtitle />,


                    },

                ]}
                imageContainerStyles={{ marginTop: 90 }}
                titleStyles={{ marginTop: 90 }}
                showNext={false}
                bottomBarHighlight={false}
                bottomBarHeight={80}
                showDone={false}
            />);
    }
}