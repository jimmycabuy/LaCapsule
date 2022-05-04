import { View, ScrollView } from 'react-native'
import React from 'react'
import { Input, Button, ListItem } from 'react-native-elements'

export default function ChatScreen() {
  return (
    <View style={{ flex:1, paddingTop:50, backgroundColor:"#FFF" }}>
      <ScrollView style={{ flex:1 }}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Valoche</ListItem.Title>
          <ListItem.Subtitle>Tu as aussi soixante-dix-sept euros ?</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>JS</ListItem.Title>
          <ListItem.Subtitle>Ok les gars, go billard maintenant !</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Kiki</ListItem.Title>
          <ListItem.Subtitle>Chaud Basic Fit ?</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Floflo</ListItem.Title>
          <ListItem.Subtitle>C'est vraiment de la merde La Capsule putain!</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>    
      </ScrollView>
 
      <Input
      inputStyle={{
        textAlign:'center',
      }}
      placeholder="Your message"
      />
    
      <Button
        title="Envoyer"
        icon={{
          name: 'mail-outline',
          type: 'ionicon',
          size: 20,
          color: 'white',
        }}
        iconLeft
        titleStyle={{ fontWeight: '500' }}
        buttonStyle={{
          backgroundColor: '#E3BEC6',
          borderColor: 'transparent',
          borderWidth: 0,
          height: 60,
        }}
        />

    </View>
  )
}