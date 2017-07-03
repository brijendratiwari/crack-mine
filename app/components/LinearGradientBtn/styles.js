import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
  linearGradiantButton : {
    // padding : 5,
    height : 40,
    width : 248
  },
  linearGradiantView : {
    alignItems : 'center',
    justifyContent : 'center',
    // padding : 5,
    height : 40,
    borderRadius : 20,
  },
  btnTextStyle : {
    color : 'white',
    fontSize : 21
  }
});
