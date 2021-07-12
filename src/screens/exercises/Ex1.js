import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/Header';

const Ex1 = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box1}/>
      </View>
    </>
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
  
  botao: {
    borderRadius: 8,
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});

export default Ex1;