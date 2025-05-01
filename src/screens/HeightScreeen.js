import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, FlatList } from 'react-native';

const HeightScreen = ({ navigation }) => {
  const [selectedConcern, setSelectedConcern] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const concerns = [
    {
      id: 1,
      title: 'Irritable Bowel Syndrome',
      subtitle: 'Manage symptoms and improve gut health',
      // icon: require('../assets/icons/ibs.png'),
    },
    {
      id: 2,
      title: 'Ulcerative Colitis',
      subtitle: 'Reduce inflammation and prevent flare-ups',
      // icon: require('../assets/icons/colitis.png'),
    },
    {
      id: 3,
      title: 'Crohn\'s Disease',
      subtitle: 'Control symptoms and maintain remission',
      // icon: require('../assets/icons/crohns.png'),
    },
    {
      id: 4,
      title: 'E-commerce',
      subtitle: 'Browse products, supplements and books',
      // icon: require('../assets/icons/ecommerce.png'),
    },
  ];

  const handleContinue = () => {
    if (selectedConcern !== null) {
      navigation.navigate('Home', { selectedConcern });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.optionBox, selectedConcern?.id === item.id && styles.selectedOptionBox]}
      onPress={() => setSelectedConcern(item)}
    >
      <View style={styles.optionContent}>
        {/* <Image source={item.icon} style={styles.icon} resizeMode="contain" /> */}
        <View style={styles.textContent}>
          <Text style={[styles.optionTitle, selectedConcern?.id === item.id && styles.selectedOptionTitle]}>{item.title}</Text>
          <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.radioCircleOuter}>
          {selectedConcern?.id === item.id && <View style={styles.radioCircleInner} />}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: animation, transform: [{ scale: animation }] }}>

        {/* Top Image and Title */}
        <View style={styles.imageBox}>
          <Image source={require('../assets/images/circle.png')} style={styles.circleImage} resizeMode="contain" />
           <Image source={require('../assets/images/Bring.png')} style={styles.innerImage} resizeMode="contain" /> 
        </View>

        <Text style={styles.title}>What brings you here?</Text>
        <Text style={styles.subtitle}>Select your primary health concern</Text>

        {/* List of Options */}
        <FlatList
          data={concerns}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.optionsList}
          showsVerticalScrollIndicator={false}
        />

      </Animated.View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: selectedConcern ? '#F7B500' : '#ccc' }]}
        onPress={handleContinue}
        disabled={!selectedConcern}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  circleImage: {
    width: 260,
    height: 260,
  },
  innerImage: {
    position: 'absolute',
    width: 170,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  optionsList: {
    paddingHorizontal: 24,
  },
  optionBox: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOptionBox: {
    backgroundColor: '#FFF8E1',
    borderColor: '#F7B500',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  selectedOptionTitle: {
    color: '#F7B500',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  radioCircleOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F7B500',
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
