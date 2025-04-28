// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Pressable,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import SvgTopLeft from '../assets/svgs/TopRight';
// import BlueCircle from '../assets/svgs/TopScreenLeft';

// const RegisterScreen = ({ navigation }) => {
//   const [fullName, setFullName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [agreePrivacy, setAgreePrivacy] = useState(false);

//   const handleSubmit = () => {
//     if (agreePrivacy && agreeTerms) {
//       navigation.navigate('NextScreen');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Background SVG to the left */}
//       <View style={styles.bottomSvg}>
//         <BlueCircle width={450} height={420} />
//       </View>

//       {/* Heading + Top Right SVG */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.heading}>
//           Get Your{"\n"}
//           <Text style={styles.boldText}>Personalised IBS </Text>{'\n'}
//           <Text>Care Plan</Text>
//         </Text>
//         <View style={styles.topSvg}>
//           <SvgTopLeft width={250} height={200} />
//         </View>
//       </View>

//       {/* Form View */}
//       <View style={styles.formWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           placeholderTextColor="#999"
//           value={fullName}
//           onChangeText={setFullName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           placeholderTextColor="#999"
//           keyboardType="phone-pad"
//           value={mobileNumber}
//           onChangeText={setMobileNumber}
//         />

//         {/* Checkboxes */}
//         <View style={styles.checkboxRow}>
//           <Pressable onPress={() => setAgreePrivacy(!agreePrivacy)}>
//           <Ionicons
//   name={agreePrivacy ? 'checkbox' : 'square-outline'}
//   size={24}
//   color="#009990"
// />

//           </Pressable>
//           <Text style={styles.checkboxLabel}>
//             I agree with the <Text style={styles.link}>Privacy Policy</Text>
//           </Text>
//         </View>

//         <View style={styles.checkboxRow}>
//           <Pressable onPress={() => setAgreeTerms(!agreeTerms)}>
//             <Ionicons
//               name={agreeTerms ? 'checkbox' : 'square-outline'}
//               size={24}
//               color={agreeTerms ? '#009990' : '#aaa'}
//             />
//           </Pressable>
//           <Text style={styles.checkboxLabel}>
//             I agree with the <Text style={styles.link}>Terms & Conditions</Text>
//           </Text>
//         </View>
//       </View>

//       {/* Submit Button */}
//       <View style={styles.buttonWrapper}>
//         <TouchableOpacity
//           style={[
//             styles.submitButton,
//             !(agreePrivacy && agreeTerms) && styles.disabledButton,
//           ]}
//           onPress={() => navigation.navigate('Age')}
//           disabled={!(agreePrivacy && agreeTerms)}
//         >
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default RegisterScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//   },
//   headerContainer: {
//     position: 'relative',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-end',
//     fontFamily: 'Inria Sans',
//     height: 230,
//     paddingLeft: 20,
//     paddingBottom: -90,
//   },
//   heading: {
//     fontSize: 30,
//     fontFamily: 'Inria Sans',
//     color: '#000',
//     zIndex: 1,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   strong: {
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   topSvg: {
//     position: 'absolute',
//     top: -30,
//     right: -10,
//     zIndex: 0,
//   },
//   bottomSvg: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     zIndex: -1,
//   },
//   formWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 140,
//     paddingBottom: 40,
//     paddingHorizontal: 20,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#074099',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   checkboxRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//     color: 'black',
//   },
//   checkboxLabel: {
//     marginLeft: 8,
//     fontSize: 16,
//     color: 'black',
//     flexShrink: 1,
//   },
//   link: {
//     color: '#000000',
//     fontWeight: '900',
//   },
//   buttonWrapper: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   submitButton: {
//     backgroundColor: '#001A6E',
//     paddingVertical: 14,
//     paddingHorizontal: 100,
//     borderRadius: 30,
//   },
//   disabledButton: {
//     backgroundColor: '#aaa',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     fontFamily: 'Inria Sans',
//   },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window');

const SignInScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSignIn = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Name is required';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!(agreePrivacy && agreeTerms)) newErrors.agreement = 'You must agree to the Privacy Policy and Terms & Conditions';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      navigation.navigate('OTP');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Top Circle + Meditation Image */}
        <View style={styles.imageBox}>
          <Image source={require('../assets/images/circle.png')} style={styles.circleImage} resizeMode="contain" />
          <Image source={require('../assets/images/Health.png')} style={styles.innerImage} resizeMode="contain" />
        </View>

        {/* Heading */}
        <Text style={styles.title}>Sign in to Wellness</Text>
        <Text style={styles.subtitle}>Cure your lifestyle diseases with us</Text>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
          {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            keyboardType="phone-pad"
            onChangeText={setPhoneNumber}
          />
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

          {/* Checkboxes */}
          <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreePrivacy(!agreePrivacy)}>
            <View style={styles.checkbox}>{agreePrivacy && <View style={styles.checked} />}</View>
            <Text style={styles.checkboxText}>I agree with <Text style={styles.linkText}>Privacy Policy</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreeTerms(!agreeTerms)}>
            <View style={styles.checkbox}>{agreeTerms && <View style={styles.checked} />}</View>
            <Text style={styles.checkboxText}>I agree with <Text style={styles.linkText}>Terms & Conditions</Text></Text>
          </TouchableOpacity>

          {errors.agreement && <Text style={styles.errorText}>{errors.agreement}</Text>}
        </View>
      </ScrollView>

      {/* Button at Bottom */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  circleImage: {
    width: 200,
    height: 200,
  },
  innerImage: {
    position: 'absolute',
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#F7B500',
    borderRadius: 2,
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 8,
  },
  signInButton: {
    backgroundColor: '#F7B500',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
