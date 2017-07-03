import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop : 20
    },
    logoContainer : {
      justifyContent : 'center',
      alignItems : 'center'
    },
    logoImageViewParent : {
      marginTop : 15,
      marginBottom : 20,
      height : 48,
      width : 48,
      borderRadius: 24,
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
    whatLikeView : {
      marginBottom : 20
    },
    whatLikeText : {
      fontSize : 21,
      lineHeight : 24,
      color : "#212123"
    },
    scrollViewParent : {
      flex: 1,
      // marginBottom : 100

    },
    interestController : {
      // paddingHorizontal : 15,
      // backgroundColor : 'pink',
      // width : window.width,
      flex : 1,
    },
    interestListView : {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    InterestBtnBarView : {
      width : window.width,
      height : 80,
      flexDirection : 'row-reverse',
      position : 'absolute',
      left : 0,
      bottom : 0,
      paddingLeft : 20,
      // paddingTop : 20,
      // backgroundColor : 'red',
      // alignItems : 'center',
      shadowColor: '#ffffff',
      shadowOffset: {
        width: 0,
        height: -20
      },
      shadowRadius: 15,
      shadowOpacity: 1.0
    }
});
