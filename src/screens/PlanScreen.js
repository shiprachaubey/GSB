
// import React, { useRef, useEffect, useState } from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const { width } = Dimensions.get('window');

// // 
// const HomeScreen = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);
//   const flatListRef = useRef();

//   useEffect(() => {
//     let interval;
//     if (isAutoPlay) {
//       interval = setInterval(() => {
//         setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
//         flatListRef.current?.scrollToIndex({ index: (activeIndex + 1) % carouselItems.length, animated: true });
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [activeIndex, isAutoPlay]);

//   const handleScrollBeginDrag = () => {
//     setIsAutoPlay(false);
//   };

//   const handleScrollEndDrag = () => {
//     setIsAutoPlay(true);
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
//       <Text style={styles.carouselTitle}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={carouselItems}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         onScrollBeginDrag={handleScrollBeginDrag}
//         onScrollEndDrag={handleScrollEndDrag}
//       />

//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Inner Peace</Text>
//         <Text style={styles.sectionSubtitle}>Discover balance and tranquility</Text>
//         <View style={styles.cardRow}>
//           {['Meditation', 'Education', 'Diet Plans', 'Success Stories'].map((title, idx) => (
//             <View key={idx} style={styles.card}>
//               <Ionicons name="ios-star-outline" size={30} color="#F7B500" />
//               <Text style={styles.cardTitle}>{title}</Text>
//               <Text style={styles.cardDesc}>Short description text.</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Our Services</Text>
//         <Text style={styles.sectionSubtitle}>Find out services which works best for you</Text>
//         <View style={styles.cardRow}>
//           {['GSB Pathy services', 'Consultancy', 'Supplements', 'Fitness'].map((title, idx) => (
//             <View key={idx} style={styles.card}>
//               <MaterialCommunityIcons name="briefcase-outline" size={30} color="#F7B500" />
//               <Text style={styles.cardTitle}>{title}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const NotificationsScreen = () => (
//   <View style={styles.screen}><Text>Notifications Screen</Text></View>
// );

// const MessagesScreen = () => (
//   <View style={styles.screen}><Text>Messages Screen</Text></View>
// );

// const ProfileScreen = () => (
//   <View style={styles.screen}><Text>Profile Screen</Text></View>
// );

// const PlansScreen = () => (
//   <ScrollView style={styles.container}>
//     <View style={styles.planHeader}>
//       <Text style={styles.planTitle}>Choose Your Plan</Text>
//       <Text style={styles.planSubtitle}>Select the plan that best fits your health journey needs</Text>
//     </View>

//     <View style={styles.planBoxPrimary}>
//       <View style={styles.planTopYellow}>
//         <Text style={styles.planBoxTitle}>Premium Plan</Text>
//         <Text style={styles.planBoxPrice}>$29.99/month</Text>
//       </View>
//       <View style={styles.planFeaturesBox}>
//         {["Unlimited appointment with a Clinical nutritionist",
//           "Customized Non-Drug Treatment Plan",
//           "Regular Consultations & Progress Tracking",
//           "Daily Follow-Up Calls to Monitor Your Progress",
//           "Unlimited Counseling Sessions with a Health Coach",
//           "Unlimited Diet Modifications",
//           "Holistic Support for Long-Lasting Results",
//           "Comprehensive Lifestyle & Emotional Well-Being Guidance",
//           "Stress management",
//           "Behaviour counselling",
//           "Dietary supplements suggestion"].map((text, idx) => (
//             <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
//           ))}
//         <TouchableOpacity style={styles.selectButton}><Text style={styles.selectButtonText}>Select Premium</Text></TouchableOpacity>
//       </View>
//     </View>

//     <View style={styles.planBoxSecondary}>
//       <View style={styles.planSecondaryTop}>
//         <Text style={styles.planBoxTitle}>Freemium Plan</Text>
//         <Text style={styles.planBoxPrice}>$9.99/month</Text>
//       </View>
//       <View style={styles.planFeaturesBox}>
//         <Text style={styles.planFeatureText}>Essential support including:</Text>
//         <TouchableOpacity style={styles.subscribeButton}><Text style={styles.subscribeButtonText}>Subscribe to Freemium Plan</Text></TouchableOpacity>
//       </View>
//     </View>

