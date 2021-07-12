import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const Header = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text style={{alignSelf: 'center'}}>Exercícios e desafios de React Native</Text>
            <TouchableOpacity onPress={() => props.openDrawer()}>
                <Icon name="menu" size={30} color="#4064AC" style={{margin: 5}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D8DBD1',
    },
});

export default Header;