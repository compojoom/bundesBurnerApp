import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './Home/HomeStack';
import {BusinessesStack} from './Businesses/BusinessesStack';

const Tab = createBottomTabNavigator();

export function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Businesses" component={BusinessesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
