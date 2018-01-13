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
import {validation} from "../../utils/validate";

export default class Login extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError:'',
            password: '',
            passError:''
        };
    }

    loginClick = () => {
        let result=validation("email",this.state.email);
          if (!((result.email) == null)) {
               this.setState({
                   emailError: result.email.toString()
               });
           }
           else
           {
               this.setState({
                   emailError: ''
               });
           }
        let resultPass=validation("password",this.state.password);
        if (!((resultPass.password) == null)) {
            this.setState({
                passError: resultPass.password.toString()
            });
        }
        else
        {
            this.setState({
                passError: ''
            });
        }

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
                                           error={this.state.emailError}
                                           keybordType="email-address"
                                           onChangeText={(email) => this.setState({email})}/>
                        <PasswordInputText
                            error={this.state.passError}
                            onChangeText={(password) => this.setState({password})}/>
                        <View style={styles.btnLogin}>
                            <RoundButton onClick={this.loginClick}

                                         name="LOGIN"
                                         btnMarTop={15}
                            />

                        </View>
                        <Text style={styles.forgotPass}>Forgot Your Password?</Text>
                    </View>

                </View>
            </View>


        );
    }
}


