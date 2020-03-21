import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home';
import {QrCodeScreen} from './QrCode';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="home" component={HomeScreen} />
      <RootStack.Screen name="qrCode" component={QrCodeScreen} />
    </RootStack.Navigator>
  );
}
