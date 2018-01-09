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


export default class Login extends Component<{}> {
    loginClick=()=>{

    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textViewLogin}>
                        <Image style={styles.logoImage} source={{uri : 'http://zroomp.com/logotransbg.png'}}/>
                        <Text style={styles.largeText}>Login to Zroomp</Text>
                        <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>
                    <View style={styles.newLoginBind}>
                        <View>
                           <TextInput placeholder="Email"/>
                        </View>
                        <View style={styles.itPass}>
                            <TextInput placeholder="Password"/>
                        </View>
                        <View style={styles.btnLogin}>
                            <Button onPress={this.loginClick} title="Login" color="indigo"/>
                        </View>
                        <Text style={styles.forgotPass}>Forgot Your Password?</Text>
                    </View>

                </View>
            </View>

        );
    }
}

