import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import React, { useState } from 'react';

export default function HomeScreen(props) {
  const [text, setText] = useState('');
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"#EFDAD7" }}>
      <Input
      inputStyle={{
        textAlign:'center',
        paddingRight: 20,
      }}
      placeholder="jimmycabuy"
      leftIcon={{ type: 'Ionicons', name: 'person-outline', color:"gray" }}
      containerStyle={{
        width: 300,
      }}
      onChangeText={(value) => setText(value)} value={text}
      />
      <Button
        title="Go To Map"
        icon={{
          name: 'arrow-forward-circle-outline',
          type: 'ionicon',
          size: 25,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '600' }}
        buttonStyle={{
          backgroundColor: '#E3BEC6',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => props.navigation.navigate('PageTab')}
        />
    </View>
  )
}