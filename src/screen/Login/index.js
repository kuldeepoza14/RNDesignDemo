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
    Image,
    Alert
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import FloatingInputText from "../../component/ui/FloatingInputText";
import PasswordInputText from "../../component/ui/PasswordInputText";

export default class Login extends Component<{}> {

    onclick = () => {
        Alert.alert("Email : " + this.state.email + "\n" + "Password : " + this.state.password);
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textViewLogin}>
                        <Image style={styles.logoImage} source={{uri: 'http://zroomp.com/logotransbg.png'}}/>
                        <Text style={styles.largeText}>Login to Zroomp</Text>
                        <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>
                    <View style={styles.newLoginBind}>
                        <FloatingInputText tfLabel='Email'
                                           keybordType="email-address"
                                           onChangeText={(email) => this.setState({email})}/>
                        <PasswordInputText onChangeText={(password) => this.setState({password})}/>
                        <View style={styles.btnLogin}>
                            <RoundButton onClick={this.onclick}
                                         name="LOGIN"
                                         btnPadding={7}
                                         btnHeight={35}
                                         btnWidth={270}
                                         btnMarTop={15}
                                         Md={true}/>

                        </View>
                        <Text style={styles.forgotPass}>Forgot Your Password?</Text>
                    </View>

                </View>
            </View>


        );
    }
}

