import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PageTab from './screens/PageTab';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import photo from './reducers/photo'
import pseudo from './reducers/pseudo'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const store = createStore(combineReducers({photo, pseudo}))

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PageTab" component={PageTab} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}