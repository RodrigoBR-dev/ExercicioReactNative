import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Ex1 from '../screens/exercises/Ex1';
import Ex2 from '../screens/exercises/Ex2';
import Ex3 from '../screens/exercises/Ex3';
import Ex4 from '../screens/exercises/Ex4';
import Ex5 from '../screens/exercises/Ex5';
import Ex6 from '../screens/exercises/Ex6';
import Ex7 from '../screens/exercises/Ex7';
import CoreComponents from '../screens/exercises/CoreComponents';
import User from '../screens/exercises/User';
import Ex10 from '../screens/exercises/Ex10';
import Post from '../screens/exercises/Ex12';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName='Exercício 1' drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name='Exercício 1' component={Ex1}/>
        <Drawer.Screen name='Exercício 2' component={Ex2}/>
        <Drawer.Screen name='Exercício 3' component={Ex3}/>
        <Drawer.Screen name='Exercício 4' component={Ex4}/>
        <Drawer.Screen name='Exercício 5' component={Ex5}/>
        <Drawer.Screen name='Exercício 6' component={Ex6}/>
        <Drawer.Screen name='Exercício 7' component={Ex7}/>
        <Drawer.Screen name='CoreComponents' component={CoreComponents}/>
        <Drawer.Screen name='User' component={User}/>
        <Drawer.Screen name='Exercício 10' component={Ex10}/>
        <Drawer.Screen name='Post' component={Post}/>
      </Drawer.Navigator>
    )}

const CustomDrawer = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 1')}>
              <Text style={styles.texto}>Exercício 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 2')}>
              <Text style={styles.texto}>Exercício 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 3')}>
              <Text style={styles.texto}>Exercício 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 4')}>
              <Text style={styles.texto}>Exercício 4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 5')}>
              <Text style={styles.texto}>Exercício 5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 6')}>
              <Text style={styles.texto}>Exercício 6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 7')}>
              <Text style={styles.texto}>Desafio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CoreComponents')}>
              <Text style={styles.texto}>CoreComponents</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
              <Text style={styles.texto}>User</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercício 10')}>
              <Text style={styles.texto}>Exercício 10</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Post')}>
              <Text style={styles.texto}>Exercício 12</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#D8DBD1',
    },
  
    texto: {
      fontSize: 20,
      margin: 7,
    },
});

export default DrawerNavigator;