//     <Text style={styles.bottomNote}>You can cancel your subscription anytime</Text>
//   </ScrollView>
// );

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') iconName = 'home-outline';
//             else if (route.name === 'Notifications') iconName = 'notifications-outline';
//             else if (route.name === 'Messages') iconName = 'mail-outline';
//             else if (route.name === 'Profile') iconName = 'person-outline';
//             else if (route.name === 'Plans') iconName = 'star-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#F7B500',
//           tabBarInactiveTintColor: 'gray',
//           headerShown: false,
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Notifications" component={NotificationsScreen} />
//         <Tab.Screen name="Plans" component={PlansScreen} />
//         <Tab.Screen name="Messages" component={MessagesScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   carouselItem: { width, alignItems: 'center' },
//   carouselImage: { width: width * 0.9, height: 200, borderRadius: 10, marginTop: 10 },
//   carouselTitle: { marginTop: 10, fontSize: 16, fontWeight: '600', color: '#333' },
//   sectionContainer: { marginTop: 20, paddingHorizontal: 24 },
//   sectionTitle: { fontSize: 24, fontWeight: '700', color: '#000', textAlign: 'center' },
//   sectionSubtitle: { fontSize: 14, color: '#555', textAlign: 'center', marginVertical: 10 },
//   cardRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
//   card: { width: '47%', backgroundColor: '#fff', padding: 16, marginVertical: 8, borderRadius: 10, alignItems: 'center', elevation: 3 },
//   cardTitle: { fontSize: 16, fontWeight: '600', marginTop: 10, textAlign: 'center', color: '#000' },
//   cardDesc: { fontSize: 12, textAlign: 'center', color: '#777', marginTop: 4 },
//   screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//   planHeader: { padding: 24, alignItems: 'center' },
//   planTitle: { fontSize: 24, fontWeight: '700', color: '#000' },
//   planSubtitle: { fontSize: 14, color: '#555', marginTop: 10, textAlign: 'center' },
//   planBoxPrimary: { margin: 16, borderRadius: 12, backgroundColor: '#FFF', elevation: 4 },
//   planTopYellow: { backgroundColor: '#F7B500', padding: 16, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
//   planBoxTitle: { fontSize: 20, fontWeight: '700', textAlign: 'center', color: '#000' },
//   planBoxPrice: { fontSize: 16, fontWeight: '500', textAlign: 'center', color: '#000', marginTop: 6 },
//   planFeaturesBox: { padding: 16 },
//   planFeatureText: { fontSize: 14, marginVertical: 2, color: '#333' },
//   selectButton: { marginTop: 10, backgroundColor: '#ccc', borderRadius: 8, padding: 12, alignItems: 'center' },
//   selectButtonText: { fontWeight: '700', fontSize: 16 },
//   planBoxSecondary: { margin: 16, borderWidth: 2, borderColor: '#F7B500', borderRadius: 12 },
//   planSecondaryTop: { backgroundColor: '#fff', padding: 16, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
//   subscribeButton: { marginTop: 10, backgroundColor: '#F7B500', borderRadius: 8, padding: 12, alignItems: 'center' },
//   subscribeButtonText: { fontWeight: '700', fontSize: 16, color: '#fff' },
//   bottomNote: { textAlign: 'center', color: '#777', fontSize: 12, marginVertical: 16 },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const PlanSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null); // 👈 Track selected plan

  const handleSelect = (planType) => {
    setSelectedPlan(planType);
  };

  return (
    <>
    <ScrollView>
      <View style={styles.planHeader}>
        <Text style={styles.sectionTitle}>Choose Your Plan</Text>
        <Text style={styles.sectionSubtitle}>Select the plan that best fits your health journey needs</Text>
      </View>

      {/* Premium Plan */}
      <View style={[
        styles.planBoxPrimary,
        selectedPlan === 'premium' && { borderColor: '#F7B500', borderWidth: 2 }
      ]}>
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

          <TouchableOpacity
            onPress={() => handleSelect('premium')}
            style={[
              styles.selectButton,
              selectedPlan === 'premium' && { backgroundColor: '#F7B500' }
            ]}
          >
            <Text style={[
              styles.selectButtonText,
              selectedPlan === 'premium' && { color: '#000' }
            ]}>
              Select Premium
            </Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* Freemium Plan */}
      <View style={[
        styles.planBoxSecondary,
        selectedPlan === 'freemium' && { borderColor: '#F7B500', borderWidth: 2 }
      ]}>
        <View style={styles.planTopBorderYellow}>
          <Text style={styles.planBoxTitle}>Freemium Plan</Text>
          <Text style={styles.planBoxPrice}>$9.99/month</Text>
        </View>
        <View style={styles.planFeaturesBox}>
          {[
            "One time plan", "One time appointment",
            "Behavior management", "Supplement suggestion"
          ].map((text, idx) => (
            <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
          ))}

          <TouchableOpacity
            onPress={() => handleSelect('freemium')}
            style={[
              styles.selectButton,
              selectedPlan === 'freemium' && { backgroundColor: '#F7B500' }
            ]}
          >
            <Text style={[
              styles.selectButtonText,
              selectedPlan === 'freemium' && { color: '#000' }
            ]}>
              Select Freemium
            </Text>
          </TouchableOpacity>

        </View>
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
      </TouchableOpacity>
      <Text style={styles.bottomNote}>You can cancel your subscription anytime</Text>
    
      </ScrollView>
    </>
    
  );
};

export default PlanSection;

// Styling
const styles = StyleSheet.create({
  planHeader: { marginVertical: 20, alignItems: 'center', paddingHorizontal: 20 },
  sectionTitle: { fontSize: 24, fontWeight: '700', color: '#000', textAlign: 'center' },
  sectionSubtitle: { fontSize: 14, color: '#555', textAlign: 'center', marginTop: 8 },
  planBoxPrimary: { backgroundColor: '#fff', margin: 16, borderRadius: 10, elevation: 4 },
  planTopYellow: { backgroundColor: '#F7B500', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16, alignItems: 'center' },
  planBoxSecondary: { backgroundColor: '#fff', margin: 16, borderRadius: 10, elevation: 4, borderColor: 'transparent', borderWidth: 2 },
  planTopBorderYellow: { padding: 16, alignItems: 'center' },
  planBoxTitle: { fontSize: 20, fontWeight: '700', color: '#000' },
  planBoxPrice: { fontSize: 16, fontWeight: '500', color: '#000', marginTop: 5 },
  planFeaturesBox: { padding: 16 },
  planFeatureText: { fontSize: 14, marginVertical: 4, color: '#333' },
  selectButton: {
    backgroundColor: '#ccc',
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  selectButtonText: { fontWeight: '700', fontSize: 16, color: '#000' },
  subscribeButton: {
    backgroundColor: '#F7B500',
    margin: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  subscribeButtonText: { fontWeight: '700', fontSize: 18, color: '#fff' },
  bottomNote: { textAlign: 'center', fontSize: 12, color: '#777', marginBottom: 20 },
});
