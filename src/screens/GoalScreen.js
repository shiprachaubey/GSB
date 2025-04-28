import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../assets/svgs/Backarrow'; 



const goals = [
  { key: 'weight', label: 'Weight loss' },
  { key: 'muscle', label: 'Gain muscle' },
  { key: 'fitness', label: 'Improve fitness' },
];

const GoalScreen = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <BackArrow />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
    <Text style={styles.skipText}>Skip</Text>
  </TouchableOpacity>
</View>
      <Text style={styles.stepText}>Step 8 of 8</Text>
      <Text style={styles.questionText}>What’s your goal</Text>

      <View style={styles.optionsContainer}>
        {goals.map(({ key, label }) => {
          const isSelected = selectedGoal === key;
          return (
            <TouchableOpacity
              key={key}
              style={[styles.option, isSelected && styles.selectedOption]}
              onPress={() => setSelectedGoal(key)}
            >
              <Text style={[styles.optionText, isSelected && styles.selectedText]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.finishButton}
        onPress={() => {
          // you can handle selectedGoal logic here
          navigation.navigate('Final');
        }}
      >
        <Text style={styles.finishButtonText}>Finish Steps</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  backButton: {
    padding: 4,
  },
  
  skipText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  stepText: {
    fontSize: 14,
    color: '#666',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  optionsContainer: {
    marginTop: 70,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#191919',
    borderColor: '#191919',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'centre',
    justifyContent:'centre',
    alignItems: 'center',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
  finishButton: {
    backgroundColor: '#D9A500',
    paddingVertical: 14,
    borderRadius: 10,
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  finishButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default GoalScreen;
