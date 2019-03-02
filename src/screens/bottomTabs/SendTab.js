import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Icon, Container, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { colors } from '../../constants/styles';

export default class SendTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="paper-plane" style={{ color: 'rgba(255,255,255,0.5)' }} />
    }
    render() {
        const { navigation } = this.props;
        return (
            // <View style={styles.container}>
            <Container style={styles.container}>
                <View style={styles.buttonSpread}>
                    <Button success style={{ width: 110, borderRadius: 8 }}>
                        <Text style={{ textAlign: 'center' }}>Bitcoin</Text>
                    </Button>
                    <Button bordered success style={{ width: 110, borderRadius: 8 }}>
                        <Text style={{ textAlign: 'center' }}>Ethereum</Text>
                    </Button>
                    <Button bordered success style={{ width: 110, borderRadius: 8 }}>
                        <Text style={{ textAlign: 'center' }}>NGN</Text>
                    </Button>

                </View>
                <View style={styles.others}>
                    <Form>
                        <Item floatingLabel placeholderTextColor={colors.grayText}>
                            <Label>Enter Wallet Address</Label>
                            <Input placeholderTextColor={colors.grayText} />
                        </Item>
                        <Item>
                            <Button bordered success style={{ width: 130, borderRadius: 8, margin: 12, height: 20, padding: 4 }}>
                                <Text style={{ fontSize: 12 }}>Scan QR Code</Text>
                            </Button>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Enter Amount</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel placeholderTextColor={colors.grayText}>
                            <Label>Note (optional) </Label>
                            <TextInput placeholderTextColor={colors.grayText} />
                        </Item>

                        <View style={styles.buttonSpread}>
                            <Button bordered success style={{ width: 130, borderRadius: 10, marginTop: 30 }}>
                                <Text style={{ textAlign: 'center' }}>Cancel</Text>
                            </Button>

                            <Button success style={{ width: 130, borderRadius: 10, marginTop: 30 }}>
                                <Text style={{ textAlign: 'center' }}>Save</Text>
                            </Button>
                        </View>


                    </Form>

                </View>
            </Container>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 28,
        marginTop: 30,
    },
    buttonSpread: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    others: {
        flex: 8,
    }
})