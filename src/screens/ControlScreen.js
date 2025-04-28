// import React from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
// import CircleSvg from '../assets/svgs/Control';

// const { width } = Dimensions.get('window');

// const ControlScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
      
//       {/* 🔸 Top Section: SVG + Image */}
//       <View style={styles.topImageWrapper}>
//         <CircleSvg width={250} height={250} />
//         <Image 
//           source={require('../assets/images/male.png')} 
//           style={styles.centerImage}
//           resizeMode="contain"
//         />
//       </View>

//       {/* 🔸 Middle Text Section */}
//       <View style={styles.centerBox}>
//         <View style={styles.textBox}>
//           <Text style={styles.title}>Control IBS and</Text>
//           <Text style={styles.title}>improve the</Text>
//           <Text style={styles.title}>quality of your life</Text>
//         </View>
//         <View style={styles.subTextBox}>
//           <Text style={styles.subText}>Assisted by our IBS-specialised experts</Text>
//         </View>
//       </View>

//       {/* 🔸 Dots */}
//       <View style={styles.dotsBox}>
//         <View style={styles.dot} />
//         <View style={[styles.dot, styles.activeDot]} />
//         <View style={styles.dot} />
//       </View>

//       {/* 🔸 Navigation Buttons */}
//       <View style={styles.bottomButtons}>
//         <TouchableOpacity onPress={() => navigation.navigate('Eat')}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.nextButton}
//           onPress={() => navigation.navigate('Eat')} // Replace with actual screen
//         >
//           <Text style={styles.nextButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ControlScreen;




// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 24,
//         backgroundColor: '#fff',
//       },
      
//       topImageWrapper: {
//         alignItems: 'center',
//         marginTop: 60,
//         position: 'relative',
//       },
      
//       centerImage: {
//         width: 200,
//         height: 200,
//         position: 'absolute',
//         top: 40, // adjust as needed to center within SVG
//         zIndex: 1,
//       },
      
//       centerBox: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
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
//         marginVertical: 10,
//       },
      
//       subText: {
//         fontSize: 20,
//         color: '#00A394',
//       },
      
//       dotsBox: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         gap: 8,
//         marginBottom: 16,
//       },
      
//       dot: {
//         width: 12,
//       height: 12,
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
//         backgroundColor: '#009990',
//         paddingVertical: 12,
//         paddingHorizontal: 90,
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
        <Text style={styles.title}>Bina Dawai Lifestyle Diseases kr Safai</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.subtitle}>Heal lifestyle diseases like IBS, colitis, and Crohn's naturally with Ayurveda, yoga, and personalised nutrition. A medicine-free approach for long term gut health, balance, and overall well-being</Text>
      </View>
      {/* 🔸 Subtext */}
      <View style={styles.subTextBox}>
        <Text style={styles.subText}>Let’s walk it together</Text>
      </View>

      {/* 🔸 Indicator Dots */}
      <View style={styles.dotsBox}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>

      {/* 🔸 Navigation Buttons */}
      <View style={styles.bottomButtons}>
  

  <TouchableOpacity style={styles.nextButton}
  onPress={() => navigation.navigate('Eat')}>
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
   
    },
    title: {
      fontSize: 20,
      fontStyle:'bold',
      fontWeight: '700',
      fontFamily: 'Frank Ruhl Libre',
      color: '#000',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Frank Ruhl Libre',
      color: '#000',
      marginTop: -20,
      
      
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
  