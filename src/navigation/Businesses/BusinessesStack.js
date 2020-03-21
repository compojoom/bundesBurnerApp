import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BusinessesScreen} from './BusinessesScreen';
import {BusinessScreen} from './BusinessScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

export function BusinessesStack() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="businesses" component={BusinessesScreen} />
      <RootStack.Screen name="business" component={BusinessScreen} />
    </RootStack.Navigator>
  );
}
