import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, FlatList, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationsList from '../components/NotificationsList';
import MessagesScreen from '../components/MessageScreen';
import ProfileScreen from '../components/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated } from 'react-native'; 

const { width } = Dimensions.get('window');

const carouselItems = [
  { title: 'Diet Plan' },
  { title: 'IBS Treatment' },
];



const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const flatListRef = useRef();

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        flatListRef.current?.scrollToIndex({ index: (activeIndex + 1) % carouselItems.length, animated: true });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlay]);

  const handleScrollBeginDrag = () => {
    setIsAutoPlay(false);
  };

  const handleScrollEndDrag = () => {
    setIsAutoPlay(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <View style={styles.carouselImagePlaceholder}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    </View>
  );


 

  return (
    <ScrollView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={carouselItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScrollBeginDrag={handleScrollBeginDrag}
        onScrollEndDrag={handleScrollEndDrag}
      />

      <View style={styles.yellowBox}>
        <Text style={styles.sectionTitle}>Inner Peace</Text>
        <Text style={styles.sectionSubtitle}>Discover balance and tranquility</Text>
      </View>
      <View style={styles.cardRow}>
        {['Meditation', 'Education', 'Diet Plans', 'Success Stories'].map((title, idx) => (
          <View key={idx} style={styles.card}>
            <Ionicons name="ios-star-outline" size={30} color="#F7B500" />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDesc}>Short description text.</Text>
          </View>
        ))}
      </View>

      <View style={styles.yellowBox}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <Text style={styles.sectionSubtitle}>Find out services which works best for you</Text>
      </View>
      <View style={styles.cardRow}>
        {['GSB Pathy services', 'Consultancy', 'Supplements', 'Fitness'].map((title, idx) => (
          <View key={idx} style={styles.card}>
            <MaterialCommunityIcons name="briefcase-outline" size={30} color="#F7B500" />
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// const NotificationsScreen = () => (
//   <View style={styles.screen}><Text>Notifications Screen</Text></View>
// );
const NotificationsScreen = () => <NotificationsList />;




// const ProfileScreen = () => (
//   <View style={styles.screen}><Text>Profile Screen</Text></View>
// );

const PlansScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.planHeader}>
      <Text style={styles.sectionTitle}>Choose Your Plan</Text>
      <Text style={styles.sectionSubtitle}>Select the plan that best fits your health journey needs</Text>
    </View>

    <View style={styles.planBoxPrimary}>
      <View style={styles.planTopYellow}>
        <Text style={styles.planBoxTitle}>Premium Plan</Text>
        <Text style={styles.planBoxPrice}>$29.99/month</Text>
      </View>
      <View style={styles.planFeaturesBox}>
        {["Unlimited appointment with a Clinical nutritionist",
          "Customized Non-Drug Treatment Plan",
          "Regular Consultations & Progress Tracking",
          "Daily Follow-Up Calls to Monitor Your Progress",
          "Unlimited Counseling Sessions with a Health Coach",
          "Unlimited Diet Modifications",
          "Holistic Support for Long-Lasting Results",
          "Comprehensive Lifestyle & Emotional Well-Being Guidance",
          "Stress management",
          "Behaviour counselling",
          "Dietary supplements suggestion"].map((text, idx) => (
            <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
          ))}
        <TouchableOpacity style={styles.selectButton}><Text style={styles.selectButtonText}>Select Premium</Text></TouchableOpacity>
      </View>
    </View>

    <View style={styles.planBoxSecondary}>
      <View style={styles.planTopBorderYellow}>
        <Text style={styles.planBoxTitle}>Freemium Plan</Text>
        <Text style={styles.planBoxPrice}>$9.99/month</Text>
      </View>
      <View style={styles.planFeaturesBox}>
        {['One time treatment plan as per problem',
          'One time appointment with health coach',
          'Behaviour management',
          'Dietary supplements suggestion'].map((text, idx) => (
          <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
        ))}
        <TouchableOpacity style={styles.selectButtonYellow}><Text style={styles.selectButtonTextBlack}>Select Freemium</Text></TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={styles.subscribeButton}><Text style={styles.subscribeButtonText}>Subscribe to Freemium Plan</Text></TouchableOpacity>
    <Text style={styles.bottomNote}>You can cancel your subscription anytime</Text>
  </ScrollView>
);

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//           <SafeAreaView style={{flex:1}}> 
//                 <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
//       <Tab.Navigator
//        screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size, focused }) => {
//           if (route.name === 'Plans') {
//             return (
//               <View
//                 style={{
//                   width: 65,
//                   height: 65,
//                   borderRadius: 35,
//                   backgroundColor: '#F7B500',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: Platform.OS === 'ios' ? 30 : 20, // Lifting star button
//                   shadowColor: '#000',
//                   shadowOffset: { width: 0, height: 2 },
//                   shadowOpacity: 0.25,
//                   shadowRadius: 3.84,
//                   elevation: 5, // For Android shadow
//                 }}
//               >
//                 <Ionicons name="star" size={32} color="#fff" />
//               </View>
//             );
//           } else {
//             let iconName;
//             if (route.name === 'Home') iconName = 'home-outline';
//             else if (route.name === 'Notifications') iconName = 'notifications-outline';
//             else if (route.name === 'Messages') iconName = 'mail-outline';
//             else if (route.name === 'Profile') iconName = 'person-outline';
//             return <Ionicons name={iconName} size={24} color={color} />;
//           }
//         },
//         tabBarActiveTintColor: '#F7B500',
//         tabBarInactiveTintColor: 'gray',
//         tabBarShowLabel: true,
//         tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
//         headerShown: false,
//         tabBarStyle: {
//           height: 65,
//           backgroundColor: '#fff',
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           position: 'absolute',
//           bottom: 0,
//         },
//       })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Notifications" component={NotificationsScreen} />
//         <Tab.Screen name="Plans" component={PlansScreen} />
//         <Tab.Screen name="Messages" component={MessagesScreen} />

//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
// </SafeAreaView>
//   );
// };

const Tab = createBottomTabNavigator();

const App = () => {
  // Animation value
  const bounceValue = useRef(new Animated.Value(1)).current;

  // Bounce animation function
  const bounce = () => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(bounceValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size, focused }) => {
      if (route.name === 'Plans') {
        return (
          <Animated.View
            style={{
              transform: [{ scale: focused ? 1.2 : 1 }],
              width: 65,
              height: 65,
              borderRadius: 35,
              backgroundColor: '#F7B500',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: Platform.OS === 'ios' ? 30 : 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Ionicons name="star" size={32} color="#fff" />
          </Animated.View>
        );
      } else {
        let iconName;
        if (route.name === 'Home') iconName = 'home-outline';
        else if (route.name === 'Notifications') iconName = 'notifications-outline';
        else if (route.name === 'Messages') iconName = 'mail-outline';
        else if (route.name === 'Profile') iconName = 'person-outline';
        return <Ionicons name={iconName} size={24} color={color} />;
      }
    },
    tabBarButton: (props) => {
      if (route.name === 'Plans') {
        return (
          <TouchableOpacity
            {...props}
            style={{
              top: -20, // move star button up
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        );
      }
      return <TouchableOpacity {...props} />;
    },
    tabBarActiveTintColor: '#F7B500',
    tabBarInactiveTintColor: 'gray',
    tabBarLabel: route.name === 'Plans' ? '' : route.name, // 👈 REMOVE label for Plans tab
    tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
    headerShown: false,
    tabBarStyle: {
      height: 65,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'absolute',
      bottom: 0,
    },
  })}
>

          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Plans" component={PlansScreen} />
          <Tab.Screen name="Messages" component={MessagesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
      </SafeAreaView>

  );
};
export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  carouselItem: { width, alignItems: 'center' },
  carouselImagePlaceholder: { width: width * 0.9, height: 200, borderRadius: 10, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  carouselTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  yellowBox: { marginTop: 20, marginHorizontal: 20, padding: 16, borderWidth: 2, borderColor: '#F7B500', borderRadius: 12, alignItems: 'center' },
  sectionTitle: { fontSize: 24, fontWeight: '700', color: '#000', textAlign: 'center' },
  sectionSubtitle: { fontSize: 14, color: '#555', textAlign: 'center', marginTop: 8 },
  cardRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 10 },
  card: { width: '47%', backgroundColor: '#fff', padding: 16, marginVertical: 8, borderRadius: 10, alignItems: 'center', elevation: 3 },
  cardTitle: { fontSize: 16, fontWeight: '600', marginTop: 10, textAlign: 'center', color: '#000' },
  cardDesc: { fontSize: 12, textAlign: 'center', color: '#777', marginTop: 4 },
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  planHeader: { marginVertical: 20, alignItems: 'center', paddingHorizontal: 20 },
  planBoxPrimary: { backgroundColor: '#fff', margin: 16, borderRadius: 10, elevation: 4 },
  planTopYellow: { backgroundColor: '#F7B500', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, alignItems: 'center' },
  planBoxSecondary: { backgroundColor: '#fff', margin: 16, borderRadius: 10, elevation: 4, borderWidth: 2, borderColor: '#F7B500' },
  planTopBorderYellow: { padding: 16, alignItems: 'center' },
  planBoxTitle: { fontSize: 20, fontWeight: '700', color: '#000' },
  planBoxPrice: { fontSize: 16, fontWeight: '500', color: '#000', marginTop: 5 },
  planFeaturesBox: { padding: 16 },
  planFeatureText: { fontSize: 14, marginVertical: 4, color: '#333' },
  selectButton: { backgroundColor: '#ccc', marginTop: 12, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  selectButtonText: { fontWeight: '700', fontSize: 16 },
  selectButtonYellow: { backgroundColor: '#F7B500', marginTop: 12, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  selectButtonTextBlack: { fontWeight: '700', fontSize: 16, color: '#000' },
  subscribeButton: { backgroundColor: '#F7B500', margin: 24, paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  subscribeButtonText: { fontWeight: '700', fontSize: 18, color: '#fff' },
  bottomNote: { textAlign: 'center', fontSize: 12, color: '#777', marginBottom: 20 },
});
