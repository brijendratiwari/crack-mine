import { StyleSheet , Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default StyleSheet.create({
  wrapper : {
    flexDirection : 'row',
    paddingRight : 10,
    alignItems : 'center',
    marginTop : -5
  },
  text : {
    color : '#66AFFF',
    justifyContent : 'center',
    margin : 5,
    fontSize : 16,
    flex : 1,
    paddingLeft : 15
  },
  toggle : {
    justifyContent : 'center',
    alignItems : 'flex-end',
    marginRight : 20,

  }
});
