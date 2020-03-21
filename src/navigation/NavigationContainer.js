import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './Home/HomeStack';
import {BusinessesStack} from './Businesses/BusinessesStack';
import {Icon} from '../components/Utils/Icon';
import {HelpStack} from './Help/HelpStack';

const Tab = createBottomTabNavigator();

const tabIconStyle = {
  color: '#EEE',
  fontSize: 18,
};

const TabIcon = ({focused, name}) => {
  return (
    <Icon
      name={name}
      style={[tabIconStyle, focused ? {color: 'blue'} : null]}
    />
  );
};

export function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
              title: "Home",
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} name={'home'} />
            ),
          }}
        />
        <Tab.Screen
          name="Businesses"
          component={BusinessesStack}
          options={{
              title: "Geschäfte",
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} name={'map'} />
            ),
          }}
        />
        <Tab.Screen
          name="Help"
          component={HelpStack}
          options={{
            title: "Hilfe",
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} name={'life-ring'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
