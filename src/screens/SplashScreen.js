import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Bottom from '../assets/svgs/Bottom';
import TopLeft from '../assets/svgs/Topleft';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import BottomCircle from '../assets/svgs/bottomcircle';
import Bottomhalf from '../assets/svgs/bottomhalf';
import { SafeAreaView } from 'react-native-safe-area-context';
const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Journey');
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [navigation]);
  return (
    <SafeAreaView style={{flex:1}}> 
    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
    <View style={styles.container}>
      
      {/* <SvgBackgroundRings /> */}
      <View style={{flexDirection:"row", height:"40%"}}> 
      <Bottom style={{position:"absolute" ,right:0}}/>
      <TopLeft style={{position:"absolute",left:0}} />
      </View>
     
      <View style={{  alignItems: 'center', justifyContent:"center",height:'20%'}}>
  <Text style={styles.title}>GSBpathy</Text>
  <Text style={styles.subtitle}>IBS, Colitis & Crohn's Management</Text>
</View>

<View style={[styles.bottomContainer,{height:"40%"}]}>
      <BottomCircle style={{position:"absolute" ,right:0,top:-15}}/>
      <Bottomhalf style={{position:"absolute" ,left:0,bottom:0}}/>
      </View>

      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inria Sans',
    color: '#A0872C',
    textAlign: 'center',
    marginTop:responsiveScreenHeight(1)
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: -40, 
  },
  bottomContainer: {
flexDirection:"row"
    
  },
  bottomLeftDecor: {
    position: 'absolute',
    left: -150,
    bottom: 0,
  },
  bottomRightDecor: {
    position: 'absolute',
    right: -40,
    bottom: 0,
  },
});

export default WelcomeScreen;
