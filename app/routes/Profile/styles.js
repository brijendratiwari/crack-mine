import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop : 20
    },
    profileView : {
      padding : 5,
      paddingLeft : 10,
      margin : 5
    },
    profilePasswrdText : {
      fontSize : 18,
      lineHeight : 24,
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
      height : 64,
      width : 64,
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
      // height : 40,
      // borderBottomColor : '#BCBCBD',
      // borderBottomWidth : 2,
      // width : window.width - 30,

      height: 40,
      fontSize: 13,
      padding: 4,
      width : window.width - 45,
      marginTop : 5
    },
    loginBtnBarView : {
      marginTop : 40,
      paddingLeft : 10,
      flexDirection :'row-reverse',
      width : window.width
    },
    dataTitleView : {
      flexDirection : 'row',
      width : window.width -26
    },
    dataTitleLeftView : {
      flex : 1
    },
    dataTitleRightView : {
      flexDirection : 'row-reverse',
      flex : 1
    },
    dataTitleLeftTxt : {
      fontSize : 12,
      lineHeight : 12,
      color : '#212123'
    },
    dataTitleRightTxt : {
      fontSize : 12,
      lineHeight : 12,
      color : '#212123'
    },
    detailView : {
      padding : 13
    },
    validationImg : {
      marginTop : 15,
      marginRight : 5
    }

});
