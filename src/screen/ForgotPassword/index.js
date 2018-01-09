/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image,
    Button,
    TextInput
} from 'react-native';


export default class ForgotPassword extends Component<{}> {
    loginClick=()=>{

    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textViewForPass}>
                        <Text style={styles.largeText}>Reset Password</Text>
                        <Text style={styles.smallText}>Enter email and we'll send you a link</Text>
                        <Text style={styles.smallText}>to reset password</Text>
                    </View>
                    <View style={styles.newForPassBind}>
                        <View style={styles.itEmail}>
                            <TextInput placeholder="Email"/>
                        </View>
                        <View style={styles.btnForPass}>
                            <Button onPress={this.loginClick} title="Reset Password" color="indigo"/>
                        </View>
                    </View>

                </View>
            </View>

        );
    }
}

