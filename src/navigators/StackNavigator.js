import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Ex11 from '../screens/login/Ex11';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {  
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='DrawerNavigator'>
 
            <Stack.Screen name='Exercício 11' component={Ex11}/>

            <Stack.Screen name='DrawerNavigator' component={DrawerNavigator}/>
 
        </Stack.Navigator>
      </NavigationContainer>
    )};

export default StackNavigator;