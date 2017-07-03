import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop : 20
    },
    subContainer : {
      paddingHorizontal : 20,
    },
    forgotView : {
      flexDirection : 'row-reverse',
      padding : 5,
      paddingLeft : 10,
      margin : 5
    },
    forgotPasswrdText : {
      fontSize : 12,
      lineHeight : 15,
      color : '#212123'
    },
    logoContainer : {
      justifyContent : 'center',
      alignItems : 'center'
    },
    logoImageViewParent : {
      marginTop : 15,
      marginBottom : 50,
      height : 64,
      width : 64,
      borderRadius: 32,
      // backgroundColor: 'white',
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
      width: 64,
      height: 64,

    },
    logoImage : {
      height : 46,
      width : 46,
    },
    titleText : {
      fontSize : 12,
      color : '#212123',
      marginTop : 25
    },

    textInputParent : {
      borderBottomWidth: 1,
      borderBottomColor: '#BCBCBD',
      flexDirection : 'row',
      marginTop : 5
    },
    txtInutStyle : {
      height: 40,
      fontSize: 13,
      padding: 4,
      width : window.width - 30,
      marginTop : 5
    },
    loginBtnBarView : {
      marginTop : 40,
      paddingLeft : 10,
      flexDirection :'row-reverse',
      width : window.width
    },
    validationImg : {
      marginTop : 15,
      right : 15
    }

});
