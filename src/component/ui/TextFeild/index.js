/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Button, Alert,
} from 'react-native';
import TextField from "react-native-material-textfield/src/components/field/index";


export default class TextFeild extends Component<{}> {

    render() {
        return (
            <View>
                <TextField label='Email'  lineWidth={1} baseColor="orange" textColor="gray" tintColor='darkorange'/>
            </View>


        );
    }
}

