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
import RoundButton from "../../component/ui/RoundButton";


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

                       <RoundButton onClick={this.onclick}
                                    name="LOGIN"
                                    btnBgColor='orange'
                                    btnPadding={7}
                                    btnHeight={35}
                                    btnWidth={250}
                                    btnMarTop={30}
                       />
                       <RoundButton onClick={this.onclick}
                                    name="SIGNUP"
                                    btnBgColor='orange'
                                    btnPadding={7}
                                    btnHeight={35}
                                    btnWidth={250}
                                    btnMarTop={30}
                                    />
                    <RoundButton onClick={this.onclick}
                                 name="LOGIN WITH FACEBOOK"
                                 btnBgColor='orange'
                                 btnPadding={7}
                                 btnHeight={35}
                                 btnWidth={250}
                                 btnMarTop={30}
                                 />
            </View>
            </View>
        );
    }
}

