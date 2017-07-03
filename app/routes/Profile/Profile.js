import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'


let self;

class Profile extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      username:'',
      bio : '',
      birthdate: '',
      sex: ''
    }
    this.onPressCreate = this.onPressCreate.bind(this);
  }

  onPressCreate(){

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.profileView, styles.logoContainer]}>
            <Text style={styles.profilePasswrdText}>Profile</Text>
        </View>

        <View style={[styles.logoContainer]}>
          <Image
            style={[styles.logoImage]}
            source={images.CameraIcon}
          />


      </View>

      <View style = {styles.detailView}>
        <View style={styles.dataTitleView}>
          <View style={styles.dataTitleLeftView}>
            <Text style={styles.dataTitleLeftTxt}>username*</Text>
          </View>
          <View style={styles.dataTitleRightView}>
            <Text style={styles.dataTitleRightTxt}>30</Text>
          </View>
        </View>

        <View style ={styles.textInputParent}>
          <TextInput
              onChangeText={(username) => this.setState({
                  username : username
                })
              }
              underlineColorAndroid = "transparent"
              maxLength = {40}
              value={this.state.username}
              style={styles.txtInutStyle}
              />

              <Image
                style={[styles.validationImg]}
                source={images.black_true}
              />
        </View>

        <Text style={styles.titleText}>bio*</Text>

        <View style ={styles.textInputParent}>
          <TextInput
              onChangeText={(bio) => this.setState({
                  bio : bio
                })
              }
              underlineColorAndroid = "transparent"
              maxLength = {140}
              multiline = {true}
              numberOfLines = {4}
              editable = {true}
              value={this.state.bio}
              style={styles.txtInutStyle}
              />
        </View>

        <Text style={styles.titleText}>birthdate*</Text>

        <View style ={styles.textInputParent}>
          <TextInput
              onChangeText={(birthdate) => this.setState({
                  birthdate : birthdate
                })
              }
              underlineColorAndroid = "transparent"
              value={this.state.birthdate}
              style={styles.txtInutStyle}
              />
        </View>

        <Text style={styles.titleText}>sex*</Text>

        <View style ={styles.textInputParent}>
          <TextInput
              onChangeText={(sex) => this.setState({
                  sex : sex
                })
              }
              underlineColorAndroid = "transparent"
              value={this.state.sex}
              style={styles.txtInutStyle}
              />
        </View>
      </View>

      <View style={styles.loginBtnBarView}>
        <LinearGradientBtn touchableStyle={{width : 128}} onPress={() => this.onPressCreate()} btnFontStyle={{fontSize : 16, fontWeight : '500'}} btnText="CREATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>" />
      </View>
    </View>
    )
  }
  //************************************** Render end*****************************//
};


export default Profile;
