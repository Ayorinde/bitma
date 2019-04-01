import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from "../../redux/actions/login";

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
            //phone: "",
            email: "",
            password: "",
            shouldRemember: false,

            isLoggedIn: false,
            response: null,
            error: '',

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
        const { password, email, shouldRemember,
            fetching, error, isLoggedIn, response } = this.state;
        const { login, navigation } = this.props;
        console.log('this.state: ', this.state);
        alert(JSON.stringify(this.state, null, 4))


        await login(this.state);
        console.log('after login...')
        if (!fetching) {
            console.log('done fetching...');
            if (error) {
                console.log('error logging up: ', error)
            }
            else {
                console.log('successfully logged up: ', isLoggedIn);
                if (isLoggedIn) {
                    console.log('response: ', response);
                    navigation.navigate('Home', response)
                }
            }
        }

    };

    componentDidUpdate(prevProps, prevState) {
        const { isLoggedIn, fetching, error, response } = this.props;
        if (prevProps.isLoggedIn !== isLoggedIn ||
            prevProps.error !== error || prevProps.response !== response) {
            console.log(`isLoggedIn: ${isLoggedIn} 
                response: ${JSON.stringify(response)}
                error: ${JSON.stringify(error)}`);
            console.log('above in cdu')

            this.setState({
                isLoggedIn, error, response
            })
        }
    }

    render() {
        //top,bottom,overlay
        const { email, password, error } = this.state;
        console.log('props: ', this.props);

        let errorMessage = error && error.toString();

        const { params } = this.props.navigation.state;
        console.log('navigation.state.params: ', params);
        return (
            <View style={{ flex: 1 }}  >
                <Top leftText="SIGN IN" />
                <Overlay>
                    <Form >
                        <Text>
                            {error && (<Text>{errorMessage && errorMessage.substr(6, 30)}</Text>)}
                        </Text>

                        <Item floatingLabel style={styles.item}>
                            <Label>Email Address</Label>
                            <Input type="email" name="email"
                                id="email" value={email}
                                onChangeText={this.onEnter.bind(null, 'email')}
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
    console.log('state.login: ', state.login)
    let { isLoggedIn, fetching, error } = state.login
    //const {  } = state.login;
    return { isLoggedIn, fetching, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ login }, dispatch)
}

// connect (mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Signin);