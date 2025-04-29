
// import React, { useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'; // 👈 important

// const MessagesScreen = () => {
//   const tabBarHeight = useBottomTabBarHeight(); // 👈 this automatically gets bottom tab bar height
//   const scrollViewRef = useRef(null);

//   const [messages, setMessages] = useState([{ id: 1, text: 'Hiii', time: '7:00 pm' }]);
//   const [inputText, setInputText] = useState('');

//   const sendMessage = () => {
//     if (inputText.trim() !== '') {
//       const newMessage = {
//         id: Date.now(),
//         text: inputText,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       };
//       setMessages([...messages, newMessage]);
//       setInputText('');

//       // Scroll to bottom after sending
//       setTimeout(() => {
//         scrollViewRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : tabBarHeight}
//       >
//         <View style={styles.container}>

//           {/* Header */}
//           <View style={styles.header}>
//             <Ionicons name="arrow-back" size={24} color="#F7B500" />
//             <Text style={styles.headerText}>Talk to our Experts</Text>
//           </View>

//           {/* Messages */}
//           <ScrollView
//             ref={scrollViewRef}
//             contentContainerStyle={[styles.messagesContainer, { paddingBottom: tabBarHeight + 80 }]} // 👈 extra padding to lift messages + input
//             showsVerticalScrollIndicator={false}
//           >
//             {messages.map((msg) => (
//               <View key={msg.id} style={styles.messageBubble}>
//                 <Text style={styles.messageText}>{msg.text}</Text>
//                 <Text style={styles.messageTime}>{msg.time}</Text>
//               </View>
//             ))}
//           </ScrollView>

//           {/* Input Box */}
//           <View style={[styles.inputContainer, { marginBottom: tabBarHeight }]}>
//             <TextInput
//               style={styles.input}
//               placeholder="Type a message"
//               placeholderTextColor='#666'
//               value={inputText}
//               onChangeText={setInputText}
//             />
//             <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//               <Ionicons name="send" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>

//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default MessagesScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerText: {
//     marginLeft: 8,
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#F7B500',
//   },
//   messagesContainer: {
//     padding: 16,
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//   },
//   messageBubble: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#F7B500',
//     padding: 10,
//     borderRadius: 12,
//     marginBottom: 8,
//     maxWidth: '70%',
//   },
//   messageText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   messageTime: {
//     color: '#fff',
//     fontSize: 10,
//     textAlign: 'right',
//     marginTop: 4,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 12,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: '#F7B500',
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'; // 👈 Important!

// const MessagesScreen = () => {
//   const tabBarHeight = useBottomTabBarHeight(); // 👈 Get the height of Bottom Navigation Bar
//   const [messages, setMessages] = useState([{ id: 1, text: 'Hiii', time: '7:00 pm' }]);
//   const [inputText, setInputText] = useState('');

//   const sendMessage = () => {
//     if (inputText.trim() !== '') {
//       const newMessage = { id: Date.now(), text: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
//       setMessages([...messages, newMessage]);
//       setInputText('');
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={tabBarHeight} // 👈 important to push correctly
//       >
//         <View style={styles.container}>

//           {/* Header */}
//           <View style={styles.header}>
//             <Ionicons name="arrow-back" size={24} color="#F7B500" />
//             <Text style={styles.headerText}>Talk to our Experts</Text>
//           </View>

//           {/* Messages */}
//           <ScrollView contentContainerStyle={[styles.messagesContainer, { paddingBottom: tabBarHeight + 10 }]}>
//             {messages.map((msg) => (
//               <View key={msg.id} style={styles.messageBubble}>
//                 <Text style={styles.messageText}>{msg.text}</Text>
//                 <Text style={styles.messageTime}>{msg.time}</Text>
//               </View>
//             ))}
//           </ScrollView>

//           {/* Input */}
//           <View style={[styles.inputContainer, { marginBottom: tabBarHeight }]}>
//             <TextInput
//               style={styles.input}
//               placeholder="Type a message"
//               placeholderTextColor='#555'
//               value={inputText}
//               onChangeText={setInputText}
//             />
//             <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//               <Ionicons name="send" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>

//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default MessagesScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerText: {
//     marginLeft: 8,
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#F7B500',
//   },
//   messagesContainer: {
//     padding: 16,
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//   },
//   messageBubble: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#F7B500',
//     padding: 10,
//     borderRadius: 12,
//     marginBottom: 8,
//     maxWidth: '70%',
//   },
//   messageText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   messageTime: {
//     color: '#fff',
//     fontSize: 10,
//     textAlign: 'right',
//     marginTop: 4,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 12,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: '#F7B500',
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'; // 👈 Important!

const MessagesScreen = () => {
  const tabBarHeight = useBottomTabBarHeight(); // 👈 Get the height of Bottom Navigation Bar
  const [messages, setMessages] = useState([{ id: 1, text: 'Hiii', time: '7:00 pm' }]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = { id: Date.now(), text: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={tabBarHeight} // 👈 important to push correctly
      >
        <View style={styles.container}>

          {/* Header */}
          <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} color="#F7B500" />
            <Text style={styles.headerText}>Talk to our Experts</Text>
          </View>

          {/* Messages */}
          <ScrollView contentContainerStyle={[styles.messagesContainer, { paddingBottom: tabBarHeight + 10 }]}>
            {messages.map((msg) => (
              <View key={msg.id} style={styles.messageBubble}>
                <Text style={styles.messageText}>{msg.text}</Text>
                <Text style={styles.messageTime}>{msg.time}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Input */}
          <View style={[styles.inputContainer, { marginBottom: tabBarHeight }]}>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
              placeholderTextColor='#555'
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#F7B500',
  },
  messagesContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#F7B500',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    maxWidth: '70%',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  messageTime: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'right',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#F7B500',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
