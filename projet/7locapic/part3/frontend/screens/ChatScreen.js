import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Input, Button, ListItem } from 'react-native-elements'
import socketIOClient from "socket.io-client";
import React, {useEffect, useState} from 'react'

var socket = socketIOClient("http://10.12.63.75:3000/");

export default function ChatScreen() {

const [currentMessage, setCurrentMessage] = useState('');
const [listMessage, setListMessage] = useState([]);

useEffect(() => {
  socket.on('sendMessageToAll', (newMessage) => {
    setListMessage(newMessage);
  });
}, [listMessage]);

  return (
    <View style={{ flex:1, paddingTop:50, backgroundColor:"#FFF" }}>
      <ScrollView style={{ flex:1 }}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Valoche</ListItem.Title>
          <ListItem.Subtitle>Tu as aussi soixante-dix-sept euros ?</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </ScrollView>
 
      <KeyboardAvoidingView behavior='padding' enabled>
        <View>
      <Input
      placeholder="Your message"
      onChangeText={(value) => setCurrentMessage(value)}
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
        onPress={() => socket.emit('sendMessage', {currentMessage}) }
        />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}