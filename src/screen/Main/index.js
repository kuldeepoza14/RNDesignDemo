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

export default class Main extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textView}>
                        <Image style={styles.logoImage} source={{uri: 'http://zroomp.com/logotransbg.png'}}/>
                        <Text style={styles.largeText}>Welcome to Zroomp</Text>
                        <Text style={styles.smallText}>iorem ipsum summytext here!</Text>
                    </View>

                    <RoundButton
                        onClick={() => this.props.navigation.navigate('Login')}
                                 name="LOGIN"
                                 btnPadding={7}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={15}
                                 sm={true}
                    />
                    <RoundButton
                        onClick={() => this.props.navigation.navigate('Signup')}
                                 name="SIGNUP"
                                 btnPadding={7}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={15}
                    />
                    <RoundButton onClick={() =>  this.props.navigation.navigate('Main')}
                                 name="LOGIN WITH FACEBOOK"
                                 btnPadding={7}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={15}
                    />
                </View>
            </View>
        );
    }
}

