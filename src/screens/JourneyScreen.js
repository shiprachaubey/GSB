import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const JourneyScreen = ({ navigation }) => {
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
        <Text style={styles.title}>GSBpathy is a science-backed Digital Therapeutics Brand</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.subtitle}>Experience the power of ancient heaking with modern science and unique blend of traditional wisdom scientific research brings you best of both worlds.</Text>
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
  

  <TouchableOpacity style={styles.nextButton}
  onPress={() => navigation.navigate('Control')}>
    <Text style={styles.nextButtonText}>Start </Text>
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
        marginTop: 50,
        marginBottom: 20,
      },
    image: {
        width: '100%',
        height: '90%',
        position: 'absolute', // places it below the inner image
      },
      innerImage: {
        width: 200,
        height: 140,
      },
    textBox: {
      alignItems: 'center',
      marginTop: 0,
    },
    title: {
      fontSize: 20,
      fontWeight: '800',
      fontFamily: 'Frank Ruhl Libre',
      color: '#000',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Frank Ruhl Libre',
      color: '#000',
      marginTop: -50,
      textAlign: 'center',
      
    },
    subTextBox: {
      alignItems: 'center',
      marginVertical: 10,
    },
    subText: {
      fontSize: 20,
      color: '#F7B500',
    },
    dotsBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 16,
    },
    dot: {
      width: 12,
      height: 12,
      borderRadius: 5,
      backgroundColor: '#E0E0E0',
    },
    activeDot: {
      backgroundColor: '#F7B500',
    },
    bottomButtons: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        gap: 16, // add spacing between Skip and Next (RN >= 0.71)
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
  