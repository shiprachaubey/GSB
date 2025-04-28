// import React from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
// import BlueCircle from '../assets/svgs/BlueCircle';

// const { width } = Dimensions.get('window');

// const EatScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
      
//       {/* 🔸 Top Section: SVG + Image */}
//       <View style={styles.topImageWrapper}>
//         <BlueCircle width={250} height={300} />
//         <Image 
//           source={require('../assets/images/eat.png')} 
//           style={styles.centerImage}
//           resizeMode="contain"
//         />
//       </View>

//       {/* 🔸 Middle Text Section
//       <View style={styles.centerBox}>
//         <View style={styles.textBox}>
//           <Text style={styles.title}>Eat What You Love </Text>
//         </View>
//         <View style={styles.subTextBox}>
//           <Text style={styles.subText}>Personalised diet plans designed by top nutritionists and AI enabled diet engine</Text>
//         </View>
//       </View>

//       {/* 🔸 Dots */}
//       {/* <View style={styles.dotsBackground}>
//   <View style={styles.dotsBox}>
//     <View style={styles.dot} />
//     <View style={[styles.dot, styles.activeDot]} />
//     <View style={styles.dot} />
//   </View>
// </View>  */}
// <View style={styles.centerBox}>
//   <View style={styles.textBox}>
//     <Text style={styles.title}>Eat What You Love </Text>
//   </View>

//   <View style={styles.subTextBox}>
//     <Text style={styles.subText}>
//       Personalised diet plans designed by top nutritionists and AI enabled diet engine
//     </Text>
//   </View>

//   {/* 🔥 Move Dots Background here */}
//   <View style={styles.dotsBackground}>
//     <View style={styles.dotsBox}>
//       <View style={styles.dot} />
//       <View style={[styles.dot, styles.activeDot]} />
//       <View style={styles.dot} />
//     </View>
//   </View>
// </View>

//       {/* 🔸 Navigation Buttons */}
//       <View style={styles.bottomButtons}>
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.nextButton}
//           onPress={() => navigation.navigate('Register')} 
//         >
//           <Text style={styles.nextButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default EatScreen;




// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 0,
//         backgroundColor: '#fff',
//       },
      
//       topImageWrapper: {
//         alignItems: 'center',
//         marginTop: 60,
//         position: 'relative',
//       },
      
//       centerImage: {
//         width: 160,
//         height: 160,
//         position: 'absolute',
//         top: 55,
    
//       },
      
//       centerBox: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginTop: 40,
//       },
      
//       textBox: {
//         marginTop: 0,
//         alignItems: 'center',
//       },
      
//       title: {
//         fontSize: 40,
//         fontWeight: '500',
//         fontFamily: 'Frank Ruhl Libre',
//         color: '#000',
//         textAlign: 'center',
//       },
      
//       subTextBox: {
//         alignItems: 'center',
//         marginVertical: 20,
//       },
      
//       subText: {
//         fontSize: 18,
//         color: '#17837D',
//         textAlign: 'center',
//         fontFamily: 'Inria Sans'
//       },
      
//       dotsBackground: {
//         backgroundColor: '#001A6E', // Dark blue background
//         width: '100%',
//         paddingVertical: 25,
//         alignItems: 'center',
//         marginTop: 150, 
//         // or adjust spacing if needed
//       },
      
//       dotsBox: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         gap: 8,
       
//         marginBottom: 16,
//       },
      
//       dot: {
//         width: 12,
//         height: 12,
//         borderRadius: 5,
//         backgroundColor: '#E0E0E0',
//       },
      
//       activeDot: {
//         backgroundColor: '#009990',
//       },
      
//       bottomButtons: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: 40,
//         gap: 16,
//       },
      
//       skipText: {
//         color: '#009990',
//         fontSize: 20,
//         fontWeight: '500',
//         fontFamily: 'Inria Sans',
//       },
      
//       nextButton: {
//         backgroundColor: '#001A6E',
//         paddingVertical: 12,
//         paddingHorizontal: 100,
//         borderRadius: 30,
//       },
      
//       nextButtonText: {
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: '600',
//         fontFamily: 'Inria Sans',
//       },
      
//   });
  
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
        <Text style={styles.title}>Clinically Proved Ayurveda - Science Meets Tradition </Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.subtitle}>Experience the power of AI driven Ayurveda, backed by clinical research, for holistic healing and long term wellness- without medecines.</Text>
      </View>
      {/* 🔸 Subtext */}
      <View style={styles.subTextBox}>
        <Text style={styles.subText}>Let’s walk it together</Text>
      </View>

      {/* 🔸 Indicator Dots */}
      <View style={styles.dotsBox}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]}/>
      </View>

      {/* 🔸 Navigation Buttons */}
      <View style={styles.bottomButtons}>
  

      <TouchableOpacity 
  style={styles.nextButton}
  activeOpacity={0.7}
  onPress={() => navigation.navigate('Register')}>
    <Text 
      style={styles.nextButtonText} 
      numberOfLines={1}
      adjustsFontSizeToFit={true}>
      Begin Your Medicine Free Journey
    </Text>
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
        marginTop: 60,
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
      marginTop: -40,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Frank Ruhl Libre',
      color: '#000',
      marginTop: -40,
      
      
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
        paddingHorizontal:30,
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
      },
      nextButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Inria Sans',
      },
      
  });
  