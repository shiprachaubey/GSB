// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// const OtpVerificationScreen = ({ route = {}, navigation }) => {
//   const phoneNumber = route?.params?.phoneNumber || '';
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(60);
//   const animation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: 1,
//       duration: 800,
//       useNativeDriver: true,
//     }).start();

//     const interval = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleOtpChange = (text, index) => {
//     if (text.length > 1) return;

//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     if (text && index < 5) {
//       refs[index + 1].current.focus();
//     }
//   };

//   const refs = Array.from({ length: 6 }, () => useRef(null));

//   const renderOtpInputs = () => {
//     return otp.map((digit, index) => (
//       <TextInput
//         key={index}
//         ref={refs[index]}
//         style={[styles.otpInput, {
//           borderColor: digit ? '#00C853' : '#F7B500',
//         }]}
//         keyboardType="numeric"
//         maxLength={1}
//         onChangeText={(text) => handleOtpChange(text, index)}
//         value={digit}
//       />
//     ));
//   };

//   const handleVerify = () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6) {
//       alert('OTP Verified Successfully!');
//       // navigation.navigate('NextScreen')
//     } else {
//       alert('Please enter a 6-digit OTP');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>
//         <Text style={styles.title}>Verification</Text>
//         <Text style={styles.subtitle}>We've sent a 6-digit code to</Text>
//         <Text style={styles.phoneNumber}>+91 {phoneNumber}</Text>

//         <View style={styles.otpContainer}>{renderOtpInputs()}</View>

//         <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
//           <Text style={styles.verifyButtonText}>Verify OTP</Text>
//         </TouchableOpacity>

//         <Text style={styles.resendText}>
//           Didn't receive code? <Text style={styles.resendLink}>Resend in {timer}s</Text>
//         </Text>
//       </Animated.View>
//     </View>
//   );
// };

// export default OtpVerificationScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     textAlign: 'center',
//     color: '#000',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#555',
//   },
//   phoneNumber: {
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginVertical: 8,
//     color: '#000',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 20,
//     gap: 10,
//   },
//   otpInput: {
//     width: 45,
//     height: 55,
//     borderWidth: 2,
//     borderRadius: 8,
//     fontSize: 22,
//     textAlign: 'center',
//     color: '#000',
//   },
//   verifyButton: {
//     backgroundColor: '#F7B500',
//     paddingVertical: 14,
//     paddingHorizontal: 50,
//     borderRadius: 8,
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   verifyButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   resendText: {
//     marginTop: 16,
//     marginLeft: 40,
//     fontSize: 14,
//     color: '#555',
//   },
//   resendLink: {
//     color: '#007BFF',
//     fontWeight: '600',
//   },
// });


import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const OtpVerificationScreen = ({ route = {}, navigation }) => {
  const phoneNumber = route?.params?.phoneNumber || '';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      refs[index + 1].current.focus();
    }
  };

  const refs = Array.from({ length: 6 }, () => useRef(null));

  const renderOtpInputs = () => {
    return otp.map((digit, index) => (
      <TextInput
        key={index}
        ref={refs[index]}
        style={[styles.otpInput, {
          borderColor: digit ? '#00C853' : '#F7B500',
        }]}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) => handleOtpChange(text, index)}
        value={digit}
      />
    ));
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
    //   alert('OTP Verified Successfully!');
      navigation.navigate('Age')
    } else {
      alert('Please enter a 6-digit OTP');
    }
  };

  const handleResendOtp = () => {
    alert('OTP resent!');
    setTimer(60);
    setCanResend(false);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>We've sent a 6-digit code </Text>
        {/* <Text style={styles.phoneNumber}>{phoneNumber ? `+91 ${phoneNumber}` : 'Phone number not available'}</Text> */}

        <View style={styles.otpContainer}>{renderOtpInputs()}</View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Didn't receive code?{' '}
          {canResend ? (
            <Text style={styles.resendLink} onPress={handleResendOtp}>Resend</Text>
          ) : (
            <Text style={styles.resendLink}>Resend in {timer}s</Text>
          )}
        </Text>
      </Animated.View>
    </View>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 8,
    color: '#000',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 10,
  },
  otpInput: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
  },
  verifyButton: {
    backgroundColor: '#F7B500',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resendText: {
    marginTop: 16,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  resendLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
});
