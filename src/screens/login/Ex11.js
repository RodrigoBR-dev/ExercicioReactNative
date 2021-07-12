import React, {useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { storeLogin} from '../../utils/storage';

const Ex11 = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    return (
        <View style={styles.container}>
            <Text>{login}</Text>
            <View style={styles.login}>
                <Text>Usuário:</Text>
                <TextInput value={user}
                    onChangeText={setUser}
                    style={styles.imput}
                    placeholder="Digite seu usuário"/>
                <Text>Senha:</Text>
                <TextInput value={pass}
                    onChangeText={setPass}
                    secureTextEntry={true}
                    style={styles.imput}
                    placeholder="Digite sua senha"/>
                <TouchableOpacity onPress={() => login(user, pass, {navigation})} style={styles.button}>
                <Text style={{color: '#fff'}}>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

function login(user, pass, {navigation}) {
    const realUser = 'Rodrigo';
    const realPass = '123456';
    if (user != realUser || pass != realPass) {
       alert('Usuário e/ou senha inválidos')
    } else {
        storeLogin('true');
        navigation.navigate('DrawerNavigator');
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login: {
        width: 250,
        padding: 10,
        backgroundColor: '#D8DBD1',
    },

    button: {
        width: '100%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 5,
    },

    imput: {
        marginTop: 5,
        marginBottom: 20,
        height: 40,
        backgroundColor: '#fff'
    },
});

export default Ex11;