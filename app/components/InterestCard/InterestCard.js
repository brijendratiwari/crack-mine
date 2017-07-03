import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image

} from 'react-native';

import images from './../../config/images.js';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class InterestCard extends Component{
  render(){
    let {interestData,onPressInterest} = this.props;

    let selectedIneterstStyle = {};
    let selectedIntersetTxtStyle = {};
    let selectedImageStyle = {};

    if(interestData.isSelected){
      selectedIneterstStyle = {
        borderColor : 'white',
        backgroundColor : '#26E0E6'
      };

      selectedIntersetTxtStyle = {
        color : 'white'
      };

      selectedImageStyle = {
        borderColor : 'white',
        backgroundColor : "#26E0E6"
      };
    }

    return(
      <TouchableHighlight underlayColor = "white" style={styles.interestView} onPress={() => onPressInterest()}>
        <View style={[styles.interestChildView]}>
          <View style={[styles.interesrChildTextView,selectedIneterstStyle]}>
              <Text style={[styles.interestText , selectedIntersetTxtStyle]}>arts</Text>
          </View>

          <View style={[styles.interestIconView,selectedImageStyle]}>
              <Image
                style={[styles.interestIcon]}
                source={images.crack_small}
              />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}
