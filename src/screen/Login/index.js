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
    Button, Alert,
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import PasswordVisibility from "../../component/ui/PasswordVisibility";
import TextFeild from "../../component/ui/TextFeild";


export default class Login extends Component<{}> {
    loginClick=()=>{

    };

    onclick = () => {
        Alert.alert("Login Successful");
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
                            <TextFeild/>
                        </View>
                        <PasswordVisibility />
                        <View style={styles.btnLogin}>
                            <RoundButton onClick={this.onclick}
                                         name="LOGIN"
                                         btnBgColor='orange'
                                         btnPadding={7}
                                         btnHeight={35}
                                         btnWidth={270}
                                         btnMarTop={15}/>

                        </View>
                        <Text style={styles.forgotPass}>Forgot Your Password?</Text>
                    </View>

                </View>
            </View>

        );
    }
}

