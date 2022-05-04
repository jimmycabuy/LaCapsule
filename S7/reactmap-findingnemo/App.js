import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {

  const [position, setPosition] = useState('bonjour');
  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({distanceInterval: 10}, (location) => { setPosition(location.coords); });
      }
    }
    askPermissions();
   }, []);

  return (
  <MapView style={{flex: 1}}>
    <Marker coordinate={{latitude: position.latitude, longitude: position.longitude}}
    title="ma localisation"
    />
  </MapView>
  );
}