// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const CheckoutScreen = () => {
//   const navigation = useNavigation();

//   const [receiverName, setReceiverName] = useState('');
//   const [receiverPhone, setReceiverPhone] = useState('');
//   const [deliveryAddress, setDeliveryAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('COD'); // Default COD

//   const handleCheckout = () => {
//     if (!receiverName.trim() || !receiverPhone.trim() || !deliveryAddress.trim()) {
//       alert('Please fill all details before checkout!');
//       return;
//     }

//     // After checkout navigate to Personal Info screen
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#F7B500" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Cart</Text>
//       </View>

//       {/* Form */}
//       <TextInput
//         placeholder="Receiver's Name"
//         placeholderTextColor="#999" 
//         style={styles.input}
//         value={receiverName}
//         onChangeText={setReceiverName}
//       />
//       <TextInput
//         placeholder="Receiver's Phone Number"
//         placeholderTextColor="#999" 
//         style={styles.input}
//         value={receiverPhone}
//         onChangeText={setReceiverPhone}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         placeholder="Delivery Address"
//         placeholderTextColor="#999" 
//         style={styles.input}
//         value={deliveryAddress}
//         onChangeText={setDeliveryAddress}
//       />

//       {/* Payment Methods */}
//       <Text style={styles.paymentTitle}>Payment Method</Text>
//       <View style={styles.paymentMethods}>
//         <TouchableOpacity
//           style={[styles.paymentButton, paymentMethod === 'COD' && styles.paymentButtonSelected]}
//           onPress={() => setPaymentMethod('COD')}
//         >
//           <Text style={paymentMethod === 'COD' ? styles.selectedText : styles.unselectedText}>COD</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.paymentButton, paymentMethod === 'Online' && styles.paymentButtonSelected]}
//           onPress={() => setPaymentMethod('Online')}
//         >
//           <Text style={paymentMethod === 'Online' ? styles.selectedText : styles.unselectedText}>Online</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Checkout Button */}
//       <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
//         <Text style={styles.checkoutButtonText}>Checkout</Text>
//       </TouchableOpacity>

//       {/* Empty cart text */}
//       <Text style={styles.emptyCartText}>Your cart is empty</Text>
//     </View>
//   );
// };

// export default CheckoutScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', padding: 16 },
//   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
//   headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 12 },
//   input: { backgroundColor: '#f5f5f5', padding: 12, borderRadius: 8, marginBottom: 12 },
//   paymentTitle: { fontWeight: 'bold', marginTop: 10, marginBottom: 8 },
//   paymentMethods: { flexDirection: 'row', marginBottom: 16 },
//   paymentButton: { paddingVertical: 8, paddingHorizontal: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, marginRight: 10 },
//   paymentButtonSelected: { backgroundColor: '#fff8e1', borderColor: '#F7B500' },
//   selectedText: { color: '#F7B500', fontWeight: 'bold' },
//   unselectedText: { color: '#333' },
//   checkoutButton: { backgroundColor: '#F7B500', padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
//   checkoutButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
//   emptyCartText: { textAlign: 'center', color: '#777' },
// });

// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const CheckoutScreen = () => {
//   const navigation = useNavigation();

//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     pincode: '',
//     city: '',
//     state: '',
//   });

