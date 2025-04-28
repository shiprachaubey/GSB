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
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import OTPScreen from '../screens/OTPScreen';
import MyStoriesScreen from '../screens/MyStoryScreen';
import AddStoryScreen from '../screens/AddStoryScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrderScreen';
import ConsultancyScreen from '../screens/ConsultancyScreen';
import NotificationsList from '../screens/NotidicationScreen';
import MessageScreen from '../screens/MessageScreen';
import DailyUpdatesScreen from '../screens/DailyUpdateScreen';
import NewDailyUpdateScreen from '../screens/NewDailyUpdateScreen';

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
  <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ headerShown: false }} />
  <Stack.Screen name="MyStory" component={MyStoriesScreen} options={{ headerShown: false }} />
  <Stack.Screen name="AddStory" component={AddStoryScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Consultancy" component={ConsultancyScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Notification" component={NotificationsList} options={{ headerShown: false }} />
  <Stack.Screen name="Message" component={MessageScreen} options={{ headerShown: false }} />
  <Stack.Screen name="DailyUpdates" component={DailyUpdatesScreen} options={{ headerShown: false }} />
  <Stack.Screen name="NewDailyUpdate" component={NewDailyUpdateScreen} options={{ headerShown: false }} />


</Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
