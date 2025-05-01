import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image , StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const GSBPathyServicesScreen = () => {
  const navigation = useNavigation();

  const services = [
    {
      title: 'IBS',
      description: 'IBS (irritable bowel syndrome) is a lifestyle disorder that affects the gastrointestinal tract and large intestine (colon).',
    image: require('../assets/images/IBS.webp'), 
    },
    {
      title: 'Ulcerative Colitis',
      description: 'Chronic inflammatory bowel disease affecting the colon, causing abdominal pain, diarrhea, and rectal bleeding.',
      image: require('../assets/images/uncelrative.jpeg'), 
    },

    {
        title: ' Crohn ',
        description: 'Chronic inflammatory bowel disease affecting the colon, causing abdominal pain, diarrhea, and rectal bleeding.',
        image: require('../assets/images/Crohns.jpeg'), 
      },
 
  ];

  const handleCall = () => {
    Linking.openURL('tel:1234567890'); // 👈 Replace with your number
  };

  const handleMessage = () => {
    navigation.navigate('Message'); // 👈 Navigate to Messages screen
  };

  return (
     <SafeAreaView style={{flex:1}}> 
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>GSBPathy Services</Text>
      </View>

      {/* Text */}
      <Text style={styles.infoText}>We’re here to help! Connect with our experts to find the right solution for your problem.</Text>

      {/* Call and Message Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleCall}>
          <Ionicons name="call" size={20} color="#fff" />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMessage}>
          <Ionicons name="chatbubble-ellipses" size={20} color="#fff" />
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>

      {/* Services Cards */}
      {services.map((service, idx) => (
        <View key={idx} style={styles.card}>
          <Image source={service.image} style={styles.serviceImage} />
          <Text style={styles.serviceTitle}>{service.title}</Text>
          <Text style={styles.serviceDesc}>{service.description}</Text>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};

export default GSBPathyServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#F7B500',
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 16,
    paddingHorizontal: 20,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#F7B500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  card: {
    margin: 16,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F7B500',
    backgroundColor: '#fff',
    elevation: 2,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 8,
    color: '#F7B500',
  },
  serviceDesc: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
});
