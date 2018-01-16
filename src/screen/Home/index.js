/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Text
} from 'react-native';

export default class Home extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
              <Text>Welcome</Text>
            </View>
        );
    }
}

