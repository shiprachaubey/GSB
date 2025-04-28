import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartScreen = () => {
  const navigation = useNavigation();

  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD'); // Default COD

  const handleCheckout = () => {
    if (!receiverName.trim() || !receiverPhone.trim() || !deliveryAddress.trim()) {
      alert('Please fill all details before checkout!');
      return;
    }

    // After checkout navigate to Personal Info screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      {/* Form */}
      <TextInput
        placeholder="Receiver's Name"
        placeholderTextColor="#999" 
        style={styles.input}
        value={receiverName}
        onChangeText={setReceiverName}
      />
      <TextInput
        placeholder="Receiver's Phone Number"
        placeholderTextColor="#999" 
        style={styles.input}
        value={receiverPhone}
        onChangeText={setReceiverPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Delivery Address"
        placeholderTextColor="#999" 
        style={styles.input}
        value={deliveryAddress}
        onChangeText={setDeliveryAddress}
      />

      {/* Payment Methods */}
      <Text style={styles.paymentTitle}>Payment Method</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity
          style={[styles.paymentButton, paymentMethod === 'COD' && styles.paymentButtonSelected]}
          onPress={() => setPaymentMethod('COD')}
        >
          <Text style={paymentMethod === 'COD' ? styles.selectedText : styles.unselectedText}>COD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentButton, paymentMethod === 'Online' && styles.paymentButtonSelected]}
          onPress={() => setPaymentMethod('Online')}
        >
          <Text style={paymentMethod === 'Online' ? styles.selectedText : styles.unselectedText}>Online</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>

      {/* Empty cart text */}
      <Text style={styles.emptyCartText}>Your cart is empty</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 12 },
  input: { backgroundColor: '#f5f5f5', padding: 12, borderRadius: 8, marginBottom: 12 },
  paymentTitle: { fontWeight: 'bold', marginTop: 10, marginBottom: 8 },
  paymentMethods: { flexDirection: 'row', marginBottom: 16 },
  paymentButton: { paddingVertical: 8, paddingHorizontal: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, marginRight: 10 },
  paymentButtonSelected: { backgroundColor: '#fff8e1', borderColor: '#F7B500' },
  selectedText: { color: '#F7B500', fontWeight: 'bold' },
  unselectedText: { color: '#333' },
  checkoutButton: { backgroundColor: '#F7B500', padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  checkoutButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  emptyCartText: { textAlign: 'center', color: '#777' },
});
