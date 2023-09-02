// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import BookingScreen from './src/screens/BookingScreen';
import TransScreen from './src/screens/TransScreen';
import ContactScreen from './src/screens/ContactScreen';
import BasketScreen from './src/screens/BasketScreen';
import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faBars,
  faCheckSquare,
  faClose,
  faShoppingBasket,
  faAngleLeft,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faClose,
  faCheckSquare,
  faShoppingBasket,
  faAngleLeft,
  faTrash,
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trans"
          component={TransScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
