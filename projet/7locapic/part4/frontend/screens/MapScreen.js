import React, {useEffect, useState} from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Button, Input, Overlay } from 'react-native-elements';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MapScreen(props) {
  const [position, setPosition] = useState('');
  const [addPOI, setAddPOI] = useState(false);
  const [visible, setVisible] = useState(false);
  const [titlePOI, setTitlePOI] = useState('');
  const [descPOI, setDescPOI] = useState('');

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({distanceInterval: 1}, (location) => { setPosition(location.coords); });
      }        
    }
    askPermissions();

    AsyncStorage.getItem("poiStorage",
      function(error, poiFromStorage) {
        if(poiFromStorage){
          var listPOI = JSON.parse(poiFromStorage);
          console.log(listPOI);
          listPOI.forEach(poi => {
            props.submitPOI(poi)
          })
        }
      })
   }, []);

   async function selectPOI (e) {
    if(addPOI){
      setAddPOI(false);
      const lat = e.nativeEvent.coordinate.latitude;
      const long = e.nativeEvent.coordinate.longitude;
      props.submitPOI({latitude: lat, longitude: long, title: titlePOI, description: descPOI})
      let listPOI = [];
      await AsyncStorage.getItem("poiStorage",
      function(error, poiFromStorage){
        if(poiFromStorage){
          listPOI = JSON.parse(poiFromStorage);
        }
      })
      await AsyncStorage.removeItem("poiStorage"); 
      var newPOI = {title: titlePOI , description: descPOI, longitude: long , latitude: lat }

      listPOI.push(newPOI)
      await AsyncStorage.setItem("poiStorage", JSON.stringify(listPOI))
    }
   }

  var markerPOI = props.list.map((POI, i)=>{
    return <Marker key={i} pinColor="#764AF1" coordinate={{latitude: POI.latitude, longitude: POI.longitude}} title={titlePOI}
    description={descPOI} draggable/>
  });
    
  return (    
    <View style={{ flex:1, backgroundColor:"#FFF" }}>
      <MapView style={{ flex:1 }}
      onPress={(e) => {selectPOI(e)}}
      >
        <Marker pinColor="red" coordinate={{latitude: position.latitude, longitude: position.longitude}}
        title="Hello"
        description="I am here"
        >
        <Image source={require('../assets/localisation1.png')} style={{width:20, height:20}}/>
        </Marker>
        {markerPOI}
      </MapView>
      <Button
      title="Add Point of interest"
      icon={{
        name: 'location-outline',
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
      onPress={()=> { toggleOverlay(), setAddPOI(!addPOI)}}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}
      overlayStyle={{
        width: 350,
        borderRadius: 15,
        height: 225,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
      <Input
      placeholder="Title"
      onChangeText={(value) => setTitlePOI(value)}
      />
      <Input
      placeholder="Description"
      onChangeText={(value) => setDescPOI(value)}
      />
      <Button
      title="Add"
      titleStyle={{ fontWeight: '500' }}
      buttonStyle={{
        backgroundColor: '#E3BEC6',
        borderColor: 'transparent',
        borderWidth: 0,
        height: 60,
        width: 315,
        borderRadius: 20,
      }}
      onPress={() => {toggleOverlay() }  }
      />
      </Overlay>
  </View>
  )
}

function mapStateToProps(state){
  return{
      list: state.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitPOI: function(list){
      dispatch ({type: "addPOI", list: list})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)
(MapScreen);