import { View, Button, Text } from 'react-native'
import React from 'react'

export default function PageAScreen(props) {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#3498db" }} >
        <Text> You are on page A </Text>
      <Button title="Go Page B"
      onPress={() => props.navigation.navigate('PageB')} />
    </View>
  )
}