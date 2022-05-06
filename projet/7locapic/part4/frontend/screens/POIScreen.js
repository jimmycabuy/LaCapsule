import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import { Button, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function POIScreen(props) {

    async function removePOI(pin) {
    props.deletePOI(pin)
      let listPOI = [];
      await AsyncStorage.getItem("poiStorage",
      function(error, poiFromStorage){
        if(poiFromStorage){
          listPOI = JSON.parse(poiFromStorage);
        }
      })
      await AsyncStorage.removeItem("poiStorage");
      listPOI = listPOI.filter(poi => poi.title !== pin.title && poi.description !== pin.description)
      await AsyncStorage.setItem("poiStorage", JSON.stringify(listPOI))
    }

    if(props.list.length === 0){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize: 17, color:'red' }}>
                You do not have any registered points of interest.
                </Text>
            </View>
        )
    } else {
        return (
              <ScrollView style={{ flex:1, paddingTop:50, backgroundColor:"#FFF" }}>
                  {props.list.map((pin, i) => (
                     
                    <ListItem bottomDivider>
                        <ListItem.Content>
                        <ListItem.Title>{pin.title}</ListItem.Title>
                        <ListItem.Subtitle>{pin.description}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Button
                            icon={{
                                name: 'close',
                                type: 'ionicon',
                                size: 20,
                                color: '#000',
                            }}                                            
                            buttonStyle={{
                                backgroundColor: '#fff',
                                borderColor: 'transparent',
                                borderWidth: 0,
                                height: 40,
                                width: 50,
                            }}
                            onPress={() => removePOI(pin)}
                            />
                    </ListItem>
                  ))}
              </ScrollView>
          )
    }
}

function mapStateToProps(state){
    return{
        list: state.list
    }
}

function mapDispatchToProps(dispatch){
    return {
      deletePOI: function(list){
        dispatch ({type: "deletePOI", list: list})
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)
(POIScreen);