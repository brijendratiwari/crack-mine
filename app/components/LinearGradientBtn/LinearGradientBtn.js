import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight

} from 'react-native'
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class LinearGradientBtn extends Component{
  render(){
    let {onPress , btnText ,touchableStyle,  buttonLGStyle, btnFontStyle} = this.props;

    if(buttonLGStyle == undefined){
      buttonLGStyle = {};
    }
    if(btnFontStyle == undefined){
      btnFontStyle = {};
    }

    return(
      <TouchableHighlight style={[styles.linearGradiantButton,touchableStyle]} underlayColor ='transparent' onPress={() => onPress()} >
        <LinearGradient colors={['#8AFD6C','#08E9F6']} style={[styles.linearGradiantView ,buttonLGStyle]}>
          <Text style={[styles.btnTextStyle, btnFontStyle]}>{btnText}</Text>
        </LinearGradient>
      </TouchableHighlight>
    );
  }

}