//   const [paymentMethod, setPaymentMethod] = useState('COD');
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const loadCart = async () => {
//       const stored = await AsyncStorage.getItem('@cartItems');
//       setCartItems(stored ? JSON.parse(stored) : []);
//     };
//     loadCart();
//   }, []);

//   const total = cartItems.reduce((sum, item) => {
//     const price = parseInt(item.price.replace(/[^\d]/g, ''));
//     return sum + (isNaN(price) ? 0 : price);
//   }, 0);

//   const handleInput = (field, value) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//   };

//   const validateForm = () => {
//     const { name, phone, address, pincode, city, state } = form;
//     if (!name || !phone || !address || !pincode || !city || !state) {
//       Alert.alert('⚠️ Missing Details', 'Please fill in all required fields.');
//       return false;
//     }
//     if (!/^\d{6}$/.test(pincode)) {
//       Alert.alert('⚠️ Invalid Pincode', 'Pincode must be 6 digits.');
//       return false;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       Alert.alert('⚠️ Invalid Phone', 'Phone number must be 10 digits.');
//       return false;
//     }
//     return true;
//   };

//   const handleCheckout = async () => {
//     if (!validateForm()) return;

//     const orderSummary = `
//     Name: ${form.name}
//     Phone: ${form.phone}
//     Address: ${form.address}, ${form.city}, ${form.state} - ${form.pincode}
//     Payment: ${paymentMethod}
//     Total: ₹${total.toLocaleString('en-IN')}
//     `;

//     Alert.alert('✅ Order Confirmed', orderSummary, [
//       {
//         text: 'OK',
//         onPress: async () => {
//           await AsyncStorage.removeItem('@cartItems');
//           navigation.navigate('Home');
//         },
//       },
//     ]);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
    //   <View style={styles.header}>
    //     <TouchableOpacity onPress={() => navigation.goBack()}>
    //       <Ionicons name="arrow-back" size={24} color="#F7B500" />
    //     </TouchableOpacity>
    //     <Text style={styles.headerTitle}>Checkout</Text>
    //   </View>

//       {/* Form */}
//       <TextInput placeholder="Name"   placeholderTextColor="#555" style={styles.input} value={form.name} onChangeText={v => handleInput('name', v)} />
//       <TextInput placeholder="Contact Number" placeholderTextColor="#555"  style={styles.input} value={form.phone} onChangeText={v => handleInput('phone', v)} keyboardType="phone-pad" />
//       <TextInput placeholder="Address" placeholderTextColor="#555"  style={styles.input} value={form.address} onChangeText={v => handleInput('address', v)} multiline />
//       <TextInput placeholder="Pin Code"  placeholderTextColor="#555" style={styles.input} value={form.pincode} onChangeText={v => handleInput('pincode', v)} keyboardType="numeric" maxLength={6} />
//       <TextInput placeholder="City"  placeholderTextColor="#555" style={styles.input} value={form.city} onChangeText={v => handleInput('city', v)} />
//       <TextInput placeholder="State" placeholderTextColor="#555"  style={styles.input} value={form.state} onChangeText={v => handleInput('state', v)} />

//       {/* Payment */}
//       <Text style={styles.paymentLabel}>Payment Method</Text>
//       <View style={styles.paymentRow}>
//         <TouchableOpacity
//           style={[styles.paymentOption, paymentMethod === 'COD' && styles.selectedPayment]}
//           onPress={() => setPaymentMethod('COD')}
//         >
//           <Text style={paymentMethod === 'COD' ? styles.selectedText : styles.unselectedText}>Cash on Delivery</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.paymentOption, paymentMethod === 'Online' && styles.selectedPayment]}
//           onPress={() => setPaymentMethod('Online')}
//         >
//           <Text style={paymentMethod === 'Online' ? styles.selectedText : styles.unselectedText}>Online</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Total */}
//       <View style={styles.totalRow}>
//         <Text style={styles.totalLabel}>Total:</Text>
//         <Text style={styles.totalAmount}>₹{total.toLocaleString('en-IN')}</Text>
//       </View>

//       {/* Checkout */}
//       <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
//         <Text style={styles.checkoutText}>Place Order</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default CheckoutScreen;

// const styles = StyleSheet.create({
//   container: { padding: 16, backgroundColor: '#fff' },
//   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   headerTitle: { fontSize: 20, fontWeight: '700', marginLeft: 12, color: '#F7B500' },
//   input: {
//     backgroundColor: '#f5f5f5',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//     color: '#000',
//   },
//   paymentLabel: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 8,
//     marginTop: 8,
//     color: '#000',
//   },
//   paymentRow: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   paymentOption: {
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginRight: 10,
//   },
//   selectedPayment: {
//     backgroundColor: '#fff8e1',
//     borderColor: '#F7B500',
//   },
//   selectedText: {
//     color: '#F7B500',
//     fontWeight: 'bold',
//   },
//   unselectedText: {
//     color: '#444',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//   },
//   totalAmount: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#F7B500',
//   },
//   checkoutBtn: {
//     backgroundColor: '#F7B500',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   checkoutText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

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
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
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
    Alert.alert('✅ Order Placed', `Total ₹${total}`, [
      {
        text: 'OK',
        onPress: async () => {
          await AsyncStorage.removeItem('@cartItems');
          navigation.navigate('Home');
        },
      },
    ]);
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
