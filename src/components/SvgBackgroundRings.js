import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopRightRings from '../assets/svgs/TopRightRings';
import BottomLeftRings from '../assets/svgs/BottomLeftRings.svg';

const SvgBackgroundRings = () => {
  return (
    <>
      <View style={styles.topRight}>
        <TopRightRings/>
      </View>
      <View style={styles.bottomLeft}>
        <BottomLeftRings width={200} height={200} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topRight: {
    position: 'absolute',
    top: -40,
    right: -40,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: -40,
    left: -40,
  },
});

export default SvgBackgroundRings;
