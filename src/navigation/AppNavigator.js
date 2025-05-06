import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from '../screens/LogoScreen';
import SplashScreen from '../screens/SplashScreen';
import PlanScreen from '../screens/PlanScreen';
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
import GSBPathyServicesScreen from '../screens/GSBPathyServicesScreen';
import SupplementScreen from '../screens/SupplementScreen';
import MeditationScreen from '../screens/MeditationScree';
import EducationScreen from '../screens/EducationScreen';
import FitnessScreen from '../screens/FitnessScreen';
import DietPlanScreen from '../screens/DietPlanScreen';
import SuccessStoriesScreen from '../screens/SuccessScreen';
import AppEntry from '../screens/AppEntry';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CheckoutScreen from '../screens/CheckOutScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppEntry">
      <Stack.Screen name="AppEntry" component={AppEntry} options={{ headerShown: false }} />
  <Stack.Screen name="Logo" component={LogoScreen} options={{ headerShown: false }} />
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
  <Stack.Screen name="Plan" component={PlanScreen} options={{ headerShown: false }} />
  <Stack.Screen name="GSBPathy" component={GSBPathyServicesScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Supplement" component={SupplementScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Education" component={EducationScreen} options={{ headerShown: false }} />
  <Stack.Screen name="DietPlan" component={DietPlanScreen} options={{ headerShown: false }} />
  <Stack.Screen name="SucessStories" component={SuccessStoriesScreen} options={{ headerShown: false }} />
  <Stack.Screen name="MeditationScreen" component={MeditationScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Fitness" component={FitnessScreen} options={{ headerShown: false }} />
  <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ headerShown: false }} />
 
  <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
 

</Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
