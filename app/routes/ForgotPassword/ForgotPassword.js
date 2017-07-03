import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js';

let self;

class ForgotPassword extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      email: ''
    }

    this._onPressBack = this._onPressBack.bind(this);
    this._onPressSendReset = this._onPressSendReset.bind(this);
  }

  _onPressBack(){
    this.props.navigator.pop();
  }

  _onPressSendReset(){

  }

  render(){
    return (
    <View style={[styles.container]}>

      <View style={[styles.topBar]}>
        <View>
          <TouchableHighlight onPress={this._onPressBack} underlayColor ="white" style={[styles.backTouch]}>
            <Ionicons name="ios-arrow-back" size={40} color="#555556" style={[styles.backIcon]}/>
          </TouchableHighlight>
        </View>
     </View>

    <View style={[styles.subContainer]}>
     <View>
       <Text style={[styles.headerText]}>Forgot Password</Text>
       <Text style={[styles.subHeaderText]}>Enter email for the account we&#39;ll send you a reset link</Text>
     </View>

     <View>
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
       </View>

     </View>
    </View>

    <View style={styles.BtnBarView}>
      <LinearGradientBtn touchableStyle={{width : 200}} onPress={() => this._onPressSendReset()} btnFontStyle={{fontSize : 20, fontWeight : '500'}} btnText="Send Reset" />
    </View>

   </View>
    )
  }
  //************************************** Render end*****************************//
};


export default ForgotPassword;
