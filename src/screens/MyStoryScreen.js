import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyStoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Stories</Text>
      </View>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <Ionicons name="bookmark-outline" size={60} color="#F7B500" />
        <Text style={styles.title}>No Stories Yet</Text>
        <Text style={styles.subtitle}>Share your journey and inspire others by adding your success story.</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddStory')}>
          <Text style={styles.addButtonText}>Add Your First Story</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyStoriesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginLeft: 12 },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
  subtitle: { textAlign: 'center', color: '#555', marginBottom: 20 },
  addButton: { backgroundColor: '#F7B500', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
});
