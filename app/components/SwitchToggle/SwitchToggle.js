import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback

} from 'react-native'
import styles from './styles';

export default class SwitchToggle extends Component{
  render(){
    let {toggle , onPressToggle} = this.props;

    return(
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback style={styles.toggle}
        onPress={()=>{onPressToggle()}}
        >
        {
          toggle ?
          <Icon name="toggle-on" size={40} color="rgb(102, 175, 255)" />
          :
          <Icon name="toggle-off" size={40} color="rgb(158, 171, 173)" />

        }
        </TouchableWithoutFeedback>
      </View>
    );
  }

}
