import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop : 20
    },
    subContainer : {
      paddingHorizontal : 10,
      paddingTop : 20
    },
    topBar : {
      height : 50,
    },
    contentCenter : {
      justifyContent : 'center',
      alignItems : 'center'
    },
    contentRight : {
      justifyContent : 'flex-end',
      alignItems : 'flex-end'
    },
    backIcon : {
      paddingLeft: 10
    },
    backTouch : {
      width: 40
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
      padding: 10,
      width : window.width - 30,
      marginTop : 5
    },
    BtnBarView : {
      marginTop : 40,
      justifyContent : 'center',
      alignItems : 'center',
      width : window.width
    },
    headerText : {
      color : '#212123',
      fontSize : 24,
      lineHeight : 28,
      fontWeight : 'normal',
      letterSpacing : 0.4

    },
    subHeaderText : {
      color : '#212123',
      fontSize : 16,
      lineHeight : 21,
      fontWeight : 'normal',
      letterSpacing : 0.09,
      marginTop : 10
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
    logoImage : {
      height : 128,
      width : 128,
    },
    crackText : {
      color : '#212123',
      fontSize : 24,
      lineHeight : 28,
      fontWeight : 'normal',
      letterSpacing : 0.3,
    },
    signUpView : {
      marginTop : 60
    },
    legalText : {
      color : '#212123',
      marginTop : 50,
      textAlign : 'center',
      fontSize : 14,
      lineHeight : 18

    },
    validationImg : {
      marginTop : 15,
      marginRight : 5
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
});
