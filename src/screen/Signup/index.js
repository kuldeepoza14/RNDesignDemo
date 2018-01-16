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
import {StackNavigator} from "react-navigation";
export default class Signup extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            pwdError: '',
            name: '',
            nameError: '',
            number: '',
            numError: ''
        };
    }

    onclick = () => {
        let nameErr = validation("name", this.state.name);
        let numErr = validation("number", this.state.number);
        let emailErr = validation("email", this.state.email);
        let pwdErr = validation("password", this.state.password);
        if (emailErr != null ||
            pwdErr != null ||
            nameErr != null ||
            numErr != null) {
            this.setState({
                emailError: emailErr,
                pwdError: pwdErr,
                numError: numErr,
                nameError: nameErr
            });
        }
        else {
            this.setState({
                emailError: '',
                pwdError: '',
                numError: '',
                nameError: ''
            });
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textViewLogin}>
                        <Image style={styles.logoImage} source={{uri: 'http://zroomp.com/logotransbg.png'}}/>
                        <Text style={styles.largeText}>Signup to Zroomp</Text>
                        <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>
                    <View style={styles.newLoginBind}>
                        <FloatingInputText tfLabel='Name'
                                           error={this.state.nameError}
                                           onChangeText={(name) => this.setState({name})}/>
                        <FloatingInputText tfLabel='Phone Number'
                                           error={this.state.numError}
                                           keyboardType="numeric"
                                           onChangeText={(number) => this.setState({number})}/>
                        <FloatingInputText tfLabel='Email'
                                           error={this.state.emailError}
                                           keyboardType="email-address"
                                           onChangeText={(email) => this.setState({email})}/>
                        <PasswordInputText
                            error={this.state.pwdError}
                            onChangeText={(password) => this.setState({password})}/>
                        <RoundButton onClick={this.onclick}
                                     name="SIGNUP"
                                     btnPadding={7}
                                     btnHeight={35}
                                     btnWidth={250}
                                     btnMarTop={30}
                                     Nor={true}
                        />
                    </View>
                </View>
            </View>

        );
    }
}

