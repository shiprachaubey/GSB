
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get('http://192.168.1.46:9000/api/notifications/notifications'); // replace with your IP
      setNotifications(res.data.data || []);
    } catch (err) {
      console.error('Error fetching notifications:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleClearAll = () => {
    setNotifications([]);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={{ flex: 1 }}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>Notifications</Text>
          <TouchableOpacity onPress={handleClearAll}>
            <Text style={styles.clearAll}>Clear All</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#F7B500" style={{ marginTop: 20 }} />
        ) : (
          <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}>
            {notifications.map((item) => (
              <View key={item._id} style={styles.notificationCard}>
                <Text style={styles.notificationCardTitle}>{item.title}</Text>
                <Text style={styles.notificationCardSubtitle}>{item.message}</Text>
                <Text style={styles.notificationCardTime}>{formatDate(item.sentAt)}</Text>
              </View>
            ))}
            {notifications.length === 0 && (
              <View style={styles.noNotification}><Text>No notifications found.</Text></View>
            )}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notificationHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  notificationTitle: { fontSize: 20, fontWeight: '700' },
  clearAll: { fontSize: 14, color: '#F7B500' },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  notificationCardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  notificationCardSubtitle: { fontSize: 14, color: '#777', marginBottom: 4 },
  notificationCardTime: { fontSize: 12, color: '#bbb' },
  noNotification: { alignItems: 'center', marginTop: 50 },
});

export default NotificationsList;
