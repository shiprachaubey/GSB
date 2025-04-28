import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import YellowCircle from '../assets/svgs/YellowCircle';
import BackArrow from '../assets/svgs/Backarrow';

const { width } = Dimensions.get('window');

const FinalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackArrow />
        </TouchableOpacity>
      </View>

      {/* Heading & Description */}
      <Text style={styles.heading}>Let's get started</Text>
      <Text style={styles.subText}>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
      </Text>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <YellowCircle width={240} height={240} style={styles.circle} />
        <Image
          source={require('../assets/images/lady.png')}
          style={styles.ladyImage}
          resizeMode="contain"
        />
      </View>

      {/* Split tagline with highlighted text */}
      <Text style={styles.subText}>
        Sculpt your <Text style={styles.highlight}>ideal body</Text>, free your
      </Text>
      <Text style={styles.subText}>
        true self, transform your life.
      </Text>

      {/* CTA Button */}
      <TouchableOpacity
        style={styles.finishButton}
        onPress={() => navigation.navigate('Final')}
      >
        <Text style={styles.finishButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'DM Sans',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 5,
  },
  highlight: {
    color: '#D9A500',
    fontWeight: '600',
  },
  imageContainer: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ladyImage: {
    width: 220,
    height: 220,
    zIndex: 1,
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    left: 0,
    paddingHorizontal: 20,
    zIndex: 10,
  },
  backButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

export default FinalScreen;
