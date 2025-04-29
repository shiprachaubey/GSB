import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrdersScreen = () => {
  const [selectedTab, setSelectedTab] = useState('ToReceive');
  const navigation = useNavigation();

  // Dummy Data
  const ordersData = {
    ToReceive: [
      { id: '1', name: 'Product A', price: '$20', image: require('../assets/images/patanjali.png') },
      { id: '2', name: 'Product B', price: '$35', image: require('../assets/images/patanjali.png') },
    ],
    Completed: [
      { id: '3', name: 'Product C', price: '$50', image: require('../assets/images/patanjali.png')  },
    ],
    Cancelled: [
      { id: '4', name: 'Product D', price: '$15', image: require('../assets/images/patanjali.png')  },
    ],
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {['ToReceive', 'Completed', 'Cancelled'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={styles.tabButton}>
            <Text style={[styles.tabText, selectedTab === tab && styles.tabTextSelected]}>
              {tab === 'ToReceive' ? 'To Receive' : tab}
            </Text>
            {selectedTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Orders List */}
      <FlatList
        data={ordersData[selectedTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 12, color: '#F7B500' },
  tabRow: { flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderColor: '#eee' },
  tabButton: { paddingVertical: 10, alignItems: 'center' },
  tabText: { fontSize: 16, color: '#555' },
  tabTextSelected: { color: '#F7B500', fontWeight: 'bold' },
  tabUnderline: { marginTop: 6, height: 2, width: 30, backgroundColor: '#F7B500', borderRadius: 2 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f9f9f9', marginHorizontal: 16, marginVertical: 8, padding: 12, borderRadius: 8 },
  image: { width: 60, height: 60, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#777', marginTop: 4 },
});
