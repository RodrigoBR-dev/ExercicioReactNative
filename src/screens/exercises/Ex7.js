import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const Ex7 = () => {
  return (
    <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.topLine}/>
        <View style={styles.headContainer}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
        </View>
        <View style={styles.middleContainer}>
            <View style={styles.leftBlock}/>
            <View style={styles.rightBlock}/>
        </View>
        <View style={styles.centerLine}/>
        <View style={styles.boxLine}>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
        </View>
        <View style={styles.boxLine}>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
        </View>
        <View style={styles.footContainer}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topLine: {
    height: '4%',
    width: '100%',
    backgroundColor: "#50E3C2",
  },

  headContainer: {
    height: '33%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  middleContainer: {
    height: '12%',
    flexDirection: 'row',
    backgroundColor: "#F5A623",
  },

  centerLine: {
    height: '2%',
    width: '100%',
    backgroundColor: "#50E3C2",
  },

  boxLine: {
      height: '20%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
  },

  footContainer: {
    height: '9%',
    width: '100%',
    backgroundColor: "#4A90E2",
  },
  
  box1: {
    height: 80,
    width: 80,
    backgroundColor: "#F5A623",
  },

  box2: {
    height: 30,
    width: 120,
    backgroundColor: "#F5A623",
  },

  leftBlock: {
    backgroundColor: "#9013FE",
    width: '50%',
  },
  
  rightBlock: {
    backgroundColor: "#4A90E2",
    width: '50%',
  },
});

export default Ex7;