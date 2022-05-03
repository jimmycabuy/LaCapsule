import { View, Button, Text } from 'react-native'
import React from 'react'

export default function PageBScreen(props) {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#f1c40f" }} >
        <Text> You are on page B </Text>
      <Button title="Go Page A"
      onPress={() => props.navigation.navigate('PageA')} />
    </View>
  )
}