
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
// const { width, height } = Dimensions.get('window');
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CountryPicker from 'react-native-country-picker-modal';

// const SignInScreen = ({ navigation }) => {
//   const [fullName, setFullName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [agreePrivacy, setAgreePrivacy] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [countryCode, setCountryCode] = useState('IN');
// const [callingCode, setCallingCode] = useState('91');

//   // const handleSignIn = async () => {
//   //   const newErrors = {};
//   //   const phoneRegex = /^[0-9]{10}$/;
  
//   //   if (!fullName) newErrors.fullName = 'Name is required';
//   //   if (!phoneNumber) {
//   //     newErrors.phoneNumber = 'Phone number is required';
//   //   } else if (!phoneRegex.test(phoneNumber)) {
//   //     newErrors.phoneNumber = 'Phone number must be 10 digits';
//   //   }
//   //   if (!(agreePrivacy && agreeTerms)) {
//   //     newErrors.agreement = 'You must agree to the Privacy Policy and Terms & Conditions';
//   //   }
  
//   //   if (Object.keys(newErrors).length > 0) {
//   //     setErrors(newErrors);
//   //   } else {
//   //     setErrors({});
//   //     try {
//   //       await AsyncStorage.setItem('isLoggedIn', 'true');
//   //       navigation.replace('OTP'); // or 'OTP' if that's the next intended screen
//   //     } catch (error) {
//   //       console.error('❌ Error saving login status:', error);
//   //     }
//   //   }
//   // };
//   const handleSignIn = async () => {
//     const newErrors = {};
  
//     // E.164 format validation (e.g. +919876543210)
//     const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  
//     if (!fullName.trim()) newErrors.fullName = 'Name is required';
//     if (!phoneNumber.trim()) {
//       newErrors.phoneNumber = 'Phone number is required';
//     }
  
//     // Normalize phone: remove spaces, ensure country code is included
//     let fullPhone = `+${callingCode}${phoneNumber.replace(/\s+/g, '')}`;

  
//     if (!phoneRegex.test(fullPhone)) {
//       newErrors.phoneNumber = 'Enter a valid phone number with country code';
//     }
  
//     if (!(agreePrivacy && agreeTerms)) {
//       newErrors.agreement = 'You must agree to the Privacy Policy and Terms & Conditions';
//     }
  
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       setErrors({});
//       try {
//         await AsyncStorage.setItem('isLoggedIn', 'true');
//         await AsyncStorage.setItem('userFullName', fullName.trim());
//         await AsyncStorage.setItem('userPhone', fullPhone);
//         navigation.replace('OTP');
//       } catch (error) {
//         console.error('❌ Error saving login status:', error);
//       }
//     }
//   };
  
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>

//         {/* Top Circle + Meditation Image */}
//         <View style={styles.imageBox}>
//           <Image source={require('../assets/images/Journey.jpeg')} style={styles.circleImage} resizeMode="contain" />
//        </View>

//         {/* Heading */}
//         <Text style={styles.title}>Sign in to Wellness</Text>
//         <Text style={styles.subtitle}>Cure your lifestyle diseases with us</Text>

//         {/* Form Fields */}
//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your full name"
//             value={fullName}
//             onChangeText={setFullName}
//           />
//           {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
//           <View style={styles.label}>
//           <Text style={styles.label}>Phone Number</Text>
// <View style={styles.phoneRow}>
//   <CountryPicker
//     countryCode={countryCode}
//     withFilter
//     withFlag
//     withCallingCode
//     withEmoji
//     onSelect={(country) => {
//       setCountryCode(country.cca2);
//       setCallingCode(country.callingCode[0]);
//     }}
//   />
//   <Text style={styles.callingCode}>+{callingCode}</Text>
//   <TextInput
//     style={[styles.input, { flex: 1 }]}
//     placeholder="Enter your phone number"
//     value={phoneNumber}
//     keyboardType="phone-pad"
//     onChangeText={setPhoneNumber}
//   />
// </View>
// {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

//          {/* <Text style={styles.label}>Phone Number</Text> */}
//           {/* <TextInput
//             style={styles.input}
//             placeholder="Enter your phone number"
//             value={phoneNumber}
//             keyboardType="phone-pad"
//             onChangeText={setPhoneNumber}
//           />
//           {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>} */}

//           {/* Checkboxes */}
//           <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreePrivacy(!agreePrivacy)}>
//             <View style={styles.checkbox}>{agreePrivacy && <View style={styles.checked} />}</View>
//             <Text style={styles.checkboxText}>I agree with <Text style={styles.linkText}>Privacy Policy</Text></Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreeTerms(!agreeTerms)}>
//             <View style={styles.checkbox}>{agreeTerms && <View style={styles.checked} />}</View>
//             <Text style={styles.checkboxText}>I agree with <Text style={styles.linkText}>Terms & Conditions</Text></Text>
//           </TouchableOpacity>

//           {errors.agreement && <Text style={styles.errorText}>{errors.agreement}</Text>}
//         </View>
//       </ScrollView>

//       {/* Button at Bottom */}
//       <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
//         <Text style={styles.signInButtonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SignInScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CountryPicker from 'react-native-country-picker-modal';

const { width, height } = Dimensions.get('window');

const SignInScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');

  const handleSignIn = async () => {
    const newErrors = {};
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    const fullPhone = `+${callingCode}${phoneNumber.replace(/\s+/g, '')}`;
    if (!phoneRegex.test(fullPhone)) {
      newErrors.phoneNumber = 'Enter a valid phone number with country code';
    }

    if (!(agreePrivacy && agreeTerms)) {
      newErrors.agreement = 'You must agree to the Privacy Policy and Terms & Conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('userFullName', fullName.trim());
        await AsyncStorage.setItem('userPhone', fullPhone);
        navigation.replace('OTP');
      } catch (error) {
        console.error('❌ Error saving login status:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Image */}
        <View style={styles.imageBox}>
          <Image source={require('../assets/images/Journey.jpeg')} style={styles.circleImage} resizeMode="contain" />
        </View>

        {/* Headings */}
        <Text style={styles.title}>Sign in to Wellness</Text>
        <Text style={styles.subtitle}>Cure your lifestyle diseases with us</Text>

        {/* Form */}
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
<View style={styles.phoneInputContainer}>
  <TouchableOpacity style={styles.countryCodeBox}>
    <CountryPicker
      countryCode={countryCode}
      withFilter
      withFlag
      withCallingCode
      withEmoji
      onSelect={(country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
      }}
    />
    <Text style={styles.callingCodeText}>+{callingCode}</Text>
  </TouchableOpacity>

  <View style={styles.verticalLine} />

  <TextInput
    style={styles.phoneInput}
    placeholder="Enter your phone number"
    value={phoneNumber}
    keyboardType="phone-pad"
    onChangeText={setPhoneNumber}
  />
</View>
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

      {/* Sign In Button */}
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
    
  },
  circleImage: {
    width: 300,     // Increase width
    height: 300,    // Increase height
    borderRadius: 150,  // Makes it circular if the image is square
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
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  
  countryCodeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  callingCodeText: {
    marginLeft: 0,
    fontSize: 16,
    color: '#000',
  },
  
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  
});
