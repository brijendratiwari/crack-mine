import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'

let self;

class Name extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      firsName: '',
      lastName: ''
    }

    this.onPressBack = this.onPressBack.bind(this);
    this.onPressEmail = this.onPressEmail.bind(this);
  }

  onPressBack(){
    this.props.navigator.pop();
  }

  onPressEmail(){
    this.props.navigator.push({
      id: 'Email',
      name: 'email'
    });
  }

  render(){
    return (
    <View style={[styles.container]}>

      <View style={[styles.topBar]}>
        <View>
          <TouchableHighlight onPress={this.onPressBack} underlayColor ="white" style={[styles.backTouch]}>
            <Ionicons name="ios-arrow-back" size={40} color="#555556" style={[styles.backIcon]}/>
          </TouchableHighlight>
        </View>
     </View>
     <View style={[styles.subContainer]}>

     <View>
       <Text style={[styles.headerText]}>What&#39;s your name?</Text>
     </View>

     <View>
       <Text style={styles.titleText}>first name</Text>

       <View style ={styles.textInputParent}>
         <TextInput
             onChangeText={(firsName) => this.setState({
                 firsName : firsName
               })
             }
             underlineColorAndroid = "transparent"
             value={this.state.firsName}
             style={styles.txtInutStyle}
             />

             <Image
               style={[styles.validationImg]}
               source={images.black_true}
             />
       </View>

       <Text style={styles.titleText}>last name</Text>

       <View style ={styles.textInputParent}>
         <TextInput
             onChangeText={(lastName) => this.setState({
                 lastName : lastName
               })
             }
             underlineColorAndroid = "transparent"
             value={this.state.lastName}
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
       <LinearGradientBtn touchableStyle={{width : 128}} onPress={() => this.onPressEmail()} btnFontStyle={{fontSize : 16, fontWeight : '500'}} btnText="EMAIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>" />
     </View>

   </View>
    )
  }
  //************************************** Render end*****************************//
};


export default Name;
