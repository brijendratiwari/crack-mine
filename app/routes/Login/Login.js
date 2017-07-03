import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'


let self;

class Login extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      email:'',
      password: ''
    }
    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressForgot = this.onPressForgot.bind(this);
  }

  onPressLogin(){

  }

  onPressForgot(){
    this.props.navigator.push({
      id: 'ForgotPassword',
      name: 'forgotPassword'
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.forgotView}>
          <TouchableHighlight underlayColor ="white" onPress={() => this.onPressForgot()}>
            <Text style={styles.forgotPasswrdText}>Forgot Password</Text>
          </TouchableHighlight>
        </View>

        <View style={[styles.logoContainer]}>
          <View style={[styles.logoImageViewParent]}>
              <Image
                style={[styles.logoImage]}
                source={images.crack_small}
              />
        </View>

        <View style={[styles.subContainer]}>
          <Text style={styles.titleText}>email address</Text>

          <View style ={styles.textInputParent}>
            <TextInput
                onChangeText={(email) => this.setState({
                    email : email
                  })
                }
                underlineColorAndroid = "transparent"
                value={this.state.email}
                style={styles.txtInutStyle}
                />

                <Image
                  style={[styles.validationImg]}
                  source={images.black_true}
                />
          </View>

          <Text style={styles.titleText}>password</Text>

          <View style ={styles.textInputParent}>
            <TextInput
                onChangeText={(password) => this.setState({
                    password : password
                  })
                }
                underlineColorAndroid = "transparent"
                value={this.state.password}
                style={styles.txtInutStyle}
                />

                <Image
                  style={[styles.validationImg]}
                  source={images.black_true}
                />
          </View>

        </View>

        <View style={styles.loginBtnBarView}>
          <LinearGradientBtn touchableStyle={{width : 128}} onPress={() => this.onPressLogin()} btnFontStyle={{fontSize : 16, fontWeight : '500'}} btnText="LOGIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>" />
        </View>
      </View>
    </View>
    )
  }
  //************************************** Render end*****************************//
};


export default Login;
