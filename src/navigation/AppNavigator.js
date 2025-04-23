import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import CarePlanScreen from '../screens/CarePlanScreen';
import JourneyScreen from '../screens/JourneyScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
  <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
  <Stack.Screen name="CarePlan" component={CarePlanScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Journey" component={JourneyScreen} options={{ headerShown: false }} />
</Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
