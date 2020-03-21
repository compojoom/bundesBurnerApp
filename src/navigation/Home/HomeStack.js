import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Home';
import {QrCodeScreen} from './QrCode';
import {MyQrCodeScreen} from './MyQrCode';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="home"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <RootStack.Screen name="scanQR" component={QrCodeScreen} />
      <RootStack.Screen
        name="myQrCode"
        options={{title: 'Mein QrCode'}}
        component={MyQrCodeScreen}
      />
    </RootStack.Navigator>
  );
}
