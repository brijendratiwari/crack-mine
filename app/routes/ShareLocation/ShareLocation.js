import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, AlertIOS, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'
let self;

class ShareLocation extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }
    this.onPressShareLocation = this.onPressShareLocation.bind(this);
  }

  onPressShareLocation(){
    AlertIOS.alert(
     '"Crack" Wants to Access Your Location',
     'interact with friends on the map and get better recommendations',
     [
       {text: 'No thanks', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: () => console.log('Install Pressed')},
     ],
    );
  }

  render(){
    return (
        <View style={[styles.container]}>
          <View style={[styles.contentCenter]}>
            <View style={[styles.logoImageViewParent]}>
                <Image
                  style={[styles.logoImage]}
                  source={images.location}
                />
          </View>
        </View>

        <View style={[styles.contentCenter]}>
          <Text style={styles.crackText}>Crack works better when you share your location.</Text>
        </View>

      <View style={styles.signUpView}>
        <LinearGradientBtn onPress={() => this.onPressShareLocation()} btnFontStyle={{fontSize : 20, fontWeight : '500'}} btnText="Share Location" />
      </View>

      <Text style={styles.legalText}>Not now, thanks</Text>
      </View>
    )
  }
  //************************************** Render end*****************************//
};


export default ShareLocation;
