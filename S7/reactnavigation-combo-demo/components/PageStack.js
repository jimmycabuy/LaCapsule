import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageAScreen from './PageAScreen';
import PageBScreen from './PageBScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="PageA" component={PageAScreen} />
            <Stack.Screen name="PageB" component={PageBScreen} />
        </Stack.Navigator>
  );
}