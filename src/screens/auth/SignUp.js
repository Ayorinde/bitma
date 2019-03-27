import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { onRegister } from '../../store/actions/register'
import { register } from "../../redux/actions/register";


import { StyleSheet, View, Image } from 'react-native';
import { Form, Item, Label, Input, Button, Text } from 'native-base';


import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

const googleIcon = require('./../../../assets/googleIcon.png');

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
            c_password: "",
            country: "Nigeria"
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

    onSignupPress = () => {
        const { firstname, lastname, phone, password, c_password, email } = this.state;
        console.log('this.state: ', this.state);
        alert(JSON.stringify(this.state, null, 4))
        //if (password !== c_password) {return}
        this.props.register(this.state);
    };

    render() {
        //top,bottom,overlay
        const { firstname, lastname, phone, email, password,
            country, c_password } = this.state;
        return (
            <View style={{ flex: 1 }}  >
                <Top leftText="SIGN UP" />
                <Overlay>
                    <Form >
                        <Item floatingLabel style={styles.item}>
                            <Label>First Name</Label>
                            <Input type="text" name="firstname"
                                id="firstname" value={firstname}
                                onChangeText={this.onEnter.bind(null, 'firstname')}
                                required />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label>Last Name</Label>
                            <Input type="text" name="lastname"
                                id="lastname" value={lastname}
                                onChangeText={this.onEnter.bind(null, 'lastname')}
                                required />
                        </Item>
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
                        {/* <Item floatingLabel style={styles.item}>
                            <Label>Country</Label>
                            <Input type="text" name="country"
                                id="country" value={country}
                                onChangeText={this.onEnter.bind(null, 'country')}
                                required />
                        </Item> */}

                        <Item floatingLabel style={styles.item}>
                            <Label>Password</Label>
                            <Input type="password" name="password"
                                id="password" value={password}
                                onChangeText={this.onEnter.bind(null, 'password')}
                                required />
                        </Item>
                        {/* <Item floatingLabel style={styles.item}>
                            <Label>Confirm Password</Label>
                            <Input />
                        </Item> */}
                    </Form>
                </Overlay>
                <Bottom>
                    <View>
                        <Button success block style={{ margin: 10 }}
                            onPress={this.onSignupPress} >
                            <Text style={{ textAlign: "center" }}>Sign up</Text>
                        </Button>
                        <View style={{ marginHorizontal: 10, paddingBottom: 10 }}>
                            <Text style={{ color: colors.darkText }}>Already have an account?
                        <Text style={{ textDecorationLine: 'underline' }}> Sign in</Text>
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

const mapStateToProps = state => ({ register: state.register });

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ register }, dispatch)
}

// connect (mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Signup);