/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Text,
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import {NavigationActions} from "react-navigation";
export default class Home extends Component<{}> {
    loginClick = () => {

        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key:null,
            actions: [NavigationActions.navigate({ routeName: 'Unauthorized' })]
        }));

    };
    render() {
        return (
            <View style={styles.container}>
              <Text>Welcome</Text>
                <RoundButton onClick={this.loginClick}
                             name="LOGOUT"
                             btnMarTop={15}
                />

            </View>
        );
    }
}


