import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import { connect } from 'react-redux';
 
function HomeScreen(props) {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"#FFFC00" }}>
            <Image source={require('../assets/snapchat.png')} style={{ width:100, height:100, marginBottom:20, marginTop:0}}/>
            <Text style={{fontSize: 30, textAlign:'center', paddingBottom: 30, color:"#000" }}>Welcome on Snapchat</Text>
          <Input
          inputContainerStyle={{borderBottomWidth:0}}
          placeholderTextColor = '#e92754'
          inputStyle={{
            textAlign:'center',
            borderRadius: 30,
            color:'#e92754',
            borderWidth:2,
            borderColor: "#e92754"
          }}
          placeholder="username"
          containerStyle={{
            width: 225,
            marginBottom:10,
            borderRadius:30,
          }}
          onChangeText={(value) => props.addPseudo(value)}
          />

          <Button
            title="Gallery"
            buttonStyle={{
              backgroundColor: '#9b55a0',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
            }}
            onPress={() => {props.navigation.navigate('PageTab')}}
            />
        </View>
      )
} 

function mapDispatchToProps(dispatch){
  return {
    addPseudo: function(pseudo){
      dispatch ({type: "addPseudo", pseudo: pseudo})
    }
  }
}

export default connect(null, mapDispatchToProps)
(HomeScreen);