import HomeScreen from './screens/HomeScreen';
import PageTab from './screens/PageTab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import pseudo from './reducers/pseudo'

const Stack = createStackNavigator();
const store = createStore(combineReducers({pseudo}))

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