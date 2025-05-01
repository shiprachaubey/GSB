import React from 'react';
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

  return (
     <SafeAreaView style={{flex:1}}> 
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Products</Text>
      </View>

      {/* Products */}
      <ScrollView contentContainerStyle={styles.productsContainer}>
        <View style={styles.grid}>
          {products.map((item, idx) => (
            <View key={idx} style={styles.card}>
              <Image source={item.image} style={styles.productImage} resizeMode="contain" />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
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
});
