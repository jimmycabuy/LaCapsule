import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Input, Button, ListItem } from 'react-native-elements'
import socketIOClient from "socket.io-client";
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';

var socket = socketIOClient("http://192.168.1.6:3000");

function ChatScreen(props) {

  const [currentMessage, setCurrentMessage] = useState('');
  const [listMessage, setListMessage] = useState([]);
  
  useEffect(() => {
    socket.on('sendMessageToAll', (newMessageData) => {
      setListMessage([...listMessage, newMessageData]);
    });
  }, [listMessage]);
    
  var allMessage = listMessage.map((messageData) => {
    var msg = messageData.message.replace(/:\(/g, "\u2639");
    msg = msg.replace(/:\)/g, "\u263A");
    msg = msg.replace(/:p/g, "\uD83D\uDE1B");
    var msg = msg.replace(/[a-z]*fuck[a-z]*/gi, "****");

    return (
    <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{messageData.pseudo}</ListItem.Title>
      <ListItem.Subtitle>{msg}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
    )
    })

  return (
    <View style={{ flex:1, paddingTop:50, backgroundColor:"#FFF" }}>
      <ScrollView style={{ flex:1 }}>
        {allMessage}
      </ScrollView>

      <KeyboardAvoidingView behavior='padding' enabled>
        <View>
      <Input
      placeholder="Your message"
      onChangeText={(value) => setCurrentMessage(value)}
      value={currentMessage}
      />
      <Button
        title="Send"
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
        onPress={() => {socket.emit('sendMessage', {message : currentMessage, pseudo: props.pseudo}), setCurrentMessage('')} }
        />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

function mapStateToProps(state){
  return{
      pseudo: state.pseudo
  }
}

export default connect(mapStateToProps, null)
(ChatScreen);