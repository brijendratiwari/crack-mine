import React ,{Component} from 'react';
import AppScreen from './layouts/AppScreen/AppScreen.js';
import config from './config/config.js';

export default class RNApp extends Component {
    constructor(props){
      super(props);
      
    }

    render(){
      return <AppScreen />;
    }
}
