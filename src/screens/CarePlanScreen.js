import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Care from '../assets/svgs/Care';
import Carelogo from '../assets/images/Carelogo.png';

const CarePlanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Logo Image */}
      <Image
        source={Carelogo}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Top Decorative SVG */}
      <View style={styles.svgWrapper}>
        <Care width={'100%'} height={180} />
      </View>

      {/* Title + Subtitle */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>
          Let’s create your{"\n"}Personalised IBS{"\n"}Care Plan
        </Text>
        <Text style={styles.subtitle}>
          Take the 30 second DB Gut Health assessment
        </Text>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomButtonWrapper}>
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Journey')}
>
  <Text style={styles.buttonText}>Take the test</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

export default CarePlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  logo: {
    width: 200,  // increased width
    height: 100, // increased height
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    marginTop: 35,

  },
  
  svgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
    fontFamily: 'Frank Ruhl Libre',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000',
    lineHeight: 44,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#333',
  },
  bottomButtonWrapper: {
    marginBottom: 60,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F7B500',
    paddingHorizontal: 130,
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    width: '80%',
    fontWeight: '600',
  },
});
