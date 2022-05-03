import HomeScreen from './screens/HomeScreen';
import PageTab from './screens/PageTab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';

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