import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';

const ageRange = Array.from({ length: 50 }, (_, i) => 16 + i); // 16 to 65

export default function AgeScreen({ navigation }) {
  const [selectedAge, setSelectedAge] = useState(27);

  return (
    <View style={styles.container}>
      {/* Skip button */}
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Step Text */}
      <Text style={styles.stepText}>Step 3 of 8</Text>

      {/* Question */}
      <Text style={styles.questionText}>How old are you?</Text>

      {/* Age Selector */}
      <FlatList
        data={ageRange}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ageList}
        getItemLayout={(_, index) => ({
          length: 50,
          offset: 50 * index,
          index
        })}
        initialScrollIndex={selectedAge - 16}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          const index = Math.round(offsetY / 50);
          setSelectedAge(ageRange[index]);
        }}
        renderItem={({ item }) => (
          <Text style={[styles.ageItem, selectedAge === item && styles.selectedAge]}>
            {item}
          </Text>
        )}
      />

      {/* Next Steps */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('WeightScreen')}>
        <Text style={styles.nextText}>Next Steps</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    right: 20,
    top: 60,
  },
  skipText: {
    fontSize: 16,
    color: '#666',
  },
  stepText: {
    fontSize: 14,
    color: '#999',
    marginTop: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
  ageList: {
    height: 150,
    justifyContent: 'center',
  },
  ageItem: {
    fontSize: 22,
    height: 50,
    color: '#ccc',
    textAlign: 'center',
  },
  selectedAge: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    width: width * 0.9,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#e2b039',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
