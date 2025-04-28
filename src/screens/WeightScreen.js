// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import BackArrow from '../assets/svgs/Backarrow'; 

// const WeightScreen = ({ navigation }) => {
//   const [unit, setUnit] = useState('KG');
//   const [weight, setWeight] = useState('');

//   const handleUnitSwitch = (selectedUnit) => {
//     setUnit(selectedUnit);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       style={styles.container}
//     >
//           <ScrollView
//     contentContainerStyle={styles.scrollContainer}
//     keyboardShouldPersistTaps="handled"
//   >


// <View style={styles.topBar}>
//   <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//     <BackArrow />
//   </TouchableOpacity>

//   <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
//     <Text style={styles.skipText}>Skip</Text>
//   </TouchableOpacity>
// </View>

//       <Text style={styles.stepText}>Step 4 of 8</Text>
//       <Text style={styles.questionText}>How much do you weight?</Text>

//       {/* LBS | KG Switch inside same box */}
//       <View style={styles.unitBox}>
//         <TouchableOpacity
//           style={[styles.unitOption, unit === 'LBS' && styles.unitActive]}
//           onPress={() => handleUnitSwitch('LBS')}
//         >
//           <Text style={[styles.unitText, unit === 'LBS' && styles.unitTextActive]}>
//             LBS
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.unitOption, unit === 'KG' && styles.unitActive]}
//           onPress={() => handleUnitSwitch('KG')}
//         >
//           <Text style={[styles.unitText, unit === 'KG' && styles.unitTextActive]}>
//             KG
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Weight Input */}
//       <View style={styles.inputWrapper}>
//       <TextInput
//   style={styles.input}
//   keyboardType="numeric"
//   placeholder={`87 ${unit.toLowerCase()}`}
//   placeholderTextColor="#aaa"
//   value={weight}
//   onChangeText={setWeight}
//   returnKeyType="done"
// />

//       </View>

//       {/* Bottom Button */}
//       <View style={styles.bottomButtonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Height')}
//         >
//           <Text style={styles.buttonText}>Next Steps</Text>
//         </TouchableOpacity>
//       </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
  
//   backButton: {
//     padding: 4,
//   },
  
//   skipText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: '500',
//   },
  
//   stepText: {
//     fontSize: 14,
//     color: '#888',
//   },
//   questionText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },

//   // LBS / KG box styling
//   unitBox: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     backgroundColor: '#eee',
//     borderRadius: 8,
//     overflow: 'hidden',
//     marginTop:30,
//     marginBottom: 30,
//    width:120,
//   },
//   unitOption: {
//     flex: 1,
//     paddingVertical: 6, // reduce height
//     paddingHorizontal: 10, // reduce width
//     alignItems: 'center',
//   },
  
//   unitActive: {
//     backgroundColor: '#D9D9D9',
//   },
//   unitText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   unitTextActive: {
//     fontWeight: 'bold',
//     color: '#000',
//   },

//   // Input
//   inputWrapper: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   input: {
//     fontSize: 28,
//     textAlign: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     width: '50%',
//     color: '#000',
//   },

//   // Bottom CTA
//   bottomButtonContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     marginBottom: 30,
//   },
//   button: {
//     backgroundColor: '#D9A500',
//     paddingVertical: 14,
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default WeightScreen;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, ScrollView } from 'react-native';

const BodyMeasurementsScreen = ({ navigation }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isCm, setIsCm] = useState(true);
  const [errors, setErrors] = useState({});
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const validateFields = () => {
    const newErrors = {};
    if (!weight) newErrors.weight = 'Weight is required';
    if (!height) newErrors.height = 'Height is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateFields()) {
      alert(`Weight: ${weight} kg, Height: ${height} ${isCm ? 'cm' : 'ft/in'}`);
      navigation.navigate('Height');
    }
  };

  const handleSwitchUnit = () => {
    if (height) {
      if (isCm) {
        // Convert cm to ft/in
        const cmValue = parseFloat(height);
        const totalInches = cmValue / 2.54;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);
        setHeight(`${feet}'${inches}"`);
      } else {
        // Convert ft/in back to cm
        const parts = height.split("'");
        if (parts.length === 2) {
          const feet = parseInt(parts[0]);
          const inches = parseInt(parts[1].replace('"', ''));
          const cm = (feet * 30.48) + (inches * 2.54);
          setHeight(cm.toFixed(0).toString());
        }
      }
    }
    setIsCm(!isCm);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>

          {/* Top Circle and Measurement Image */}
          <View style={styles.imageBox}>
            <Image source={require('../assets/images/circle.png')} style={styles.circleImage} resizeMode="contain" />
            {/* <Image source={require('../assets/images/body_measurement.png')} style={styles.innerImage} resizeMode="contain" /> */}
          </View>

          {/* Title and Subtitle */}
          <Text style={styles.title}>Your Body Measurements</Text>
          <Text style={styles.subtitle}>Help us understand your physical profile</Text>

          {/* Weight Input */}
          <View style={styles.inputSection}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your weight in kg"
              value={weight}
              keyboardType="numeric"
              onChangeText={setWeight}
            />
            {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}
          </View>

          {/* Height Input */}
          <View style={styles.inputSection}>
            <View style={styles.heightRow}>
              <Text style={styles.label}>Height ({isCm ? 'cm' : 'ft/in'})</Text>
              <TouchableOpacity onPress={handleSwitchUnit}>
                <Text style={styles.switchText}>Switch to {isCm ? 'ft/in' : 'cm'}</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder={isCm ? "Enter your height in cm" : "Enter your height (eg. 5'7\")"}
              value={height}
              keyboardType={isCm ? "numeric" : "default"}
              onChangeText={setHeight}
            />
            {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}
          </View>

        </Animated.View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: (weight && height) ? '#F7B500' : '#ccc' }]}
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BodyMeasurementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 20,
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
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  heightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    color: '#F7B500',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
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
