import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { register } from "../../redux/actions/register";

import { StyleSheet, View, Image } from 'react-native';
import { Form, Item, Label, Input, Button, Text } from 'native-base';


import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

const googleIcon = require('./../../../assets/googleIcon.png');

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: "",
            email: "",
            password: "",
        }
    }
    static navigationOptions = {
        header: null,
    }

    onEnter = (name, value) => {
        console.log('val: ', value);
        console.log('name: ', name);

        this.setState({
            [name]: value,
        });
    };

    onSigninPress = async () => {
        const { phone, password, email } = this.state;
        //const { register, isLoggedIn, fetching, response, navigation } = this.props;
        console.log('this.state: ', this.state);
        alert(JSON.stringify(this.state, null, 4))
        //if (password !== c_password) {return}

        /*
        await register(this.state);
        console.log('after signup...')
        if (!fetching) {
            console.log('done fetching...');
            if (error) {
                console.log('error signing up: ', error)
            }
            else {
                console.log('successfully signed up: ', isLoggedIn);
                if (isLoggedIn) {
                    console.log('response: ', response);
                    navigation.navigate('', response)
                }
            }
        }
        */
    };

    render() {
        //top,bottom,overlay
        const { phone, email, password } = this.state;
        console.log('props: ', this.props);

        const { params } = this.props.navigation.state;
        console.log('navigation.state.params: ', params);
        return (
            <View style={{ flex: 1 }}  >
                <Top leftText="SIGN IN" />
                <Overlay>
                    <Form >
                        <Item floatingLabel style={styles.item}>
                            <Label>Email Address</Label>
                            <Input type="email" name="email"
                                id="email" value={email}
                                onChangeText={this.onEnter.bind(null, 'email')}
                                required />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label>Phone</Label>
                            <Input type="phone" name="phone"
                                value={phone}
                                onChangeText={this.onEnter.bind(null, 'phone')}
                                required />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label>Password</Label>
                            <Input type="password" name="password"
                                id="password" value={password}
                                onChangeText={this.onEnter.bind(null, 'password')}
                                required />
                        </Item>
                    </Form>
                </Overlay>
                <Bottom>
                    <View>
                        <Button success block style={{ margin: 10 }}
                            onPress={this.onSigninPress} >
                            <Text style={{ textAlign: "center" }}>Log In</Text>
                        </Button>
                        <View style={{ marginHorizontal: 10, paddingBottom: 10 }}>
                            <Text style={{ color: colors.darkText }}>Don't have an account?
                        <Text style={{ textDecorationLine: 'underline' }}> Sign up</Text>
                            </Text>
                        </View>
                    </View>
                </Bottom>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    top: {
        flex: 2,
        backgroundColor: colors.primary,
    },
    overlay: {
        flex: 1,
    },
    bottom: {
        flex: 3,
    },
    item: {
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 10,
    }

});

const mapStateToProps = state => {
    console.log('state.register: ', state.register)
    let { isLoggedIn, fetching, error } = state.register
    //const {  } = state.register;
    return { isLoggedIn, fetching, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ register }, dispatch)
}

// connect (mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Signin);