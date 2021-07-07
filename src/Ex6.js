import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex6 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box4}/>
        </View>
        <View style={styles.innerContainer}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box4}/>
        </View>
        <View style={styles.innerContainer}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box4}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  innerContainer: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
  },
  
  box1: {
    height: '15%',
    width: 80,
    backgroundColor: "#50E3C2",
  },

  box2: {
    height: '15%',
    width: 80,
    backgroundColor: "blue",
  },

  box3: {
    height: '15%',
    width: 80,
    backgroundColor: "purple",
  },

  box4: {
    height: '15%',
    width: 80,
    backgroundColor: "orange",
  },
});

export default Ex6;