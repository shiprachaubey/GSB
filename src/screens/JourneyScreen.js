import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const JourneyScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* 🔸 Top Image / SVG Circle */}
      {/* <View style={styles.imageBox}>
       
        <Image source={require('../assets/images/circle.png')} style={styles.image} resizeMode="contain" />
        
      </View> */}

<View style={styles.imageBox}>
  {/* Background Circle Image */}
  <Image 
    source={require('../assets/images/circle.png')} 
    style={styles.image} 
    resizeMode="contain" 
  />

  {/* Inner PNG (e.g. a person/meditation/etc) */}
  <Image 
    source={require('../assets/images/Health.png')} 
    style={styles.innerImage} 
    resizeMode="contain" 
  />
</View>


      {/* 🔸 Text Box */}
      <View style={styles.textBox}>
        <Text style={styles.title}>Your journey to</Text>
        <Text style={styles.title}>a happier,</Text>
        <Text style={styles.title}>healthier gut</Text>
      </View>

      {/* 🔸 Subtext */}
      <View style={styles.subTextBox}>
        <Text style={styles.subText}>Let’s walk it together</Text>
      </View>

      {/* 🔸 Indicator Dots */}
      <View style={styles.dotsBox}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* 🔸 Navigation Buttons */}
      <View style={styles.bottomButtons}>
  <TouchableOpacity>
    <Text style={styles.skipText}>Skip</Text>
    
  </TouchableOpacity>

  <TouchableOpacity style={styles.nextButton}>
    <Text style={styles.nextButtonText}>Next </Text>
  </TouchableOpacity>
</View>


    </View>
  );
};

export default JourneyScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
    },
    imageBox: {
        width: 400,
        height: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 20,
      },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute', // places it below the inner image
      },
      innerImage: {
        width: 200,
        height: 170,
      },
    textBox: {
      alignItems: 'center',
      marginTop: 16,
    },
    title: {
      fontSize: 40,
      fontWeight: '500',
      fontFamily: 'Frank Ruhl Libre',
      color: '#000',
      textAlign: 'center',
    },
    subTextBox: {
      alignItems: 'center',
      marginVertical: 10,
    },
    subText: {
      fontSize: 20,
      color: '#00A394',
    },
    dotsBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 16,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#E0E0E0',
    },
    activeDot: {
      backgroundColor: '#00A394',
    },
    bottomButtons: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        gap: 16, // add spacing between Skip and Next (RN >= 0.71)
      },
      skipText: {
        color: '#00A98F',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Inria Sans',
      },
      nextButton: {
        backgroundColor: '#F7B500',
        paddingVertical: 12,
        paddingHorizontal: 90,
        borderRadius: 30,
      },
      nextButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inria Sans',
      },
  });
  