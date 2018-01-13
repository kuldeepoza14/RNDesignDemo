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
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import FloatingInputText from "../../component/ui/FloatingInputText";
import PasswordInputText from "../../component/ui/PasswordInputText";

export default class Signup extends Component<{}> {

    onclick = () => {
        console.log("Name : " + this.state.name);
        console.log("Email : " + this.state.email);
        console.log("Password : " + this.state.password);
        console.log("Number : " + this.state.number);
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
                                           onChangeText={(name) => this.setState({name})}/>
                        <FloatingInputText tfLabel='Phone Number'
                                           keyboardType="numeric"
                                           onChangeText={(number) => this.setState({number})}/>
                        <FloatingInputText tfLabel='Email'
                                           keyboardType="email-address"
                                           onChangeText={(email) => this.setState({email})}/>
                        <PasswordInputText onChangeText={(password) => this.setState({password})}/>
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

