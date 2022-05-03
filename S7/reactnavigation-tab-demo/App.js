import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import PageAScreen from './components/PageAScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home'     
          } else if (route.name === 'Like') {
            iconName = 'ios-heart'
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
       })}
       
       tabBarOptions={{
        activeTintColor: '#0984e3',
        inactiveTintColor: '#dfe6e9',
       }}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Like" component={PageAScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}