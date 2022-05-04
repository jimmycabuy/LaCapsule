import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import ChatScreen from './ChatScreen';
import POIScreen from './POIScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function PageTab() {
  return (
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Map') {
          iconName = 'ios-compass'     
        } else if (route.name === 'Chat') {
          iconName = 'ios-chatbubble-ellipses'
        } else if (route.name === 'Point of interest'){
          iconName = 'ios-flag'
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
     })}
     
     tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#bbb',
      style:{
        backgroundColor:"#fff"
      }
     }}
     >
       <Tab.Screen name="Map" component={MapScreen} />
       <Tab.Screen name="Point of interest" component={POIScreen} />
       <Tab.Screen name="Chat" component={ChatScreen} />
     </Tab.Navigator>
  )
}