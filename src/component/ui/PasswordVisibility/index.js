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
import TextField from "react-native-material-textfield/src/components/field/index";
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoundButton from "../RoundButton";


export default class PasswordVisibility extends Component<{}> {

    constructor(props)
    {
        super(props)
        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }
    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)

    };
    onclick = () => {
        Alert.alert("Login Successful");
    };
    render() {
        return (
                        <View style={styles.itPass}>
                            <TextField  label='Password' baseColor="orange"  lineWidth={1} textColor="gray" tintColor='darkorange'
                                       secureTextEntry={this.state.password}/>
                            <Icon
                                style={styles.icon}
                                name={this.state.icEye}
                                color="black"
                                size={25}
                                onPress={this.changePwdType}
                            />
                        </View>


        );
    }
}

