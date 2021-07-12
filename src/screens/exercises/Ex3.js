import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  box1: {
    height: '20%',
    width: 116,
    backgroundColor: "#50E3C2",
  },

  box2: {
    height: '20%',
    width: 116,
    backgroundColor: "darkblue",
  },

  box3: {
    height: '20%',
    width: 116,
    backgroundColor: "purple",
  },
});

export default Ex3;