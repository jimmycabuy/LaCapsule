import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import React, { useState } from 'react';
import { connect, Connect } from 'react-redux';

function HomeScreen(props) {
  const [pseudo, setPseudo] = useState('');
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
      onChangeText={(value) => setPseudo(value)}
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
        onPress={() => {props.submitName(pseudo) ; props.navigation.navigate('PageTab')}}
        />
    </View>
  )
}

function mapDispatchToProps(dispatch){
  return{
    submitName: function (pseudo) {
      dispatch ({type: "addName", pseudo: pseudo})
    }
  }
}
export default connect(null, mapDispatchToProps)
(HomeScreen);