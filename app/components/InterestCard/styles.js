import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
      interestView : {
        width : window.width / 2,
        alignItems : 'center',
        // backgroundColor : 'green',
        paddingTop : 3,
        marginTop : 15,
        paddingRight : 15,
        justifyContent : 'center'
      },
      interesrChildView : {
        // borderRadius : 5,
        // borderColor : '#8F8F90',
        // borderWidth : 2,
        // width : 160,
        // height : 64,
        // margin : 15,
        // justifyContent : 'center',
        alignItems : 'center',

        // paddingTop : 10
      },
      interesrChildTextView : {
        borderRadius : 10,
        borderColor : '#8F8F90',
        borderWidth : 2,
        width : 160,
        height : 64,
        margin : 15,
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 15,
      },
      interestIconView : {
        height : 40,
        width : 40,
        borderRadius : 20,
        borderColor : '#8F8F90',
        borderWidth : 2,
        // backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        left : 75,
        top : -3,
        backgroundColor : 'white'
      },
      interestIcon  : {
        height : 24,
        width : 24
      },
      interestText : {
        fontSize : 16,
        lineHeight : 21,
        color : "#212123"
      }
});
