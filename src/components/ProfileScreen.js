
import {React, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

import { Modal } from 'react-native'; // Import Modal




const ProfileScreen = ({navigation}) => {

  const renderItem = (iconName, title) => (
    <TouchableOpacity
    style={styles.itemRow}
    key={title}
    onPress={() => {
      if (title === 'Personal Info') {
        navigation.navigate('PersonalInfo');
      } else if (title === 'My Story') {
        navigation.navigate('MyStory');
      } else if (title === 'Cart') {
        navigation.navigate('Cart'); 
      } else if (title === 'My Order') {
        navigation.navigate('Orders'); 
      }else if (title === 'Consultancy') {
          navigation.navigate('Consultancy');
       } else if (title === 'Daily Updates') {
            navigation.navigate('DailyUpdates');
        }else if (title === 'Notification') {
          navigation.navigate('Notification');
        }else if (title === 'Message') {
          navigation.navigate('Message');
        } else if (title === 'Call') {
          Linking.openURL('tel:9999999'); 
        } else if (title === 'Logout') {
          setShowLogoutModal(true); 
        }else {
          console.log(`${title} clicked`);
        }
      }}
    >
      <View style={styles.itemLeft}>
        <MaterialCommunityIcons name={iconName} size={24} color="#F7B500" />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
  const [showLogoutModal, setShowLogoutModal] = useState(false); // New state
  return (

    
    <ScrollView 
    contentContainerStyle={[styles.scrollContainer, { paddingBottom: 120 }]} 
  >
      <Modal
  visible={showLogoutModal}
  transparent
  animationType="fade"
>
  <View style={styles.modalBackground}>
    <View style={styles.modalBox}>
      <Text style={styles.modalTitle}>Logout</Text>
      <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>

      <View style={styles.modalButtonRow}>
        <TouchableOpacity style={styles.modalButtonCancel} onPress={() => setShowLogoutModal(false)}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalButtonSure} onPress={() => {
          setShowLogoutModal(false);
          navigation.navigate('Splash');
        }}>
          <Text style={styles.sureButtonText}>Sure</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

      {/* Top Profile */}
      <View style={styles.profileTop}>
        <View style={styles.avatarWrapper}>
          <Ionicons name="person" size={60} color="#fff" />
        </View>
        <Text style={styles.nameText}>Hi, Anshuman</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('PersonalInfo')}>
  <Text style={styles.editButtonText}>Edit Profile</Text>
</TouchableOpacity>
      </View>

      {/* My Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Profile</Text>
        {renderItem('account-outline', 'Personal Info')}
        {renderItem('book-open-variant', 'My Story')}
      </View>

      {/* My Activities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Activitiessss</Text>
        {renderItem('calendar', 'Daily Updates')}
        {renderItem('cart-outline', 'Cart')}
        {renderItem('clipboard-list-outline', 'My Order')}
        {renderItem('credit-card-outline', 'My Subscription')}
      </View>

      {/* Communication Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Communication</Text>
        {renderItem('bell-outline', 'Notification')}
        {renderItem('phone-outline', 'Call')}
        {renderItem('chat-outline', 'Message')}
        {renderItem('account-tie-outline', 'Consultancy')}
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {renderItem('logout', 'Logout')}

      </View>

    </ScrollView>
  );
};



export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  scrollContainer: {
    flexGrow: 1,  
  },
  profileTop: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
    // Removed elevation
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F7B500',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: '#F7B500',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    // Removed elevation
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 12,
  },
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
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F7B500',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonCancel: {
    flex: 1,
    backgroundColor: '#eee',
    marginRight: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonSure: {
    flex: 1,
    backgroundColor: '#F7B500',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  sureButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});
