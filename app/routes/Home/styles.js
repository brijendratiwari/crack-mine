import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems : 'center',
      justifyContent : 'center',
      marginTop : 20
    },
    contentCenter : {
      justifyContent : 'center',
      alignItems : 'center'
    },
    logoImageViewParent : {
      marginBottom : 64,
      height : 200,
      width : 200,
      borderRadius: 100,
      alignItems : 'center',
      justifyContent : 'center',
      shadowColor: '#D3D3D3',
      shadowOffset: {
        width: 0,
        height: 7
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
    imageView : {
      width: 200,
      height: 200,

    },
    logoImage : {
      height : 144,
      width : 130,
    },
    welcomeToCrackText : {
      color : '#212123',
      fontSize : 24,
      lineHeight : 28,
      fontWeight : 'normal',
      letterSpacing : 0.3
    },
    signUpView : {
      marginTop : 60
    },
    loginBtnTouchable : {
      borderRadius : 10,
      height : 40,
      width : 248,
      alignItems : 'center',
      justifyContent : 'center',
      padding : 5,
      borderRadius : 20,
      borderWidth : 2,
      borderColor : 'black',
      marginTop : 25
    },
    loginBtnTxt : {
      color : '#212123',
      fontSize : 20,
      fontWeight : '500'
    },
    legalText : {
      color : '#212123',
      marginTop : 50,
      textAlign : 'center',
      fontSize : 14,
      lineHeight : 18

    }

});
