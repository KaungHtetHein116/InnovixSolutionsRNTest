import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigator,
  CartStackNavigator,
  AccountStackNavigator,
} from './StackNavigator';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        initialParams={{icon: 'home'}}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        initialParams={{icon: 'shopping-cart'}}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        initialParams={{icon: 'user'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
