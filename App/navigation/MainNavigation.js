import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EventScreen from '../event';

const MainDrawer = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register Event">
        <Stack.Screen name="Register Event" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
