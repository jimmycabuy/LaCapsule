import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Input, Button, ListItem } from 'react-native-elements'
import socketIOClient from "socket.io-client";
import React, {useEffect, useState} from 'react'

var socket = socketIOClient("http://172.20.10.5:3000/");

export default function ChatScreen() {

  const [currentMessage, setCurrentMessage] = useState('');
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => {
    socket.on('sendMessageToAll', (newMessage) => {
      setListMessage([...listMessage, newMessage]);
      });
    }, [listMessage]);

  return (
    <View style={{ flex:1, paddingTop:50, backgroundColor:"#FFF" }}>
      <ScrollView style={{ flex:1 }}>
      {listMessage.map((messageData) => (
        <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Jim</ListItem.Title>
          <ListItem.Subtitle>{messageData.message}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      ) )}
      </ScrollView>
 
      <KeyboardAvoidingView behavior='padding' enabled>
        <View>
      <Input
      placeholder="Your message"
      onChangeText={(value) => setCurrentMessage(value)}
      value={currentMessage}
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
        onPress={() => {socket.emit('sendMessage', {message : currentMessage}), setCurrentMessage('')} }

        // onPress={() => console.log(currentMessage) }
        />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}