import {React, useState, useEffect }from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';



const SupplementsScreen = () => {
  const navigation = useNavigation();

  const products = [
    {
      title: 'Divya Gashar Churna',
      price: '₹4,999',
      image: require('../assets/images/patanjali.png'), // 👈 Replace with your actual images
    },
    {
      title: 'Divya Kanchnar Ghanvati',
      price: '₹2,999',
      image: require('../assets/images/patanjali.png'), 
    },
    {
      title: 'Divya Trighan 60 N',
      price: '₹1,200',
      image: require('../assets/images/patanjali.png'), 
    },
    {
      title: 'Divya Trighan 60 N',
      price: '₹300',
      image: require('../assets/images/patanjali.png'), 
    },
  ];
  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const loadCart = async () => {
    const stored = await AsyncStorage.getItem('@cartItems');
    const items = stored ? JSON.parse(stored) : [];
    setCartItems(items);
  };

  const unsubscribe = navigation.addListener('focus', loadCart);
  return unsubscribe;
}, [navigation]);


  return (
     <SafeAreaView style={{flex:1}}> 
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Products</Text>
      </View> */}
<View style={styles.header}>
  <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
  <Text style={styles.headerTitle}>Products</Text>

  <TouchableOpacity style={styles.cartIconWrapper} onPress={() => navigation.navigate('Checkout')}>
    <Ionicons name="cart" size={24} color="#F7B500" />
    {cartItems.length > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{cartItems.length}</Text>
      </View>
    )}
  </TouchableOpacity>
</View>

      {/* Products */}
      <ScrollView contentContainerStyle={styles.productsContainer}>
        <View style={styles.grid}>
        {products.map((item, idx) => (
      <TouchableOpacity
       key={idx}
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      activeOpacity={0.9}
  >
    <Image source={item.image} style={styles.productImage} resizeMode="contain" />
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>

    
    <TouchableOpacity style={styles.buyButton} 
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      activeOpacity={0.9}>
      
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
     
    
  </TouchableOpacity>
))}

        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default SupplementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafa', // very light background
  },
  cartIconWrapper: {
    marginLeft: 'auto',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -6,
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
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#F7B500',
  },
  productsContainer: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#000',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F7B500',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#F7B500',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  // cartButton: {
  //   backgroundColor: '#fff',
    
  //   paddingVertical: 8,
  //   borderRadius: 6,
  //   alignItems: 'center',
  //   flex: 1,
  // },
  // cartButtonText: {
  //   color: '#F7B500',
  //   fontWeight: '600',
  //   textAlign: 'center',
  // },
  
});
