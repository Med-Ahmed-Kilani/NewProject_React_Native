import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  props,
  Alert,

} from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Login from './Login';


class App extends Component {
  constructor ({props}) {{
    super(props)
  }}
  render(){
    return(
      <Login/>
    )
  }
};

export default App;