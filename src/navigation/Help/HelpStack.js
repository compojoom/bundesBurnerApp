import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HelpScreen} from './HelpScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

export function HelpStack() {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen name="help" component={HelpScreen} />
        </RootStack.Navigator>
    );
}
