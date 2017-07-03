import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'

let self;

class Password extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      password: '',
      confirmPassword: '',
      passwordView : true,
      passwordConfirmView : true
    }

    this._onPressBack = this._onPressBack.bind(this);
    this._onPressInterests = this._onPressInterests.bind(this);
  }

  _onPressBack(){
    this.props.navigator.pop();
  }

  _onPressInterests(){
    this.props.navigator.push({
      id: 'Interest',
      name: 'interest'
    });
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
           <Text style={[styles.headerText]}>Make a password</Text>
           <Text style={[styles.subHeaderText]}>Password must be 8 charecters and contain at least 1 symbol</Text>
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
                 secureTextEntry = {this.state.passwordView}
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
                 secureTextEntry = {this.state.passwordView}
                 value={this.state.passwordConfirmView}
                 style={styles.txtInutStyle}
                 />

                 <Image
                   style={[styles.validationImg]}
                   source={images.black_true}
                 />
           </View>
         </View>

         <View style={styles.BtnBarView}>
           <LinearGradientBtn touchableStyle={{width : 150}} onPress={() => this._onPressInterests()} btnFontStyle={{fontSize : 16, fontWeight : '500'}} btnText="INTERESTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>" />
         </View>

      </View>

   </View>
    )
  }
  //************************************** Render end*****************************//
};


export default Password;
