
import React, { useRef, useEffect, useState } from 'react';
import { View,Image, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, FlatList, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationsList from '../components/NotificationsList';
import MessagesScreen from '../components/MessageScreen';
import ProfileScreen from '../components/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated } from 'react-native'; 
// import PlanSection from '../components/PlanScreen';
import { useNavigation } from '@react-navigation/native';  // 👈 Import this at top
 // 👈 ADD THIS


const { width } = Dimensions.get('window');

const carouselItems = [
  { title: 'Mediation and Fitness Video' ,  image: require('../assets/images/fitness.png')},
  { title: 'Connect with doctors' ,image: require('../assets/images/doctors.webp') },
  { title: 'Customised Diet Plans', image: require('../assets/images/diet.webp') },
  { title: 'Free from Medecines ' , image: require('../assets/images/tablet.jpg')},
  { title: 'Follow us More ' , image: require('../assets/images/follow.jpg')},
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
  const navigation = useNavigation();  
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );
  
  const cards = [
    { 
      title: 'Meditation', 
      desc: 'Guided meditation lessons to enhance your mindfulness journey.', 
      image: require('../assets/images/meditation.png'),
      navigateTo: 'MeditationScreen' 
    },
    { 
      title: 'Education', 
      desc: 'A wellness library with health videos and tips.', 
      navigateTo: 'Education' ,
      image: require('../assets/images/education-learning-8-svgrepo-com.png'),
      
    },
    { 
      title: 'Diet Plans', 
      desc: 'A tailored diet plan designed exclusively for you.', 
      navigateTo: 'DietPlan' ,
      image: require('../assets/images/note.png'),
    },
    { 
      title: 'Success Stories', 
      desc: 'Watch stories of how people transformed their lives.', 
      navigateTo: 'SucessStories' ,
      image: require('../assets/images/Star.png'),
    },
  ];
  const services = [
    { title: 'GSB Pathy services', image: require('../assets/images/pathy.jpeg') ,  navigateTo: 'GSBPathy' }, // You will later set image
    { title: 'Consultancy',image: require('../assets/images/consult.jpg'), navigateTo: 'Consultancy' },
    { title: 'Supplements', image: require('../assets/images/supplement.jpeg'), navigateTo: 'Supplement' },
    { title: 'Fitness', image: require('../assets/images/fitnesgym.jpeg'), navigateTo: 'Fitness' },
  ];
  

  return (
    <ScrollView
    style={styles.container}
    contentContainerStyle={{ paddingBottom: 120 }}  
  >
  
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

<View style={styles.innerPeaceContainer}>
  <Text style={styles.innerPeaceTitle}>Inner Peace</Text>
  <Text style={styles.innerPeaceSubtitle}>Discover balance and tranquility</Text>
</View>

<View style={styles.cardGrid}>
  {cards.map((item, idx) => (
    <TouchableOpacity
      key={idx}
      style={styles.card}
      onPress={() => navigation.navigate(item.navigateTo)}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.desc}</Text>
    </TouchableOpacity>
  ))}
</View>





      {/* Our Services Section */}
<View style={styles.servicesContainer}>
  <Text style={styles.servicesTitle}>Our Services</Text>
  <Text style={styles.servicesSubtitle}>Find out services which works best for you</Text>
</View>

{/* 1st row of 3 services */}

<View style={styles.serviceGrid}>
  {services.map((item, idx) => (
    <TouchableOpacity
      key={idx}
      style={styles.serviceCard}
      onPress={() => {
        if (item.navigateTo) {
          navigation.navigate(item.navigateTo);
        }
      }}
    >
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </TouchableOpacity>
  ))}
</View>



    </ScrollView>
  );
};

const NotificationsScreen = () => <NotificationsList />;


const PlansScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.planHeader}>
        <Text style={styles.sectionTitle}>Choose Your Plan</Text>
        <Text style={styles.sectionSubtitle}>Select the plan that best fits your health journey needs</Text>
      </View>

      {/* Premium Plan */}
      <View style={styles.planBoxPrimary}>
        <View style={styles.planTopYellow}>
          <Text style={styles.planBoxTitle}>Premium Plan</Text>
          <Text style={styles.planBoxPrice}>$29.99/month</Text>
        </View>
        <View style={styles.planFeaturesBox}>
          {[
            "Unlimited appointment with a Clinical nutritionist",
            "Customized Non-Drug Treatment Plan",
            "Regular Consultations & Progress Tracking",
            "Daily Follow-Up Calls to Monitor Your Progress",
            "Unlimited Counseling Sessions with a Health Coach",
            "Unlimited Diet Modifications",
            "Holistic Support for Long-Lasting Results",
            "Comprehensive Lifestyle & Emotional Well-Being Guidance",
            "Stress management",
            "Behaviour counselling",
            "Dietary supplements suggestion",
          ].map((text, idx) => (
            <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
          ))}

          <TouchableOpacity
            style={[
              styles.selectButton,
              selectedPlan === 'premium'
                ? styles.selectedButtonYellow
                : styles.unselectedButtonGray,
            ]}
            onPress={() => setSelectedPlan('premium')}
          >
            <Text
              style={[
                styles.selectButtonText,
                selectedPlan === 'premium'
                  ? styles.selectButtonTextBlack
                  : styles.selectButtonTextGray,
              ]}
            >
              Select Premium
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Freemium Plan */}
      <View style={styles.planBoxSecondary}>
        <View style={styles.planTopBorderYellow}>
          <Text style={styles.planBoxTitle}>Freemium Plan</Text>
          <Text style={styles.planBoxPrice}>$9.99/month</Text>
        </View>
        <View style={styles.planFeaturesBox}>
          {[
            'One time treatment plan as per problem',
            'One time appointment with health coach',
            'Behaviour management',
            'Dietary supplements suggestion',
          ].map((text, idx) => (
            <Text key={idx} style={styles.planFeatureText}>✅ {text}</Text>
          ))}

          <TouchableOpacity
            style={[
              styles.selectButton,
              selectedPlan === 'freemium'
                ? styles.selectedButtonYellow
                : styles.unselectedButtonGray,
            ]}
            onPress={() => setSelectedPlan('freemium')}
          >
            <Text
              style={[
                styles.selectButtonText,
                selectedPlan === 'freemium'
                  ? styles.selectButtonTextBlack
                  : styles.selectButtonTextGray,
              ]}
            >
              Select Freemium
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    

      <TouchableOpacity style={styles.subscribeButton}><Text style={styles.subscribeButtonText}>Subscribe to Freemium Plan</Text></TouchableOpacity>

      <Text style={styles.bottomNote}>You can cancel your subscription anytime</Text>
    </ScrollView>
  );
};


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
              marginBottom: Platform.OS === 'ios' ? 5 : 0,
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
  // cardRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 10 },
  // card: { width: '47%', backgroundColor: '#fff', padding: 16, marginVertical: 8, borderRadius: 10, alignItems: 'center', elevation: 3 },
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
  subscribeButtonText: { fontWeight: '700', fontSize: 18, color: '#555' },
  bottomNote: { textAlign: 'center', fontSize: 12, color: '#777', marginBottom: 20 },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  carouselImage: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  
  innerPeaceContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 30,
    backgroundColor: '#F7B500',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
   
  },
  innerPeaceTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  innerPeaceSubtitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // space-between pushes edge-to-edge
    marginTop: 10,
  
},
  // card: {
  //   width: '30%',
  //   backgroundColor: '#fff',
  //   padding: 16,
  //   marginVertical: 18,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   elevation: 3,
  //   borderTopWidth: 4,
  // borderTopColor: '#FFD700', 
  // },

  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopWidth: 4,
    borderTopColor: '#FFD700',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
 
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 30,
  },
  serviceCard: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  
  cardSingle: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    borderTopWidth: 4,
  borderTopColor: '#FFD700', 
    borderTopColor: '#FFD700',
  },
  cardImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
    color: '#000',
  },
  cardDesc: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
    marginTop: 4,
  },
  servicesContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 30,
    backgroundColor: '#F7B500',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
  },
  servicesTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  servicesSubtitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  serviceCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 10,
  },
  // serviceCard: {
  //   width: '30%',
  //   backgroundColor: '#fff',
  //   paddingVertical: 16,
  //   paddingHorizontal: 6,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   elevation: 3,
  //   borderWidth: 2,
  // borderColor: '#FFD700', 
  // },
  serviceImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  selectedButtonYellow: {
    backgroundColor: '#F7B500',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  
  unselectedButtonGray: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  
  selectButtonTextBlack: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  selectButtonTextGray: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});