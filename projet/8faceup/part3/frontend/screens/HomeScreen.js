import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import { connect } from 'react-redux';
 
function HomeScreen(props) {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"#ff0a29" }}>
            <Image source={require('../assets/icon.png')} style={{ width:100, height:100, marginBottom:20, marginTop:0}}/>
            <Text style={{fontSize: 30, textAlign:'center', paddingBottom: 30, color:"#fff", fontFamily:'Avenir-Medium' }}>Welcome on Faceapp</Text>
          <Input
          inputContainerStyle={{borderBottomWidth:0}}
          placeholderTextColor = '#fff'
          inputStyle={{
            textAlign:'center',
            borderRadius: 30,
            color:'#fff',
            borderWidth:2,
            borderColor: "#fff"
          }}
          placeholder="put username here"
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
              backgroundColor: '#fff',
              borderRadius: 30,
              color: "black",
            }}
            containerStyle={{
              width: 200,
            }}
            titleStyle={{
              color: '#ff0a29',
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