import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, FlatList, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const AgeScreen = ({ navigation }) => {
  const [selectedAge, setSelectedAge] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const ages = Array.from({ length: 97 }, (_, i) => i + 4);

  const handleContinue = () => {
    if (selectedAge !== null) {
      // alert(`Selected Age: ${selectedAge}`);
      navigation.navigate('Weight', { age: selectedAge });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>

        {/* Top Circle and Cake Image */}
        <View style={styles.imageBox}>
          <Image source={require('../assets/images/circle.png')} style={styles.circleImage} resizeMode="contain" />
         <Image source={require('../assets/images/cake.png')} style={styles.innerImage} resizeMode="contain" /> 
        </View>

        {/* Title and Subtitle */}
        <Text style={styles.title}>How old are you?</Text>
        <Text style={styles.subtitle}>This helps us personalize your wellness journey</Text>

        {/* Age Options */}
        <FlatList
          data={ages}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.ageList}
          showsVerticalScrollIndicator={false}
          style={{ maxHeight: height * 0.3 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.ageItem, selectedAge === item && styles.selectedAgeItem]}
              onPress={() => setSelectedAge(item)}
            >
              <Text style={[styles.ageText, selectedAge === item && styles.selectedAgeText]}>{item}</Text>
            </TouchableOpacity>
          )}
        />

      </Animated.View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: selectedAge !== null ? '#F7B500' : '#ccc' }]}
        onPress={handleContinue}
        disabled={selectedAge === null}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  circleImage: {
    width: 200,
    height: 200,
  },
  innerImage: {
    position: 'absolute',
    width: 100,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
    color: '#555',
  },
  ageList: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 80,
  },
  ageItem: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginVertical: 5,
    borderRadius: 8,
  },
  selectedAgeItem: {
    backgroundColor: '#F7B500',
  },
  ageText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  selectedAgeText: {
    color: '#fff',
    fontWeight: '600',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
