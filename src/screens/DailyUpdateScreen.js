import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DailyUpdatesScreen = () => {
  const navigation = useNavigation();

  // Dummy data for now
  const updates = [
    {
      id: '1',
      title: 'My changes in body after connecting to gsbpathy',
      date: '2025-03-15T16:29:20.783+00:00',
      description: 'Descriptions',
      image: 'https://via.placeholder.com/300x200.png', // you can use any placeholder or local image
    },
  ];

  const renderUpdate = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity>
        <Text style={styles.readMore}>Read more</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Daily Updates</Text>
      </View>

      {/* Updates List */}
      <FlatList
        data={updates}
        keyExtractor={(item) => item.id}
        renderItem={renderUpdate}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Plus Button */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('NewDailyUpdate')}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default DailyUpdatesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 12, color: '#F7B500' },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 16 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  date: { fontSize: 12, color: '#777', marginBottom: 8 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 8 },
  description: { fontSize: 14, color: '#555' },
  readMore: { color: '#F7B500', marginTop: 4 },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#F7B500',
    borderRadius: 30,
    padding: 16,
    elevation: 5,
  },
});
