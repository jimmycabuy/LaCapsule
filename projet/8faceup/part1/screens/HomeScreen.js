import { View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
 
export default function HomeScreen(props) {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"#fff" }}>
            <Text style={{fontSize: 30, textAlign:'center', paddingBottom: 50 }}>
                Welcome on Face Up !
            </Text>
          <Input
          inputStyle={{
            textAlign:'center',
            paddingRight: 25,
          }}
          placeholder="username"
          leftIcon={{ type: 'Ionicons', name: 'person-outline', color:"gray" }}
          containerStyle={{
            width: 300,
          }}
          onChangeText={(value) => setPseudo(value)}
          />
          <Button
            title="Gallery"
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
              backgroundColor: '#7791DE',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={() => {props.navigation.navigate('PageTab')}}
            />
        </View>
      )
} 