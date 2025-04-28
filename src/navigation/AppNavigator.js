import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';

import JourneyScreen from '../screens/JourneyScreen';
import ControlScreen from '../screens/ControlScreen';
import EatScreen from '../screens/EatScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AgeScreen from '../screens/OldScreen';
import WeightScreen from '../screens/WeightScreen';
import HeightScreen from '../screens/HeightScreeen'
import HomeScreen from '../screens/HomeScreen';

import OTPScreen from '../screens/OTPScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
  <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

  <Stack.Screen name="Journey" component={JourneyScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Control" component={ControlScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Eat" component={EatScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
  <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Age" component={AgeScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Weight" component={WeightScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Height" component={HeightScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />


</Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
