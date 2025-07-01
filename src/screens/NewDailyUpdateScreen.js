
import React, { useState } from 'react';
import { View, Text,StatusBar, TextInput, TouchableOpacity, Image, StyleSheet, Modal, Alert, PermissionsAndroid, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
const NewDailyUpdateScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showPostModal, setShowPostModal] = useState(false); // Modal state

  const pickImage = async (fromCamera) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };

    if (fromCamera) {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs access to your camera",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission denied");
          return;
        }
      }

      launchCamera(options, (response) => {
        if (!response.didCancel && response.assets) {
          setImage(response.assets[0].uri);
        }
      });
    } else {
      launchImageLibrary(options, (response) => {
        if (!response.didCancel && response.assets) {
          setImage(response.assets[0].uri);
        }
      });
    }
  };

  const handlePost = () => {
    if (!title.trim() || !description.trim() || !image) {
      Alert.alert('Validation Error', 'Please add all fields (Image, Title, Description)!');
      return;
    }
    setShowPostModal(true);
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
        <Text style={styles.headerTitle}>New Daily Update</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text style={styles.postButton}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Image Upload */}
      <TouchableOpacity style={styles.imageUpload} onPress={() => pickImage(false)}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <>
            <Ionicons name="image-outline" size={30} color="#F7B500" />
            <Text style={{ color: '#777', marginTop: 8 }}>Tap to add an image</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Inputs */}
      <TextInput
        placeholder="Give your update a title"
        placeholderTextColor="#000"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Share what's on your mind..."
        placeholderTextColor="#000"
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Bottom Buttons */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.galleryButton} onPress={() => pickImage(false)}>
          <Ionicons name="image-outline" size={20} color="#F7B500" />
          <Text style={styles.galleryText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton} onPress={() => pickImage(true)}>
          <Ionicons name="camera-outline" size={20} color="#fff" />
          <Text style={styles.cameraText}>Camera</Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        visible={showPostModal}
        transparent
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Ionicons name="checkmark-circle-outline" size={60} color="#F7B500" />
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalMessage}>Your daily update has been posted successfully.</Text>

            <TouchableOpacity
  style={styles.okButton}
  onPress={() => {
    setShowPostModal(false);
    navigation.goBack(); // ✅ Go back to the previous screen
  }}
>
  <Text style={styles.okButtonText}>OK</Text>
</TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
    </SafeAreaView>
  );
};

export default NewDailyUpdateScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#F7B500' },
  postButton: { color: '#F7B500', fontWeight: 'bold' },
  imageUpload: {
    height: 200,
    backgroundColor: '#f9f9f9',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#F7B500',
    borderRadius: 8,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: '100%', height: '100%', borderRadius: 8 },
  input: { backgroundColor: '#f5f5f5', marginHorizontal: 16, borderRadius: 8, padding: 12, marginTop: 12 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  galleryButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff8e1', padding: 10, borderRadius: 8 },
  galleryText: { color: '#F7B500', marginLeft: 6 },
  cameraButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7B500', padding: 10, borderRadius: 8 },
  cameraText: { color: '#fff', marginLeft: 6 },

  // Modal styles
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F7B500',
    marginTop: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  okButton: {
    backgroundColor: '#F7B500',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  okButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

