import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Tabs,Container, Tab} from 'native-base'
import TouchIdSignup from '../../screens/auth/TouchIdSignup';
//  import FaceId from './FaceIdSignup';
import { colors } from './../../constants/styles';

const logoWhite = require('./../../../assets/bit-logo-white.png')

export default class AlternativeTop extends Component {
    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 5, backgroundColor: colors.primary }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image source={logoWhite} style={{}} />
                </View>

                <View style={{ flex: 1.5 }}>
                    {/* <Button transparent style={{ color: colors.light, paddingLeft: 60 }}>
                        <Text style={{ color: colors.light, fontSize: 17 }}>SIGN UP</Text>
                    </Button> */}

            <Container>
              {/* <Header hasTabs /> */}
              <Tabs>
                <Tab heading="Set Touch ID">
                 <Button transparent style={{ color: colors.light, paddingLeft: 60 }}>
                 <TouchIdSignup />
                 {/* <Text style={{ color: colors.light, fontSize: 17 }}>SIGN UP</Text> */}
                    </Button>
                 
                </Tab>
                <Tab heading="Set Face ID">
                <Text style={{ color: colors.light, fontSize: 17 }}>SIGN UP</Text>
                </Tab>
               
              </Tabs>
            </Container>
                </View>
            </View>
        );
    }
}