import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex4 = () => {
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  box1: {
    height: '15%',
    width: 80,
    backgroundColor: "#50E3C2",
  },

  box2: {
    height: '15%',
    width: 80,
    backgroundColor: "darkblue",
  },

  box3: {
    height: '15%',
    width: 80,
    backgroundColor: "purple",
  },
});

export default Ex4;