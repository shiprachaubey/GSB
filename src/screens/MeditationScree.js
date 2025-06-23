
// // import React, { useState, useRef } from 'react';
// // import { View, Text, StyleSheet, ScrollView,StatusBar, TouchableOpacity, Linking, Dimensions } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import Video from 'react-native-video';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // const windowHeight = Dimensions.get('window').height;

// // const MeditationScreen = () => {
// //   const navigation = useNavigation();
// //   const scrollRef = useRef(null);
// //   const [visibleVideos, setVisibleVideos] = useState({});

// //   // const pdfs = [
// //   //   { title: 'Demo pdf', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
// //   //   { title: 'Demo pdf', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
// //   // ];

// //   const videos = [
// //     { title: 'Demo Video 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
// //     { title: 'Demo Video 2', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
// //     { title: 'Demo Video 3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
// //   ];

// //   const openPdf = (url) => {
// //     Linking.openURL(url);
// //   };

// //   const handleScroll = (event) => {
// //     const scrollPosition = event.nativeEvent.contentOffset.y;

// //     videos.forEach((_, idx) => {
// //       if (videoLayouts[idx]) {
// //         const { y, height } = videoLayouts[idx];
// //         const isVisible = y < scrollPosition + windowHeight && y + height > scrollPosition;
// //         setVisibleVideos((prev) => ({ ...prev, [idx]: isVisible }));
// //       }
// //     });
// //   };

// //   const videoLayouts = {};

// //   return (
// //      <SafeAreaView style={{flex:1}}> 
// //         <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
// //     <View style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
// //         <Text style={styles.headerTitle}>Meditation</Text>
// //       </View>

// //       <ScrollView
// //         ref={scrollRef}
// //         onScroll={handleScroll}
// //         scrollEventThrottle={16}
// //         contentContainerStyle={styles.scrollContent}
// //       >
        
// //         {/* PDFs Section */}
// //         {/* <Text style={styles.sectionTitle}>Pdfs</Text>
// //         <View style={styles.pdfRow}>
// //           {pdfs.map((item, idx) => (
// //             <View key={idx} style={styles.pdfCard}>
// //               <Ionicons name="document" size={50} color="red" />
// //               <Text style={styles.pdfTitle}>{item.title}</Text>
// //               <TouchableOpacity style={styles.downloadButton} onPress={() => openPdf(item.url)}>
// //                 <Ionicons name="download" size={16} color="#fff" />
// //                 <Text style={styles.downloadText}>Download</Text>
// //               </TouchableOpacity>
// //             </View>
// //           ))}
// //         </View> */}

// //         {/* Videos Section */}
// //         <Text style={styles.sectionTitle}>Videos</Text>
// //         {videos.map((item, idx) => (
// //   <View
// //     key={idx}
// //     style={styles.videoCard}
// //     onLayout={(event) => {
// //       const layout = event.nativeEvent.layout;
// //       videoLayouts[idx] = { y: layout.y, height: layout.height };
// //     }}
// //   >
// //     {visibleVideos[idx] ? (
// //       <Video
// //         source={{ uri: item.url }}
// //         style={styles.videoPlayArea}
// //         controls
// //         paused={false}
// //         resizeMode="cover"
// //         repeat={true}          // 👈 loop the video
// //         muted={true}           // 👈 mute the video
// //         ignoreSilentSwitch={"obey"}  // 👈 for iOS mute settings
// //       />
// //     ) : (
// //       <View style={[styles.videoPlayArea, { backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }]}>
// //         <Ionicons name="play-circle" size={50} color="#F7B500" />
// //       </View>
// //     )}
// //     <Text style={styles.videoTitle}>{item.title}</Text>
// //   </View>
// // ))}


// //       </ScrollView>
// //     </View>
// //     </SafeAreaView>
// //   );
// // };

