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
    Alert,
    Button,
    CheckBox, Image,
} from 'react-native';
import TextField from "react-native-material-textfield/src/components/field/index";
import RoundButton from "../../component/ui/RoundButton";
import PasswordVisibility from "../../component/ui/PasswordVisibility";
export default class Signup extends Component<{}> {

    onclick = () => {
        Alert.alert("Signup Successful");
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textViewLogin}>
                        <Image style={styles.logoImage} source={{uri : 'http://zroomp.com/logotransbg.png'}}/>
                        <Text style={styles.largeText}>Signup to Zroomp</Text>
                        <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>
                    <View style={styles.newLoginBind}>
                            <TextField label='Name'  lineWidth={2} baseColor="orange" textColor="gray" tintColor='darkorange'/>
                            <TextField label='Phone Number' baseColor="orange"  lineWidth={2} keyboardType="numeric" textColor="gray" tintColor='darkorange'/>
                            <TextField label='Email'  lineWidth={2} baseColor="orange"  keyboardType="email-address" textColor="gray" tintColor='darkorange'/>
                            <PasswordVisibility />
                            <RoundButton onClick={this.onclick}
                                         name="SIGNUP"
                                         btnBgColor="orange"
                                         btnPadding={7}
                                         btnHeight={35}
                                         btnWidth={250}
                                         btnMarTop={30}
                                      />
                    </View>
                </View>
            </View>

        );
    }
}

