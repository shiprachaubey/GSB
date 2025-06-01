

// import React, { useEffect, useState } from 'react';
// import {
//   View, Text, StyleSheet, FlatList, Image,
//   TouchableOpacity, Alert, StatusBar
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const CartScreen = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     loadCart();
//     const unsubscribe = navigation.addListener('focus', loadCart); // refresh on screen focus
//     return unsubscribe;
//   }, [navigation]);

//   const loadCart = async () => {
//     try {
//       const stored = await AsyncStorage.getItem('@cartItems');
//       const items = stored ? JSON.parse(stored) : [];
//       setCartItems(items);
//     } catch (error) {
//       console.error('❌ Error loading cart:', error);
//     }
//   };

//   const removeItem = async (title) => {
//     const updatedCart = cartItems.filter(item => item.title !== title);
//     setCartItems(updatedCart);
//     await AsyncStorage.setItem('@cartItems', JSON.stringify(updatedCart));
//   };

//   const total = cartItems.reduce((sum, item) => {
//     const price = parseInt(item.price.replace(/[^\d]/g, '')); // Remove ₹ and commas
//     return sum + (isNaN(price) ? 0 : price);
//   }, 0);

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={item.image} style={styles.image} resizeMode="contain" />
//       <View style={styles.info}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.price}>{item.price}</Text>
//         <TouchableOpacity onPress={() => removeItem(item.title)}>
//           <Text style={styles.remove}>Remove</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
//         <Text style={styles.headerTitle}>My Cart</Text>
//       </View>

//       {cartItems.length === 0 ? (
//         <View style={styles.emptyBox}>
//           <Text style={styles.emptyText}>Your cart is empty</Text>
//         </View>
//       ) : (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item, index) => item.title + index}
//             renderItem={renderItem}
//             contentContainerStyle={{ padding: 16 }}
//           />

//           <View style={styles.footer}>
//             <Text style={styles.total}>Total: ₹{total.toLocaleString('en-IN')}</Text>
//             <TouchableOpacity style={styles.checkoutButton}  onPress={() => navigation.navigate('Checkout')}>
//               <Text style={styles.checkoutText}>Proceed to Checkout</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomColor: '#eee',
//     borderBottomWidth: 1,
//   },
//   headerTitle: {
//     marginLeft: 8,
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#F7B500',
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 12,
//     marginBottom: 16,
//     padding: 12,
//     alignItems: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginRight: 12,
//   },
//   info: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 14,
//     color: '#F7B500',
//     marginBottom: 8,
//   },
//   remove: {
//     color: 'red',
//     fontSize: 12,
//   },
//   footer: {
//     padding: 16,
//     borderTopColor: '#eee',
//     borderTopWidth: 1,
//     backgroundColor: '#fff',
//   },
//   total: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
//   checkoutButton: {
//     backgroundColor: '#F7B500',
//     padding: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   checkoutText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   emptyBox: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#999',
//   },
// });


import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image,
  TouchableOpacity, Alert, StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCartItems();
    const unsubscribe = navigation.addListener('focus', fetchCartItems);
    return unsubscribe;
  }, [navigation]);

  const fetchCartItems = async () => {
    try {
      const res = await axios.get('http://192.168.1.46:9000/api/cart/demo-user-id'); // replace with real user ID
      const items = res.data.cart?.items || [];
      setCartItems(items);
    } catch (error) {
      console.error('❌ Error fetching cart:', error);
      Alert.alert('Error', 'Could not load cart items');
    }
  };

  const removeItem = async (productId) => {
    try {
      await axios.delete(`http://192.168.1.46:9000/api/cart/demo-user-id/remove/${productId}`);
      fetchCartItems(); // refresh
    } catch (err) {
      console.error('❌ Error removing item:', err);
      Alert.alert('Failed', 'Could not remove item');
    }
  };

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price?.toString().replace(/[^\d]/g, ''));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <TouchableOpacity onPress={() => removeItem(item.productId)}>
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => item.productId + index}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 16 }}
          />

          <View style={styles.footer}>
            <Text style={styles.total}>Total: ₹{total.toLocaleString('en-IN')}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#F7B500',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#F7B500',
    marginBottom: 8,
  },
  remove: {
    color: 'red',
    fontSize: 12,
  },
  footer: {
    padding: 16,
    borderTopColor: '#eee',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  checkoutButton: {
    backgroundColor: '#F7B500',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

