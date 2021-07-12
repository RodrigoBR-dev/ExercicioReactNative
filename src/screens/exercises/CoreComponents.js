import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput, Image } from 'react-native';

const CoreComponents = () => {
    const [numero, setNumero] = useState(0);
    const [isOn, setOn] = useState(true);
    const [texto, setTexto] = useState('')

    return (
        <View style={styles.container}>
            <Image style={{width:150, height: 150, borderRadius: 40}} source={require('../../assets/images/react.png')} />
            <Text style={styles.texto}>{numero}</Text>
            <View style={styles.areaBotao}>
                <TouchableOpacity 
                    disabled={!isOn}
                    style={styles.botao}
                    onPress={() => setNumero(numero - 1)}>
                    <Text style={styles.textoBotao}>Diminui</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    disabled={!isOn}
                    style={styles.botao} 
                    onPress={() => setNumero(numero + 1)}>
                    <Text style={styles.textoBotao}>Aumenta</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    disabled={!isOn}
                    style={styles.botao} 
                    onPress={() => setNumero(0)}>
                    <Text style={styles.textoBotao}>Zerar</Text>
                </TouchableOpacity>
                <TextInput value={texto}
                    onChangeText={setTexto}
                    placeholder="Insira seu nome"/>
                <Switch value={isOn} onValueChange={setOn}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    areaBotao: {
        width: '90%',
        height: '40%',
        justifyContent: 'space-between',
        alignItems: 'center',
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

export default CoreComponents;