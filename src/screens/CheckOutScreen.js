

import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const stored = await AsyncStorage.getItem('@cartItems');
      setCartItems(stored ? JSON.parse(stored) : []);
    };
    loadCart();
  }, []);

const total = cartItems.reduce((sum, item) => {
  const price = typeof item.price === 'string'
    ? parseInt(item.price.replace(/[^\d]/g, ''))
    : Number(item.price);

  return sum + (isNaN(price) ? 0 : price);
}, 0);


  const handleInput = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
  const { name, phone, address, pincode, city, state } = form;
  if (!name || !phone || !address || !pincode || !city || !state) {
    Alert.alert('❗ Missing Info', 'Please fill all fields.');
    return;
  }

  try {
    const response = await fetch('http://13.60.227.51:9000/api/orders/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'demo-user-id', // replace this dynamically in production
        contactInfo: { name, phone, address, pincode, city, state },
        paymentMethod,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      Alert.alert('✅ Order Placed', `Order ID: ${result.orderId}`, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } else {
      Alert.alert('❌ Failed', result.message || 'Something went wrong');
    }
  } catch (err) {
    console.error(err);
    Alert.alert('❌ Network Error', 'Could not connect to server');
  }
};

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Section 1: Contact Details */}
      <Text style={styles.sectionTitle}>Contact Details</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#555" 
        style={styles.input}
        value={form.name}
        onChangeText={v => handleInput('name', v)}
      />
      <TextInput
        placeholder="Mobile Number"
        placeholderTextColor="#555" 
        style={styles.input}
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={v => handleInput('phone', v)}
      />

      {/* Section 2: Address */}
      <Text style={styles.sectionTitle}>Address</Text>
      <TextInput
        placeholder="Pin Code"
        placeholderTextColor="#555" 
        style={styles.input}
        keyboardType="numeric"
        maxLength={6}
        value={form.pincode}
        onChangeText={v => handleInput('pincode', v)}
      />
      <TextInput
        placeholder="Address (House No, Street, Area)"
        placeholderTextColor="#555" 
        style={styles.input}
        value={form.address}
        onChangeText={v => handleInput('address', v)}
      />
      <Text style={styles.helperText}>*Please include flat/house no and society details</Text>
      <TextInput
        placeholder="City/Town"
        placeholderTextColor="#555" 
        style={styles.input}
        value={form.city}
        onChangeText={v => handleInput('city', v)}
      />
      <TextInput
        placeholder="State"
        placeholderTextColor="#555" 
        style={styles.input}
        value={form.state}
        onChangeText={v => handleInput('state', v)}
      />

      {/* Section 3: Payment Method */}
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <View style={styles.paymentRow}>
        {['COD', 'Online'].map(method => (
          <TouchableOpacity
            key={method}
            style={[styles.paymentOption, paymentMethod === method && styles.selectedPayment]}
            onPress={() => setPaymentMethod(method)}
          >
            <Text style={paymentMethod === method ? styles.paymentTextSelected : styles.paymentText}>
              {method}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
headerTitle: { fontSize: 20, fontWeight: '700', marginLeft: 12, color: '#F7B500' },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    color: '#000',
    elevation: 1,
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    marginLeft: 4,
  },
  paymentRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedPayment: {
    backgroundColor: '#FFF8E1',
    borderColor: '#F7B500',
  },
  paymentText: {
    color: '#333',
  },
  paymentTextSelected: {
    color: '#F7B500',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelBtn: {
    flex: 1,
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#F7B500',
    padding: 14,
    borderRadius: 10,
    marginLeft: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: '700',
  },
});
