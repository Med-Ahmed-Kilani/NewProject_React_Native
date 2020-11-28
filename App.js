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


class App extends Component {
  constructor ({props}) {{
    super(props)
    this.state = {
      username: "",
      password: '',
    }
  }}

  clearInputs = () => {
    this.setState({username:'', password:''})
  }

  validation = (username,password) => {
    if ((username==='ahmed')&&(password==='000000')) {
      Alert.alert(
        'success',
        `Welcome ${this.state.username}`,[
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => this.clearInputs() }
        ],
        { cancelable: false });
    }else {
      console.log('Wrong username or password');
    }
  }


  render(){
    return(
      <View style={styles.card}>
        <View style={styles.card1}>
          <Image style={styles.img} source={{uri:'https://image.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg'}}/>
        </View>
        <View style={styles.card2}>
          <TextInput value={this.state.username} onChangeText={text => this.setState({username:text})} placeholder="username" style={styles.textInut}/>
          <TextInput value={this.state.password} secureTextEntry={true} onChangeText={text => this.setState({password:text})} placeholder="password" style={styles.textInut}/>
        </View>
        <View style={styles.card3}>
          <TouchableOpacity onPress={()=>{this.validation(this.state.username,this.state.password)}}>
            <Text style={styles.text}>
              login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card:{
    flex:1,
  },
  card1:{
    flex:1
  },
  card2:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  card3:{
    flex:1,
    alignItems:'center',
  },
  img:{
    flex:1
  },
  textInut:{
    width:"80%",
    height:50,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderBottomColor: "blue",
    marginBottom:10
  },
  text:{
    fontSize:20,
    color:"blue"
  }
});

export default App;