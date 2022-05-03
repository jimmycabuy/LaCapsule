import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function HomeScreen(props) {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#9b59b6" }} >
      <Button title="Go Page A"
      onPress={() => props.navigation.navigate('PageA')} />
    </View>
  )
}