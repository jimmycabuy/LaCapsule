import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SnapScreen from './SnapScreen';
import GalleryScreen from './GalleryScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function PageTab() {
  return (
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Snap') {
          iconName = 'ios-camera'     
        } else if (route.name === 'Gallery') {
          iconName = 'ios-image'
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
     })}
     
     tabBarOptions={{
        activeTintColor: '#ff0a29',
        inactiveTintColor: '#bbb',
        style:{
          backgroundColor:"#fff"
      }
     }}
     >
       <Tab.Screen name="Gallery" component={GalleryScreen} />
       <Tab.Screen name="Snap" component={SnapScreen} />
     </Tab.Navigator>
  )
}