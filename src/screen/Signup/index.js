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


export default class Signup extends Component<{}> {
    loginClick=()=>{

    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.textViewLogin}>
                        <Text style={styles.largeText}>Signup to Zroomp</Text>
                        <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>
                    <View style={styles.newLoginBind}>
                        <View>
                            <TextInput type="number" placeholder="Phone Number"/>
                        </View>
                        <View>
                           <TextInput type="email" placeholder="Email"/>
                        </View>
                        <View>
                            <TextInput  password={true} placeholder="Password"/>
                        </View>
                        <View>
                            <TextInput  password={true} placeholder="Confirm Password"/>
                        </View>
                        <View style={styles.btnLogin}>
                            <Button onPress={this.loginClick} title="Signup" color="indigo"/>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

