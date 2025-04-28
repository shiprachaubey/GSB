// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   FlatList,
// //   Dimensions,
// // } from 'react-native';
// // import BackArrow from '../assets/svgs/Backarrow'; // adjust path if needed

// // const { height } = Dimensions.get('window');
// // const AGE_RANGE = Array.from({ length: 97 }, (_, i) => 4 + i); // 4 to 100

// // const AgeScreen = ({ navigation }) => {
// //   const [selectedAge, setSelectedAge] = useState(27);

// //   const renderAgeItem = ({ item }) => {
// //     const isSelected = item === selectedAge;
// //     return (
// //       <TouchableOpacity
// //         onPress={() => setSelectedAge(item)}
// //         style={[styles.ageItem, isSelected && styles.selectedAge]}
// //       >
// //         <Text style={[styles.ageText, isSelected && styles.selectedAgeText]}>
// //           {item}
// //         </Text>
// //       </TouchableOpacity>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>

// // <View style={styles.topBar}>
// //   <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //     <BackArrow />
// //   </TouchableOpacity>

// //   <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
// //     <Text style={styles.skipText}>Skip</Text>
// //   </TouchableOpacity>
// // </View>

// //       <Text style={styles.stepText}>Step 3 of 8</Text>
// //       <Text style={styles.questionText}>How old are you?</Text>

// //       <FlatList
// //         data={AGE_RANGE}
// //         keyExtractor={(item) => item.toString()}
// //         renderItem={renderAgeItem}
// //         showsVerticalScrollIndicator={false}
// //         style={styles.picker}
// //         contentContainerStyle={styles.centeredList}
// //         getItemLayout={(_, index) => ({
// //           length: 40,
// //           offset: 40 * index,
// //           index,
// //         })}
// //       />

// //       <View style={styles.bottomButtonContainer}>
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={() => navigation.navigate('Weight')}
// //         >
// //           <Text style={styles.buttonText}>Next Steps</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingTop: 50,
// //     paddingHorizontal: 20,
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
  
// //   topBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
  
// //   backButton: {
// //     padding: 4,
// //   },
  
// //   skipText: {
// //     color: 'black',
// //     fontSize: 16,
// //     fontWeight: '500',
// //   },
  
// //   stepText: {
// //     fontSize: 14,
// //     color: '#222',
// //     alignSelf: 'flex-start',
// //   },
// //   questionText: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginVertical: 20,
// //   },
// //   picker: {
// //     flexGrow: 0,
// //     height: height * 0.5,
// //   },
// //   centeredList: {
    
// //     paddingBottom: height * 0.15,
// //     alignItems: 'center',
// //   },
// //   ageItem: {
// //     padding: 10,
// //     marginVertical: 5,
// //     borderRadius: 20,
// //     minWidth: 60,
// //     alignItems: 'center',
// //   },
// //   selectedAge: {
// //     backgroundColor: 'black',
// //     width: 70,
// //     height: 40,
// //     justifyContent: 'center',
// //     borderRadius: 6,
// //   },
// //   ageText: {
// //     fontSize: 20,
// //     color: '#555',
// //     textAlign: 'center',
// //   },
// //   selectedAgeText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// //   bottomButtonContainer: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //     marginBottom: 30,
// //   },
// //   button: {
// //     backgroundColor: '#D9A500',
// //     paddingVertical: 14,
// //     borderRadius: 10,
// //     marginHorizontal: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     textAlign: 'center',
// //     fontWeight: '600',
// //     fontSize: 16,
// //   },
// // });

// // export default AgeScreen;

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, FlatList } from 'react-native';

// const AgeScreen = ({ navigation }) => {
//   const [selectedAge, setSelectedAge] = useState(null);
//   const animation = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: 1,
//       duration: 800,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const ages = [37, 38, 39, 40];

//   const handleContinue = () => {
//     if (selectedAge !== null) {
//       alert(`Selected Age: ${selectedAge}`);
//       // navigation.navigate('NextScreen', { age: selectedAge });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>

