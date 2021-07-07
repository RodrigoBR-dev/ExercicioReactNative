import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  box1: {
    flex: 1,
    width: 116,
    backgroundColor: "#50E3C2",
  },
});

export default Ex1;