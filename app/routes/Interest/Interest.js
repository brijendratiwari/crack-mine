import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput ,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import images from './../../config/images.js';
import LinearGradientBtn from './../../components/LinearGradientBtn/LinearGradientBtn.js'
import InterestCard from './../../components/InterestCard/InterestCard.js'


let self;

class Interest extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;

    let interestList = [{
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      },
      {
        image : images.beauty,
        text : 'beauty',
        isSelected : false
      }];

    this.state = {
      interestList : interestList
    };

    this.onPressInterest = this.onPressInterest.bind(this);
    this.onPressNext = this.onPressNext.bind(this);
  }

  onPressInterest(index){
    let interestList = this.state.interestList;
    interestList[index].isSelected = !interestList[index].isSelected;

    this.setState({
      interestList : interestList
    });
  }

  onPressNext(){
    this.props.navigator.push({
      id: 'ShareLocation',
      name: 'sharelocation'
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.logoContainer]}>
          <View style={[styles.logoImageViewParent]}>
              <Image
                style={[styles.logoImage]}
                source={images.crack_small}
              />
        </View>

        <View style={styles.whatLikeView}>
            <Text style={styles.whatLikeText}>What do you like to do?</Text>
        </View>

          <ScrollView contentContainerStyle={styles.interestController}>
            <View style={styles.interestListView}>
              {
                this.state.interestList.map(function(intObj,index){
                  return (
                    <InterestCard onPressInterest={() => self.onPressInterest(index)} interestData={intObj}/>
                  )
                })
              }
            </View>
          </ScrollView>
      </View>

      <View style={styles.InterestBtnBarView}>
        <LinearGradientBtn touchableStyle={{width : 128}} onPress={() => this.onPressNext()} btnFontStyle={{fontSize : 16, fontWeight : '500'}} btnText="NEXT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>" />
      </View>
    </View>
    )
  }
  //************************************** Render end*****************************//
};


export default Interest;
