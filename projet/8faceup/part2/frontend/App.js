import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PageTab from './screens/PageTab';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PageTab" component={PageTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}