// // MessagesScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const MessagesScreen = () => {
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
//     <View style={styles.container}>
      
//       {/* Header */}
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={24} color="#F7B500" />
//         <Text style={styles.headerText}>Talk to our Experts</Text>
//       </View>

//       {/* Messages */}
//       <ScrollView contentContainerStyle={styles.messagesContainer}>
//         {messages.map((msg) => (
//           <View key={msg.id} style={styles.messageBubble}>
//             <Text style={styles.messageText}>{msg.text}</Text>
//             <Text style={styles.messageTime}>{msg.time}</Text>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Input */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message"
//           value={inputText}
//           onChangeText={setInputText}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Ionicons name="send" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//     </View>
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
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {
  const [messages, setMessages] = useState([{ id: 1, text: 'Hiii', time: '7:00 pm' }]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation(); // 👈 for back button

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = { id: Date.now(), text: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Talk to our Experts</Text>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.messagesContainer}>
          {messages.map((msg) => (
            <View key={msg.id} style={styles.messageBubble}>
              <Text style={styles.messageText}>{msg.text}</Text>
              <Text style={styles.messageTime}>{msg.time}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </View>
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
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  messageBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#F7B500',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 10,
    maxWidth: '75%',
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
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    height: 44,
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
