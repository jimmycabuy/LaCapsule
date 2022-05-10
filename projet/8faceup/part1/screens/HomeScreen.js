import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
 
export default function HomeScreen(props) {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"#FFFC00" }}>
            <Image source={require('../assets/snapchat.png')} style={{ width:100, height:100, marginBottom:20, marginTop:0}}/>
            <Text style={{fontSize: 30, textAlign:'center', paddingBottom: 30, color:"fff" }}>Welcome on Snapchat</Text>
          <Input
          inputContainerStyle={{borderBottomWidth:0}}
          placeholderTextColor = '#e92754'
          inputStyle={{
            textAlign:'center',
            // backgroundColor: '#e92754',
            borderRadius: 30,
            color:'#e92754',
            borderWidth:2,
            borderColor: "#e92754"
          }}
          placeholder="username"
        //   leftIcon={{ type: 'Ionicons', name: 'person-outline', color:"black" }}
          containerStyle={{
            width: 225,
            marginBottom:10,
            borderRadius:30,
          }}
          />

          <Button
            title="Gallery"
            // icon={{
            //   name: 'arrow-forward-circle-outline',
            //   type: 'ionicon',
            //   size: 25,
            //   color: 'white',
            // }}
            // iconRight
            // iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{ fontWeight: '600' }}
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