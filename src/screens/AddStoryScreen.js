
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddStoryScreen = () => {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const pickImage = (setImage) => {
    Alert.alert(
      "Choose Option",
      "",
      [
        {
          text: "Camera",
          onPress: () => {
            launchCamera({ mediaType: 'photo' }, (response) => {
              if (!response.didCancel && response.assets && response.assets.length > 0) {
                setImage(response.assets[0].uri);
              }
            });
          }
        },
        {
          text: "Gallery",
          onPress: () => {
            launchImageLibrary({ mediaType: 'photo' }, (response) => {
              if (!response.didCancel && response.assets && response.assets.length > 0) {
                setImage(response.assets[0].uri);
              }
            });
          }
        },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  const handleShareStory = () => {
    // Validation checks
    if (!beforeImage) {
      Alert.alert('Validation Error', 'Please upload Before Image.');
      return;
    }
    if (!afterImage) {
      Alert.alert('Validation Error', 'Please upload After Image.');
      return;
    }
    if (!title.trim()) {
      Alert.alert('Validation Error', 'Title is required.');
      return;
    }
    if (!description.trim()) {
      Alert.alert('Validation Error', 'Description is required.');
      return;
    }

    // If all fields are valid
    Alert.alert(
      'Success',
      'Your story has been successfully shared!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack(); // Go back to MyStoriesScreen
          }
        }
      ]
    );
  };

  return (
     <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Share Your Success Story</Text>
      </View>

      {/* Tip Box */}
      <View style={styles.tipBox}>
        <Ionicons name="information" size={24} color="#F7B500" />
        <Text style={styles.tipText}>
          Share your journey with clear before and after photos. Add a detailed description to inspire others.
        </Text>
      </View>

      {/* Images */}
      <View style={styles.imageRow}>
        <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage(setBeforeImage)}>
          {beforeImage ? (
            <Image source={{ uri: beforeImage }} style={styles.image} />
          ) : (
            <>
              <Ionicons name="camera" size={30} color="#F7B500" />
              <Text>Before Image</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage(setAfterImage)}>
          {afterImage ? (
            <Image source={{ uri: afterImage }} style={styles.image} />
          ) : (
            <>
              <Ionicons name="camera" size={30} color="#F7B500" />
              <Text>After Image</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {/* Inputs with Headings */}
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.inputHeading}>Title</Text>
        <TextInput
          placeholder="Give your story a catchy title"
          placeholderTextColor="#999" 
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.inputHeading}>Description</Text>
        <TextInput
          placeholder="Share your journey and what worked for you..."
          placeholderTextColor="#999" 
          style={[styles.input, { height: 100 }]}
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton} onPress={handleShareStory}>
        <Text style={styles.shareButtonText}>Share My Story ➔</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default AddStoryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 12 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 12 },
  tipBox: { backgroundColor: '#fff8e1', padding: 12, borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  tipText: { marginLeft: 10, color: '#555', flex: 1 },
  imageRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  imagePicker: { width: '48%', height: 150, borderWidth: 2, borderColor: '#F7B500', borderStyle: 'dashed', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: '100%', borderRadius: 8 },
  inputHeading: { fontSize: 16, fontWeight: 'bold', marginBottom: 6, color: '#555' },
  input: { borderWidth: 1, borderColor: '#eee', padding: 12, borderRadius: 8 },
  shareButton: { backgroundColor: '#F7B500', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  shareButtonText: { color: '#fff', fontWeight: 'bold' },
});
