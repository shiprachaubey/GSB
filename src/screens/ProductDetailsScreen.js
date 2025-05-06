import {React, useState, useCallback} from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const ProductDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;

  const handleAddToCart = async () => {
    try {
      const stored = await AsyncStorage.getItem('@cartItems');
      let cart = stored ? JSON.parse(stored) : [];
  
      const exists = cart.find(item => item.title === product.title);
      if (!exists) {
        cart.push(product);
        await AsyncStorage.setItem('@cartItems', JSON.stringify(cart));
        Alert.alert('✅ Success', 'Item added to cart');
      } else {
        Alert.alert('⚠️ Already in Cart', 'This item is already in your cart');
      }
  
      setCartCount(cart.length); // update badge immediately
    } catch (err) {
      console.error('❌ Error:', err);
      Alert.alert('Error', 'Something went wrong while adding to cart');
    }
  };
  const [cartCount, setCartCount] = useState(0);

useFocusEffect(
  useCallback(() => {
    const loadCartCount = async () => {
      const stored = await AsyncStorage.getItem('@cartItems');
      const items = stored ? JSON.parse(stored) : [];
      setCartCount(items.length);
    };
    loadCartCount();
  }, [])
);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.header}>
  <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
  <Text style={styles.headerTitle}>Product Details</Text>

  <TouchableOpacity style={styles.cartIconWrapper} onPress={() => navigation.navigate('Cart')}>
    <Ionicons name="cart" size={24} color="#F7B500" />
    {cartCount > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{cartCount}</Text>
      </View>
    )}
  </TouchableOpacity>
</View>

      <Image source={product.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <Text style={styles.description}>
        This is a placeholder description for {product.title}. Add real product information here.
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buyButton} onPress={() => {
    
    navigation.navigate('Checkout');
  }}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
  <Text style={styles.cartButtonText}>Add to Cart</Text>
</TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartIconWrapper: {
    marginLeft: 'auto',
    position: 'relative',
    padding: 6,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#F7B500',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#F7B500',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 30,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  buyButton: {
    backgroundColor: '#F7B500',
    flex: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cartButton: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 14,
    borderWidth: 1,
    borderColor: '#F7B500',
    borderRadius: 8,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#F7B500',
    fontWeight: '600',
  },
});
