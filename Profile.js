import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  State,
  Alert,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Post',
    color : "blue",
    post_content : "my First Post ",
    post_image :
                  "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-light-blue-512.png"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Post',
    color : "red",
    post_content : "my Second Post ",
    post_image :
                  "https://preview.redd.it/xprpkp063sn51.png?width=440&format=png&auto=webp&s=5d51eb262af4a50e8f935218feb52682540aa525"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Post',
    is_Imposter : true,
    color : "green",
    post_content : "my third Imposter ",
    post_image :
                  "https://preview.redd.it/ph2jho4o1sn51.png?width=440&format=png&auto=webp&s=7e080e5447d69d1425a8b8a20f1115de18aa69fd"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Post',
    color : "grey",
    post_content : "my Last Post ",
    post_image :
                  "https://i.pinimg.com/originals/75/e1/e7/75e1e7c994ab87e33c7453afae63b157.png"
  },
];

export default class App extends React.Component {
  renderItem = ({item}) => {
    return(
    <View style={{justifyContent:'center' , height: 400 , backgroundColor : item.color , padding :50}}>
     <Text style={{color:item.is_Imposter?"red":"white"}}> {item.title + " : " + item.post_content } </Text>
     <Image resizeMode="contain" style={{height:200 , width : "100%"}} source = {{ uri:item.post_image}}/>
    </View>
  )};

  render() {
    return (
      <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
        <View style={{ backgroundColor: 'red', flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1.4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri:
                  'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
              }}
              style={{
                width: 100,
                height: 100,
                top: 20,
                borderRadius: 200,
              }}></Image>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 2,
              justifyContent: 'space-evenly',
            }}>
            <Text>{'Username : Hello World  \n'}</Text>

            <Text> Email : Hello@world.com </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'lightblue', flex: 3 ,justifyContent: 'space-evenly'}}>
          <FlatList 
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}
