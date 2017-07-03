import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js';

let self;

class ResetPassword extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      password: '',
      confirmPassword: '',
      modalVisible: false,
      passwordView : true,
      passwordConfirmView : true
    }

    this._onPressClose = this._onPressClose.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
    this._onPressSendContinue = this._onPressSendContinue.bind(this);
    this.onPressContinue = this.onPressContinue.bind(this);
  }

  _onPressClose(){
    this._onPressSendContinue(!this.state.modalVisible)
  }

  _onPressBack(){
    this.props.navigator.pop();
  }

  _onPressSendContinue(visible){
    this.setState({modalVisible: visible});
  }

  onPressContinue(){

  }

  render(){
    return (
    <View style={[styles.container]}>

      <View style={[styles.topBar]}>
        <View>
          <TouchableHighlight onPress={this._onPressBack} underlayColor ="white" style={[styles.backTouch]}>
            <Ionicons name="ios-close" size={40} color="#555556" style={[styles.backIcon]}/>
          </TouchableHighlight>
        </View>
     </View>

    <View style={[styles.subContainer]}>
     <View>
       <Text style={[styles.headerText]}>Reset your password</Text>
       <Text style={[styles.subHeaderText]}>Password must be 8 characters, and include a symbol</Text>
     </View>

     <View>

     <View style={styles.dataTitleView}>
       <View style={styles.dataTitleLeftView}>
         <Text style={[styles.dataTitleLeftTxt, styles.titleText]}>password</Text>
       </View>
       <View style={styles.dataTitleRightView}>
         <Text style={[styles.dataTitleRightTxt, styles.titleText]} onPress={() => this.setState({passwordView: false})}>show</Text>
       </View>
     </View>

         <View style ={styles.textInputParent}>
           <TextInput
               onChangeText={(password) => this.setState({
                   password : password
                 })
               }
               underlineColorAndroid = "transparent"
               secureTextEntry = {true}
               value={this.state.password}
               style={styles.txtInutStyle}
               />

               <Image
                 style={[styles.validationImg]}
                 source={images.black_true}
               />
         </View>

        <View style={styles.dataTitleView}>
          <View style={styles.dataTitleLeftView}>
            <Text style={[styles.dataTitleLeftTxt, styles.titleText]}>confirm password</Text>
          </View>
          <View style={styles.dataTitleRightView}>
            <Text style={[styles.dataTitleRightTxt, styles.titleText]} onPress={() => this.setState({passwordConfirmView: false})}>show</Text>
          </View>
        </View>

         <View style ={styles.textInputParent}>
           <TextInput
               onChangeText={(confirmPassword) => this.setState({
                   confirmPassword : confirmPassword
                 })
               }
               underlineColorAndroid = "transparent"
               secureTextEntry = {true}
               value={this.state.confirmPassword}
               style={styles.txtInutStyle}
               />

               <Image
                 style={[styles.validationImg]}
                 source={images.black_true}
               />
         </View>
       </View>
    </View>

    <View style={styles.BtnBarView}>
      <LinearGradientBtn touchableStyle={{width : 200}} onPress={() => this._onPressSendContinue(true)} btnFontStyle={{fontSize : 20, fontWeight : '500'}} btnText="Save & Continue" />
    </View>

    <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={[styles.container]}>
          <View style={[styles.topBar]}>
            <View>
              <TouchableHighlight onPress={this._onPressClose} underlayColor ="white" style={[styles.backTouch]}>
                <Ionicons name="ios-close" size={40} color="#555556" style={[styles.backIcon]}/>
              </TouchableHighlight>
            </View>
         </View>
            <View style={[styles.contentCenter]}>
              <View style={[styles.logoImageViewParent]}>
                  <Image
                    style={[styles.logoImage]}
                    source={images.Checkmark}
                  />
            </View>
          </View>

          <View style={[styles.contentCenter]}>
            <Text style={styles.crackText}>Thanks User</Text>
            <Text style={styles.crackText}>You&#39;re goot to go. Click below to get back to the fun!</Text>
          </View>

        <View style={[styles.signUpView, styles.contentCenter]}>
          <LinearGradientBtn onPress={() => this.onPressContinue()} btnFontStyle={{fontSize : 20, fontWeight : '500'}} btnText="Continue" />
        </View>

        <Text style={styles.legalText}>Not now, thanks</Text>
        </View>
        </Modal>

   </View>
    )
  }
  //************************************** Render end*****************************//
};


export default ResetPassword;
