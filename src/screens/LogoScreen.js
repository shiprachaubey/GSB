// import React, { useEffect, useRef } from 'react';
// import { View, Image, StyleSheet, StatusBar, Animated, Easing } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const LogoScreen = () => {
//   const navigation = useNavigation();

//   const opacity = useRef(new Animated.Value(0)).current;
//   const scale = useRef(new Animated.Value(0.8)).current;

//   useEffect(() => {
//     // Run fade-in + scale-up animation
//     Animated.sequence([
//       Animated.parallel([
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 1200,
//           useNativeDriver: true,
//           easing: Easing.out(Easing.exp),
//         }),
//         Animated.spring(scale, {
//           toValue: 1,
//           friction: 4,
//           useNativeDriver: true,
//         }),
//       ]),
//       Animated.timing(opacity, {
//         toValue: 0.95,
//         duration: 300,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Navigate after 3 seconds
//     const timer = setTimeout(() => {
//       navigation.replace('Splash');
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [navigation, opacity, scale]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//       <Animated.View style={[styles.logoContainer, {
//         opacity: opacity,
//         transform: [{ scale: scale }],
//       }]}>
//         <Image
//           source={require('../assets/images/logo.png')} // 🔁 Your actual logo
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </Animated.View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff', // Replace with your brand background if needed
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     width: '70%',
//     height: '30%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default LogoScreen;


import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, StatusBar, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LogoScreen = () => {
  const navigation = useNavigation();

  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Step 1: Animate logo from inside out (scale + fade in)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
          easing: Easing.out(Easing.exp),
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(500), // Hold the logo briefly

      // Step 2: Exit animation (fade out + zoom out)
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1.6,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.in(Easing.cubic),
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Step 3: Navigate after animation finishes
    const timeout = setTimeout(() => {
      navigation.replace('Splash');
    }, 2500); // Total time of full animation

    return () => clearTimeout(timeout);
  }, [navigation, scale, opacity]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Animated.View style={[
        styles.logoContainer,
        {
          transform: [{ scale }],
          opacity,
        }
      ]}>
        <Image
          source={require('../assets/images/logo.png')} // Replace with your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default LogoScreen;
