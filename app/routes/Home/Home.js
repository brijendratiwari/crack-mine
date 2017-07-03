import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'
let self;

class Home extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }
    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressSignUp = this.onPressSignUp.bind(this);
  }

  onPressLogin(){
    this.props.navigator.push({
      id: 'Login',
      name: 'login'
    });
  }

  onPressSignUp(){
    this.props.navigator.push({
      id: 'Name',
      name: 'name'
    });
  }

  render(){
    return (
        <View style={[styles.container]}>
          <View style={[styles.contentCenter]}>
            <View style={[styles.logoImageViewParent]}>
                <Image
                  style={[styles.logoImage]}
                  source={images.crack}
                />
          </View>
        </View>

        <Text style={styles.welcomeToCrackText}>Welcome to Crack</Text>

      <View style={styles.signUpView}>
        <LinearGradientBtn onPress={() => this.onPressSignUp()} btnFontStyle={{fontSize : 20, fontWeight : '500'}} btnText="Sign Up" />
      </View>

      <TouchableHighlight style={styles.loginBtnTouchable} underlayColor ="white"  onPress={() => this.onPressLogin()}>
        <Text style={styles.loginBtnTxt}>Login</Text>
      </TouchableHighlight>

      <Text style={styles.legalText}>Legal Blurb goes down here</Text>
      </View>
    )
  }
  //************************************** Render end*****************************//
};


export default Home;
