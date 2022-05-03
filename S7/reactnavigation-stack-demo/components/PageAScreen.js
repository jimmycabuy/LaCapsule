import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function PageAScreen(props) {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#3498db" }} >
      <Button title="Go home"
      onPress={() => props.navigation.navigate('Home')} />
    </View>
  )
}