
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Switch, StatusBar } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Correct import
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';  

const PersonalInfoScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [useFeet, setUseFeet] = useState(false);
  const [goal, setGoal] = useState('');

  // ✅ Correct pickImage for React Native CLI
  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        console.log('Selected Image:', response.assets[0].uri);
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={{ fontSize: 40, color: '#fff' }}>+</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.form}>
          <InputField placeholder="Enter your full name" label="Full Name" value={fullName} onChangeText={setFullName} />
          <InputField placeholder="Enter your phone number" label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
          <InputField placeholder="Age" label="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
          <InputField placeholder="Weight (kg)" label="Weight" value={weight} onChangeText={setWeight} keyboardType="numeric" />

          <View style={styles.heightSwitch}>
            <Text style={styles.label}>Height</Text>
            <Switch
              value={useFeet}
              onValueChange={() => setUseFeet(!useFeet)}
            />
            <Text>{useFeet ? 'ft/in' : 'cm'}</Text>
          </View>

          <InputField placeholder="Height" value={height} onChangeText={setHeight} keyboardType="numeric" />
          <InputField placeholder="Select your goal" label="Goal" value={goal} onChangeText={setGoal} />

          <TouchableOpacity
          style={styles.updateButton}
          onPress={() => {
            navigation.goBack(); // 👈 when Update Profile is pressed
          }}
        >
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InputField = ({ label, placeholder, value, onChangeText, keyboardType }) => (
  <View style={{ marginBottom: 20 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  </View>
);

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#F7B500',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  form: { },
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 6, color: '#555' },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  updateButton: {
    backgroundColor: '#F7B500',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  heightSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
});
