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
    Alert
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import FloatingInputText from "../../component/ui/FloatingInputText";



export default class ForgotPassword extends Component<{}> {


    onclick = () => {
        Alert.alert("Email : " + this.state.email);
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
                            <FloatingInputText
                                tfLabel='Email'
                                keybordType="email-address"
                                onChangeText={(email) => this.setState({email})}/>
                        </View>
                        <RoundButton onClick={this.onclick}
                                     name="LOGIN"
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

