import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import PageAScreen from './components/PageAScreen';
import PageBScreen from './components/PageBScreen';
import { Ionicons } from '@expo/vector-icons';
import PageStack from './components/PageStack'

const Stack = createStackNavigator();
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
          } else if (route.name === 'PageStack') {
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
      <Tab.Screen name="PageStack" component={PageStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}