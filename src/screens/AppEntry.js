import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AppEntry({ navigation }) {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          navigation.replace('Home');
        } else {
          navigation.replace('Logo'); 
        }
      } catch (error) {
        console.error('Login check error:', error);
        navigation.replace('Splash');
      } finally {
        setChecking(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (checking) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2D3B59" />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
});