// // export default MeditationScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f7fafa',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     padding: 16,
// //     backgroundColor: '#fff',
// //     borderBottomColor: '#eee',
// //     borderBottomWidth: 1,
// //   },
// //   headerTitle: {
// //     marginLeft: 8,
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#F7B500',
// //   },
// //   scrollContent: {
// //     padding: 16,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   pdfRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginBottom: 20,
// //   },
// //   pdfCard: {
// //     width: '48%',
// //     backgroundColor: '#fff',
// //     borderRadius: 12,
// //     padding: 10,
// //     alignItems: 'center',
// //     elevation: 2,
// //   },
// //   pdfTitle: {
// //     marginTop: 10,
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#000',
// //   },
// //   downloadButton: {
// //     flexDirection: 'row',
// //     backgroundColor: 'green',
// //     paddingVertical: 6,
// //     paddingHorizontal: 12,
// //     borderRadius: 8,
// //     marginTop: 8,
// //     alignItems: 'center',
// //   },
// //   downloadText: {
// //     color: '#fff',
// //     marginLeft: 6,
// //     fontWeight: '600',
// //   },
// //   videoCard: {
// //     backgroundColor: '#fff',
// //     borderRadius: 12,
// //     marginBottom: 16,
// //     paddingBottom: 10,
// //     elevation: 3,
// //   },
// //   videoPlayArea: {
// //     width: '100%',
// //     height: 180,
// //     borderTopLeftRadius: 12,
// //     borderTopRightRadius: 12,
// //     backgroundColor: '#000',
// //   },
// //   videoTitle: {
// //     textAlign: 'center',
// //     marginTop: 8,
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#000',
// //   },
// // });

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Linking, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Video from 'react-native-video';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import axios from 'axios';

// const windowHeight = Dimensions.get('window').height;

// const MeditationScreen = () => {
//   const navigation = useNavigation();
//   const scrollRef = useRef(null);
//   const [visibleVideos, setVisibleVideos] = useState({});
//   const [meditationVideos, setMeditationVideos] = useState([]);

//   const videoLayouts = useRef({}); // useRef to persist across renders

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('http://13.60.227.51:9000/api/videos/all-videos');
//         const meditation = response.data.videos.filter(
//           (video) => video.category?.toLowerCase() === 'meditation'
//         );
//         setMeditationVideos(meditation);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };
//     fetchVideos();
//   }, []);

//   const handleScroll = (event) => {
//     const scrollY = event.nativeEvent.contentOffset.y;

//     const updatedVisibility = { ...visibleVideos };

//     meditationVideos.forEach((_, idx) => {
//       const layout = videoLayouts.current[idx];
//       if (layout) {
//         const { y, height } = layout;
//         const isVisible = y < scrollY + windowHeight && y + height > scrollY;
//         updatedVisibility[idx] = isVisible;
//       }
//     });

//     setVisibleVideos(updatedVisibility);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
//           <Text style={styles.headerTitle}>Meditation</Text>
//         </View>

//         <ScrollView
//           ref={scrollRef}
//           onScroll={handleScroll}
//           scrollEventThrottle={16}
//           contentContainerStyle={styles.scrollContent}
//         >
//           <Text style={styles.sectionTitle}>Videos</Text>

//           {meditationVideos.map((item, idx) => (
//             <View
//               key={item._id}
//               style={styles.videoCard}
//               onLayout={(event) => {
//                 const layout = event.nativeEvent.layout;
//                 videoLayouts.current[idx] = { y: layout.y, height: layout.height };
//               }}
//             >
//               {visibleVideos[idx] ? (
//                 <Video
//                   source={{ uri: item.videoUrl }}
//                   style={styles.videoPlayArea}
//                   controls
//                   paused={false}
//                   resizeMode="cover"
//                   repeat
//                   muted
//                   ignoreSilentSwitch="obey"
//                 />
//               ) : (
//                 <View style={[styles.videoPlayArea, { justifyContent: 'center', alignItems: 'center' }]}>
//                   <Ionicons name="play-circle" size={50} color="#F7B500" />
//                 </View>
//               )}
//               <Text style={styles.videoTitle}>{item.title}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MeditationScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7fafa',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomColor: '#eee',
//     borderBottomWidth: 1,
//   },
//   headerTitle: {
//     marginLeft: 8,
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#F7B500',
//   },
//   scrollContent: {
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 10,
//     color: '#333',
//   },
//   videoCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 16,
//     paddingBottom: 10,
//     elevation: 3,
//   },
//   videoPlayArea: {
//     width: '100%',
//     height: 180,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//     backgroundColor: '#000',
//   },
//   videoTitle: {
//     textAlign: 'center',
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//   },
// });

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const windowHeight = Dimensions.get('window').height;

