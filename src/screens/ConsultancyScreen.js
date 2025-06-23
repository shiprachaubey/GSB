import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert , StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const ConsultancyScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

 const handleSubmit = async () => {
  if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
    Alert.alert('Validation Error', 'Please fill all the fields!');
    return;
  }

  try {
    const res = await axios.post('http://13.60.227.51:9000/api/consultancy/submit', {
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      message,
    });

    if (res.status === 201) {
      Alert.alert('Request Submitted', 'Thank you! Our consultant will contact you soon.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } else {
      Alert.alert('Submission Failed', 'Please try again later.');
    }
  } catch (err) {
    console.error('Submission error:', err.message);
    Alert.alert('Error', 'Failed to submit your request. Please check your connection.');
  }
};


  return (
     <SafeAreaView style={{flex:1}}> 
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consultancy</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Info Box */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={24} color="#F7B500" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.infoTitle}>How We Can Help</Text>
            <Text style={styles.infoText}>
            Get Expert Guidance for Your Healing Journey
            </Text>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            placeholder="Enter your first name"
            placeholderTextColor="#000"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            placeholder="Enter your last name"
            placeholderTextColor="#000"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor="#000"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#000"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            placeholder="Describe your concerns or questions..."
            placeholderTextColor="#000"
            style={[styles.input, { height: 100 }]}
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Request ➔</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default ConsultancyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 12, color: '#F7B500' },
  infoBox: { backgroundColor: '#fff8e1', padding: 12, borderRadius: 8, flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20 },
  infoTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  infoText: { color: '#555' },
  form: { marginBottom: 20 },
  label: { fontWeight: 'bold', marginBottom: 6, color: '#555' },
  input: { backgroundColor: '#f5f5f5', borderRadius: 8, padding: 12, marginBottom: 16 },
  submitButton: { backgroundColor: '#F7B500', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  submitButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
