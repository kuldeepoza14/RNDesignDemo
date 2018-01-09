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
    Button
} from 'react-native';


export default class Main extends Component<{}> {
loginClick=()=>{

};

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textView}>
                      <Image style={styles.logoImage} source={{uri : 'http://zroomp.com/logotransbg.png'}}/>
                      <Text style={styles.largeText}>Welcome to Zroomp</Text>
                      <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>

                   <View style={styles.btnView}>
                     <Button onPress={this.loginClick} title="LOGIN" color="gray"/>
                   </View>
                   <View style={styles.btnView2}>
                     <Button onPress={this.loginClick} title="SIGNUP" color="gray"/>
                   </View>
                    <Button onPress={this.loginClick} title="LOGIN WITH FACEBOOK" color="indigo"/>
                </View>
            </View>

        );
    }
}

