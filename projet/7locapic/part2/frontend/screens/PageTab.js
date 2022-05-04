import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import ChatScreen from './ChatScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function PageTab() {
  return (
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Map') {
          iconName = 'ios-navigate'     
        } else if (route.name === 'Chat') {
          iconName = 'ios-chatbubble'
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
     })}
     
     tabBarOptions={{
      activeTintColor: '#FFF',
      inactiveTintColor: '#AAA',
      style:{
        backgroundColor:"#6867AC"
      }
     }}
     >
       <Tab.Screen name="Map" component={MapScreen} />
       <Tab.Screen name="Chat" component={ChatScreen} />
     </Tab.Navigator>
  )
}