//         {/* Top Circle and Cake Image */}
//         <View style={styles.imageBox}>
//           <Image source={require('../assets/svgs/')} style={styles.circleImage} resizeMode="contain" />
//           {/* <Image source={require('../assets/images/cake.png')} style={styles.innerImage} resizeMode="contain" /> */}
//         </View>

//         {/* Title and Subtitle */}
//         <Text style={styles.title}>How old are you?</Text>
//         <Text style={styles.subtitle}>This helps us personalize your wellness journey</Text>

//         {/* Age Options */}
//         <FlatList
//           data={ages}
//           keyExtractor={(item) => item.toString()}
//           contentContainerStyle={styles.ageList}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[styles.ageItem, selectedAge === item && styles.selectedAgeItem]}
//               onPress={() => setSelectedAge(item)}
//             >
//               <Text style={[styles.ageText, selectedAge === item && styles.selectedAgeText]}>{item}</Text>
//             </TouchableOpacity>
//           )}
//         />

//       </Animated.View>

//       {/* Continue Button */}
//       <TouchableOpacity
//         style={[styles.continueButton, { backgroundColor: selectedAge !== null ? '#F7B500' : '#ccc' }]}
//         onPress={handleContinue}
//         disabled={selectedAge === null}
//       >
//         <Text style={styles.continueButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AgeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     paddingVertical: 20,
//   },
//   imageBox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   circleImage: {
//     width: 200,
//     height: 200,
//   },
//   innerImage: {
//     position: 'absolute',
//     width: 100,
//     height: 100,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: 20,
//     color: '#000',
//   },
//   subtitle: {
//     fontSize: 14,
//     textAlign: 'center',
//     marginVertical: 8,
//     color: '#555',
//   },
//   ageList: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   ageItem: {
//     paddingVertical: 10,
//     paddingHorizontal: 60,
//     marginVertical: 5,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   selectedAgeItem: {
//     backgroundColor: '#F7B500',
//     borderColor: '#F7B500',
//   },
//   ageText: {
//     fontSize: 18,
//     color: '#000',
//     textAlign: 'center',
//   },
//   selectedAgeText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   continueButton: {
//     width: '100%',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, FlatList, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const AgeScreen = ({ navigation }) => {
  const [selectedAge, setSelectedAge] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const ages = Array.from({ length: 97 }, (_, i) => i + 4);

  const handleContinue = () => {
    if (selectedAge !== null) {
      alert(`Selected Age: ${selectedAge}`);
      navigation.navigate('Weight', { age: selectedAge });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>

        {/* Top Circle and Cake Image */}
        <View style={styles.imageBox}>
          <Image source={require('../assets/images/circle.png')} style={styles.circleImage} resizeMode="contain" />
          {/* <Image source={require('../assets/images/cake.png')} style={styles.innerImage} resizeMode="contain" /> */}
        </View>

        {/* Title and Subtitle */}
        <Text style={styles.title}>How old are you?</Text>
        <Text style={styles.subtitle}>This helps us personalize your wellness journey</Text>

        {/* Age Options */}
        <FlatList
          data={ages}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.ageList}
          showsVerticalScrollIndicator={false}
          style={{ maxHeight: height * 0.3 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.ageItem, selectedAge === item && styles.selectedAgeItem]}
              onPress={() => setSelectedAge(item)}
            >
              <Text style={[styles.ageText, selectedAge === item && styles.selectedAgeText]}>{item}</Text>
            </TouchableOpacity>
          )}
        />

      </Animated.View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: selectedAge !== null ? '#F7B500' : '#ccc' }]}
        onPress={handleContinue}
        disabled={selectedAge === null}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  circleImage: {
    width: 200,
    height: 200,
  },
  innerImage: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
    color: '#555',
  },
  ageList: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 80,
  },
  ageItem: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginVertical: 5,
    borderRadius: 8,
  },
  selectedAgeItem: {
    backgroundColor: '#F7B500',
  },
  ageText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  selectedAgeText: {
    color: '#fff',
    fontWeight: '600',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
