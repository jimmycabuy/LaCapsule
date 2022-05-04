import React, {useEffect, useState} from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Button, Input, Overlay } from 'react-native-elements';
import { View } from 'react-native';

export default function MapScreen() {
  const [position, setPosition] = useState('');
  const [addPOI, setAddPOI] = useState(false);
  const [listPOI, setListPOI] = useState([]);

  // const [visible, setVisible] = useState(false);

  // const toggleOverlay = () => {
  //   setVisible(!visible);
  // }

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({distanceInterval: 2}, (location) => { setPosition(location.coords); });
      }
    }
    askPermissions();
   }, []);

   var selectPOI = (e) => {
    setListPOI([...listPOI, { latitude: e.nativeEvent.coordinate.latitude, longitude:e.nativeEvent.coordinate.longitude } ] );
  }

  var markerPOI = listPOI.map((POI, i)=>{
    return <Marker key={i} pinColor="blue" coordinate={{latitude: POI.latitude, longitude: POI.longitude}}/>
  });


  return (    
    <View style={{ flex:1, backgroundColor:"#FFF" }}>
      <MapView style={{ flex:1 }}
      onPress={(e) => {selectPOI(e)}}
      >
        <Marker pinColor="red" coordinate={{latitude: position.latitude, longitude: position.longitude}}
        title="Hello"
        description="I am here"
        />
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
      onPress={()=>setAddPOI(true)}
      // onPress={toggleOverlay}
      />
      {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <Input
      inputStyle={{
        textAlign:'center',
        width:200,
      }}
      placeholder="Your message"
      />
      </Overlay> */}

  </View>
  )
}