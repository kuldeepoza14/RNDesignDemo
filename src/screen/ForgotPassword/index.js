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
import RoundButton from "../../component/ui/RoundButton";
import TextField from "react-native-material-textfield/src/components/field/index";


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
                            <TextField label='Email'  lineWidth={1} baseColor="orange"  keyboardType="email-address" textColor="gray" tintColor='darkorange'/>
                        </View>
                        <RoundButton onClick={this.onclick}
                                     name="LOGIN"
                                     btnBgColor='orange'
                                     btnPadding={7}
                                     btnHeight={35}
                                     btnWidth={270}
                                     btnMarTop={15}/>
                    </View>

                </View>
            </View>

        );
    }
}

