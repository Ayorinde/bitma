import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon, H3 } from 'native-base'

import { colors } from './../../constants/styles';
import HeaderW from './../../components/wallet/HeaderW';
import TransactionItem from './../../components/wallet/TransactionItem';

export default class WalletTab extends Component {

    static navigationOptions = {
        //tabBarIcon: <Icon name="wallet" style={{ color: '#fff' }} />
        tabBarIcon: <Image source={require('./../../../assets/wallet.png')} />
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.upper16}>
                    <HeaderW />
                </View>
                <View style={styles.upper56}>
                    <View style={styles.investments}>
                        <View style={styles.investmentsHeading}>
                            <Text>My Investments</Text>
                        </View>

                        <View style={styles.coins}>
                            <ScrollView style={styles.scroll} horizontal={true}>
                                <View style={styles.coin}>
                                    <Image style={styles.coinImage} source={require('./../../../assets/bitcoin.png')} />
                                    <View style={styles.coinFigures}>
                                        <Text style={styles.bold}>N70,000:35k</Text>
                                        <Text>0.001201</Text>
                                    </View>
                                </View>
                                <View style={styles.coin}>
                                    <View style={styles.coinImageContainer}>
                                        <Image style={styles.coinImage} source={require('./../../../assets/ethereum.png')} />
                                    </View>
                                    <View style={styles.coinFigures}>
                                        <Text style={styles.bold}>N72,000:35k</Text>
                                        <Text>0.001201</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text style={{ marginBottom: 10, paddingBottom: 5, fontSize: 16 }}>Recent Transactions</Text>
                        <TransactionItem message="Payment sent to GTBank"
                            naira="6,900.70" date="01 March, 2019" />
                        <TransactionItem message="Payment sent to GTBank"
                            naira="6,900.70" date="02 March, 2019" />
                        <TransactionItem message="Payment sent to GTBank"
                            naira="6,900.70" date="03 March, 2019" />
                        <TransactionItem message="Payment sent to GTBank"
                            naira="6,900.70" date="03 March, 2019" />


                    </View>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    upper16: {
        flex: 1,
        borderBottomWidth: 0.3,
        borderColor: '#E2E0E0',
        justifyContent: 'center',
        marginHorizontal: 28,

    },
    upper56: {
        flex: 5,
    },
    investments: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: colors.primary,
        //justifyContent: 'center',
        marginHorizontal: 28,
        paddingVertical: 15,
    },
    investmentsHeading: {
        flex: .5,
    },
    list: {
        flex: 1.2,
        marginLeft: 28,
        marginTop: 4,
        padding: 10,
    },
    //others
    coins: {
        flex: 2.5,
    },
    coin: {
        flex: 1,
        //flexDirection: 'row',
        borderWidth: 0.85,
        borderColor: '#E2E0E0', //'#EEEEEE' very light gray, //'#B5B5B4' light gray,
        width: 220,
        paddingVertical: 15,
        marginRight: 10,
        height: 120,

        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#B5B5B4',
        shadowOpacity: 0.8,
        //elevation: 0.1,

    },

    coinImage: {
        //flex: 1,
        width: 70, height: 35,
        resizeMode: 'contain',
    },
    coinImageContainer: {
        flex: 1,
        flexDirection: 'row',
        // paddingHorizontal: 5,
        // margin: 5,
    },
    scroll: {
        // borderWidth: 0.5,
        // borderColor: colors.primary,
        height: 200,
        paddingVertical: 0,
        marginTop: 10,
        marginBottom: 0,

    },
    coinFigures: {
        padding: 10,
        marginHorizontal: 5,
    },
    bold: {
        fontWeight: 'bold',
    }


});