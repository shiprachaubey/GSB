// // // ProfileScreen.js
// // import React from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// // const ProfileScreen = () => {
// //   return (
// //     <ScrollView style={styles.container}>
      
// //       {/* Top Profile */}
// //       <View style={styles.profileTop}>
// //         <View style={styles.avatarWrapper}>
// //           <Ionicons name="person" size={60} color="#fff" />
// //         </View>
// //         <Text style={styles.nameText}>Hi, Anshuman</Text>
// //         <TouchableOpacity style={styles.editButton}>
// //           <Text style={styles.editButtonText}>Edit Profile</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* My Profile Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>My Profile</Text>
// //         {renderItem('account-outline', 'Personal Info')}
// //         {renderItem('book-open-variant', 'My Story')}
// //       </View>

// //       {/* My Activities Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>My Activities</Text>
// //         {renderItem('calendar', 'Daily Updates')}
// //         {renderItem('cart-outline', 'Cart')}
// //         {renderItem('clipboard-list-outline', 'My Order')}
// //         {renderItem('credit-card-outline', 'My Subscription')}
// //       </View>

// //       {/* Communication Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>Communication</Text>
// //         {renderItem('bell-outline', 'Notification')}
// //         {renderItem('phone-outline', 'Call')}
// //         {renderItem('chat-outline', 'Message')}
// //       </View>

// //     </ScrollView>
// //   );
// // };

// // const renderItem = (iconName, title) => (
// //   <TouchableOpacity style={styles.itemRow} key={title}>
// //     <View style={styles.itemLeft}>
// //       <MaterialCommunityIcons name={iconName} size={24} color="#F7B500" />
// //       <Text style={styles.itemText}>{title}</Text>
// //     </View>
// //     <Ionicons name="chevron-forward" size={20} color="#999" />
// //   </TouchableOpacity>
// // );

// // export default ProfileScreen;

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#f9f9f9' },
// //   profileTop: {
// //     backgroundColor: '#fff',
// //     margin: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     paddingVertical: 20,
// //     elevation: 3,
// //   },
// //   avatarWrapper: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     backgroundColor: '#F7B500',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   nameText: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     marginBottom: 8,
// //   },
// //   editButton: {
// //     backgroundColor: '#F7B500',
// //     paddingHorizontal: 20,
// //     paddingVertical: 8,
// //     borderRadius: 20,
// //   },
// //   editButtonText: {
// //     color: '#fff',
// //     fontWeight: '600',
// //     fontSize: 14,
// //   },
// //   section: {
// //     backgroundColor: '#fff',
// //     marginHorizontal: 16,
// //     marginTop: 16,
// //     borderRadius: 10,
// //     paddingVertical: 10,
// //     paddingHorizontal: 16,
// //     elevation: 2,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     fontWeight: '700',
// //     color: '#333',
// //     marginBottom: 10,
// //   },
// //   itemRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingVertical: 12,
// //     borderBottomWidth: 0.5,
// //     borderColor: '#eee',
// //   },
// //   itemLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 12,
// //   },
// //   itemText: {
// //     fontSize: 14,
// //     color: '#000',
// //     marginLeft: 12,
// //   },
// // });
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const ProfileScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
      
//       {/* Top Profile */}
//       <View style={styles.profileTop}>
//         <View style={styles.avatarWrapper}>
//           <Ionicons name="person" size={60} color="#fff" />
//         </View>
//         <Text style={styles.nameText}>Hi, Anshuman</Text>
//         <TouchableOpacity style={styles.editButton}>
//           <Text style={styles.editButtonText}>Edit Profile</Text>
//         </TouchableOpacity>
//       </View>

//       {/* My Profile Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>My Profile</Text>
//         {renderItem('account-outline', 'Personal Info')}
//         {renderItem('book-open-variant', 'My Story')}
//       </View>

//       {/* My Activities Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>My Activities</Text>
//         {renderItem('calendar', 'Daily Updates')}
//         {renderItem('cart-outline', 'Cart')}
//         {renderItem('clipboard-list-outline', 'My Order')}
//         {renderItem('credit-card-outline', 'My Subscription')}
//       </View>

//       {/* Communication Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Communication</Text>
//         {renderItem('bell-outline', 'Notification')}
//         {renderItem('phone-outline', 'Call')}
//         {renderItem('chat-outline', 'Message')}
//         {renderItem('account-tie-outline', 'Consultancy')}
//       </View>

//       {/* Account Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Account</Text>
//         {renderItem('logout', 'Logout')}
//       </View>

//     </ScrollView>
//   );
// };

// const renderItem = (iconName, title) => (
//   <TouchableOpacity style={styles.itemRow} key={title}>
//     <View style={styles.itemLeft}>
//       <MaterialCommunityIcons name={iconName} size={24} color="#F7B500" />
//       <Text style={styles.itemText}>{title}</Text>
//     </View>
//     <Ionicons name="chevron-forward" size={20} color="#999" />
//   </TouchableOpacity>
// );

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f9f9f9' },
//   profileTop: {
//     backgroundColor: '#fff',
//     margin: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 20,
//     elevation: 3,
//   },
//   avatarWrapper: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#F7B500',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   nameText: {
//     fontSize: 20,
//     fontWeight: '700',
//     marginBottom: 8,
//   },
//   editButton: {
//     backgroundColor: '#F7B500',
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   editButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   section: {
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     marginTop: 16,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     elevation: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 10,
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 0.5,
//     borderColor: '#eee',
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   itemText: {
//     fontSize: 14,
//     color: '#000',
//     marginLeft: 12,
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <ScrollView 
    contentContainerStyle={[styles.scrollContainer, { paddingBottom: 120 }]} // 👈 Add paddingBottom
  >
      
      {/* Top Profile */}
      <View style={styles.profileTop}>
        <View style={styles.avatarWrapper}>
          <Ionicons name="person" size={60} color="#fff" />
        </View>
        <Text style={styles.nameText}>Hi, Anshuman</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* My Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Profile</Text>
        {renderItem('account-outline', 'Personal Info')}
        {renderItem('book-open-variant', 'My Story')}
      </View>

      {/* My Activities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Activities</Text>
        {renderItem('calendar', 'Daily Updates')}
        {renderItem('cart-outline', 'Cart')}
        {renderItem('clipboard-list-outline', 'My Order')}
        {renderItem('credit-card-outline', 'My Subscription')}
      </View>

      {/* Communication Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Communication</Text>
        {renderItem('bell-outline', 'Notification')}
        {renderItem('phone-outline', 'Call')}
        {renderItem('chat-outline', 'Message')}
        {renderItem('account-tie-outline', 'Consultancy')}
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {renderItem('logout', 'Logout')}

      </View>

    </ScrollView>
  );
};

const renderItem = (iconName, title) => (
  <TouchableOpacity style={styles.itemRow} key={title}>
    <View style={styles.itemLeft}>
      <MaterialCommunityIcons name={iconName} size={24} color="#F7B500" />
      <Text style={styles.itemText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  scrollContainer: {
    flexGrow: 1,  // Ensure that ScrollView content grows with content
  },
  profileTop: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
    // Removed elevation
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F7B500',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: '#F7B500',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    // Removed elevation
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 12,
  },
});
