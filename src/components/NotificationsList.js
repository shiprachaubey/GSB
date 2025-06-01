// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const NotificationsList = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, title: 'New message from John', subtitle: 'Hey! How are you doing today?', time: 'Just now' },
//     { id: 2, title: 'Your order #35824 has shipped', subtitle: 'Expected delivery on March 12, 2025', time: '5 minutes ago' },
//     { id: 3, title: 'Sarah liked your post', subtitle: 'Your photo received 15 likes', time: '25 minutes ago' },
//     { id: 4, title: 'Payment successful', subtitle: 'Your subscription was renewed for $24.99', time: '2 hours ago' },
//     { id: 5, title: 'Weekend Sale! 25% off', subtitle: 'Use code WEEKEND25 at checkout', time: 'Yesterday' },
//     { id: 6, title: 'New message from Emily', subtitle: 'Are we still meeting tomorrow?', time: 'Yesterday' },
//     { id: 7, title: 'System update completed', subtitle: 'All your data is up to date', time: 'Mar 8' },
//   ]);

//   const handleClearAll = () => {
//     setNotifications([]);
//   };

//   return (

//         <SafeAreaView style={{flex:1}}> 
//           <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
//     <View style={{ flex: 1 }}>
//       <View style={styles.notificationHeader}>
//         <Text style={styles.notificationTitle}>Notifications</Text>
//         <TouchableOpacity onPress={handleClearAll}>
//           <Text style={styles.clearAll}>Clear All</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
//         {notifications.map((item) => (
//           <View key={item.id} style={styles.notificationCard}>
//             <Text style={styles.notificationCardTitle}>{item.title}</Text>
//             <Text style={styles.notificationCardSubtitle}>{item.subtitle}</Text>
//             <Text style={styles.notificationCardTime}>{item.time}</Text>
//           </View>
//         ))}
//         {notifications.length === 0 && (
//           <View style={styles.noNotification}><Text>No notifications found.</Text></View>
//         )}
//       </ScrollView>
//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   notificationHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 , marginTop:0},
//   notificationTitle: { fontSize: 20, fontWeight: '700' },
//   clearAll: { fontSize: 14, color: '#F7B500' },
//   notificationCard: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
//   notificationCardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
//   notificationCardSubtitle: { fontSize: 14, color: '#777', marginBottom: 4 },
//   notificationCardTime: { fontSize: 12, color: '#bbb' },
//   noNotification: { alignItems: 'center', marginTop: 50 }
// });

// export default NotificationsList;
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
