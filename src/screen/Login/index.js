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
    Alert,
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
            emailError: '',
            password: '',
            pwdError: ''
        };

    }

    loginClick = () => {
        let emailErr = validation("email", this.state.email);
        let pwdErr = validation("password", this.state.password);

        if (emailErr != null || pwdErr != null) {
            this.setState({
                emailError: emailErr,
                pwdError: pwdErr,
            });
        }
        else {
            this.setState({
                emailError: '',
                pwdError: '',
            });
            this.props.navigation.navigate('Home');
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
                            error={this.state.pwdError}
                            onChangeText={(password) => this.setState({password})}/>
                        <View style={styles.btnLogin}>
                            <RoundButton onClick={this.loginClick}
                                         name="LOGIN"
                                         btnMarTop={15}
                            />

                        </View>
                        <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.forgotPass}>Forgot Your Password?</Text>
                    </View>

                </View>
            </View>


        );
    }
}


//get Method

/*
     const instance = axios.create({
            baseURL: 'https://reqres.in/api/users',
            timeout: 1000,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });

  axios.get(root+'/posts/1')
       .then(function (response) {
           console.log(response);
       })
       .catch(function (error) {
           console.log(error);
       });
*/

//Post Method

/*    axios.post('https://reqres.in/api/users/2',instance).then(function(response) {
         console.log(response);
     }).catch(function (error) {
         console.log(error);
     });
*/