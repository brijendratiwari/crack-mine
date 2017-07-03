import React , { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import common from '../../config/config.js';
import Home from  '../../routes/Home/Home.js';
import Login from  '../../routes/Login/Login.js';
import Name from  '../../routes/SignUp/Name.js';
import Email from  '../../routes/SignUp/Email.js';
import Password from  '../../routes/SignUp/Password.js';
import ForgotPassword from  '../../routes/ForgotPassword/ForgotPassword.js';
import Interest from  '../../routes/Interest/Interest.js';
import ResetPassword from  '../../routes/ForgotPassword/ResetPassword.js';
import ShareLocation from  '../../routes/ShareLocation/ShareLocation.js';
import Profile from  '../../routes/Profile/Profile.js';

let navigatorObj ;

export default class AppScreen extends Component {

  render(){
    return (
      <Navigator
          initialRoute={{id: 'Home', name: 'home'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          />
    );
  }

  renderScene(route, navigator) {
    // **************** For push notification ******************
    navigatorObj = navigator;
    //**********************************************************

    var routeId = route.id;


    if (routeId === 'Home') {
      return (
        <Home
          navigator={navigator} />
      );
    }

    if (routeId === 'Login') {
      return (
        <Login
          navigator={navigator} />
      );
    }

    if (routeId === 'Name') {
      return (
        <Name
          navigator={navigator} />
      );
    }

    if (routeId === 'Email') {
      return (
        <Email
          navigator={navigator} />
      );
    }

    if (routeId === 'Password') {
      return (
        <Password
          navigator={navigator} />
      );
    }

    if (routeId === 'ForgotPassword') {
      return (
        <ForgotPassword
          navigator={navigator} />
      );
    }

    if (routeId === 'ShareLocation') {
      return (
        <ShareLocation
          navigator={navigator} />
      );
    }

    if (routeId === 'Interest') {
      return (
        <Interest
          navigator={navigator} />
      )
    }

    if (routeId === 'ResetPassword') {
      return (
        <ResetPassword
          navigator={navigator} />
      );
    }

    if (routeId === 'Profile') {
      return (
        <Profile
          navigator={navigator} />
      );
    }

    return this.noRoute(navigator);
  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>No Route Found</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