const MeditationScreen = () => {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [visibleVideos, setVisibleVideos] = useState({});
  const [meditationVideos, setMeditationVideos] = useState([]);
  const videoLayouts = useRef({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://13.60.227.51:9000/api/videos/all-videos'); // Replace with your machine IP
        const filtered = res.data.videos.filter(
          (v) => v.category?.toLowerCase() === 'meditation'
        );
        setMeditationVideos(filtered);
      } catch (err) {
        console.error('Error fetching videos:', err.message);
      }
    };
    fetchVideos();
  }, []);

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const newVisibility = {};

    meditationVideos.forEach((_, idx) => {
      const layout = videoLayouts.current[idx];
      if (layout) {
        const { y, height } = layout;
        newVisibility[idx] = y < scrollY + windowHeight && y + height > scrollY;
      }
    });

    setVisibleVideos(newVisibility);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={24} color="#F7B500" onPress={() => navigation.goBack()} />
          <Text style={styles.headerTitle}>Meditation</Text>
        </View>

        <ScrollView
          ref={scrollRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.sectionTitle}>Videos</Text>

          {/* {meditationVideos.map((item, idx) => (
            <View
              key={item._id}
              style={styles.videoCard}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                videoLayouts.current[idx] = { y: layout.y, height: layout.height };
              }}
            >
              {visibleVideos[idx] ? (
                <Video
                  source={{ uri: item.videoUrl }}
                  style={styles.videoPlayArea}
                  controls
                  paused={false}
                  resizeMode="cover"
                  repeat
                 
                />
              ) : (
                <Image
                  source={{ uri: item.thumbnailUrl }}
                  style={styles.videoPlayArea}
                  resizeMode="cover"
                />
              )}
              <Text style={styles.videoTitle}>{item.title}</Text>
            </View>
          ))} */}
          {meditationVideos.map((item, idx) => (
  <View
    key={item._id}
    style={styles.videoCard}
    onLayout={(event) => {
      const layout = event.nativeEvent.layout;
      videoLayouts.current[idx] = { y: layout.y, height: layout.height };
    }}
  >
    {item.accessLevel === 'Free' ? (
      visibleVideos[idx] ? (
        <Video
          source={{ uri: item.videoUrl }}
          style={styles.videoPlayArea}
          controls
          paused={true}
          resizeMode="cover"
          repeat
          muted={false}
          volume={1.0}
          ignoreSilentSwitch="ignore"
        />
      ) : (
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={styles.videoPlayArea}
          resizeMode="cover"
        />
      )
    ) : (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Plan')} // 👈 Navigate to Plan screen
        style={[styles.videoPlayArea, styles.lockedOverlay]}
      >
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={[styles.videoPlayArea, { position: 'absolute' }]}
          resizeMode="cover"
        />
        <Ionicons name="lock-closed" size={40} color="#fff" />
        <Text style={styles.lockText}>Premium Video</Text>
        <View style={styles.unlockButton}>
          <Text style={styles.unlockText}>View Plans</Text>
        </View>
      </TouchableOpacity>
    )}
    <Text style={styles.videoTitle}>{item.title}</Text>
  </View>
))}

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MeditationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#F7B500',
  },
  lockedOverlay: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
},
lockText: {
  color: '#fff',
  fontSize: 16,
  marginTop: 8,
  fontWeight: '600',
},
unlockButton: {
  marginTop: 8,
  backgroundColor: '#F7B500',
  paddingHorizontal: 16,
  paddingVertical: 6,
  borderRadius: 8,
},
unlockText: {
  color: '#fff',
  fontWeight: 'bold',
},

  scrollContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  videoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    paddingBottom: 10,
    elevation: 3,
  },
  videoPlayArea: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#000',
  },
  videoTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});
