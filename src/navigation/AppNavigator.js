import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from '../views/LoginView';
import StudentHomeView from '../views/StudentHomeView';
import WelcomeView from '../views/WelcomeView';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="StudentHomePage" component={StudentHomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;