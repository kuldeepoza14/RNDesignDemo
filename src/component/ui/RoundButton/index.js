/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class RoundButton extends Component {

    render() {
        let btnStylesArray = [];
        btnStylesArray.push({
            backgroundColor: this.props.btnBgColor,
            borderRadius: 20,
            marginTop:this.props.btnMarTop,
            width: this.props.btnWidth,
            height: this.props.btnHeight,
            padding: this.props.btnPadding,

        });
        return (
            <View>
                <TouchableOpacity onPress={this.props.onClick}
                                  style={btnStylesArray}
                                  activeOpacity={0.8}>
                    <View>
                        <Text style={styles.btnText}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

RoundButton.propTypes = {
    btnWidth: PropTypes.number,
    btnHeight: PropTypes.number,
    btnPadding: PropTypes.number,
    btnBgColor: PropTypes.string,
    btnMarTop: PropTypes.number
};
RoundButton.defaultProps = {
    btnWidth: 400,
    btnHeight: 150,
    btnPadding: 40,
    btnBgColor: "red",
    btnMarTop: 30
};
