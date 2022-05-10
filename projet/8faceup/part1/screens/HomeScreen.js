import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

export default function HomeScreen(props) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>HomeScreen</Text>
      <Button title="Go to Gallerry Screen" onPress={() => props.navigation.navigate('PageTab')} />
    </View>
  )
} 