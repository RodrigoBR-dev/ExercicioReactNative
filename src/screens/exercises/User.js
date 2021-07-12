import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const User = () => {

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.image} source={require('../../assets/images/foto.jpg')} />
            <View style={styles.id}>
                <Text style={styles.nome}>Rodrigo C Martins</Text>
                <Text>39 anos</Text>
                <Text>Teresópolis</Text>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="facebook-square" size={30} color="#4064AC" style={{margin: 5}}/>
                    <Icon name="linkedin-square" size={30} color="#0A63BC" style={{margin: 5}}/>
                    <Icon name="github" size={30} color="#302F2F" style={{margin: 5}}/>
                </View>
            </View>
        </View>
        <View style={styles.sobre}>
            <Text style={styles.sobreMim}>Sobre mim:</Text>
            <ScrollView>
                <Text style={{textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ex porttitor, consequat diam vel, sollicitudin nibh. Suspendisse potenti. Nullam eleifend, justo et tincidunt porttitor, elit sem tincidunt nibh, ac accumsan leo justo vel augue. Curabitur aliquam imperdiet nulla, et facilisis magna euismod et. Praesent molestie ullamcorper faucibus. Integer consectetur dictum ante in tincidunt. Donec vel elementum ipsum, ac volutpat massa. Ut gravida et lorem et interdum. Pellentesque odio eros, iaculis sit amet mattis eget, iaculis a sapien. Fusce sit amet leo neque. Cras vitae nisl feugiat, porttitor diam id, interdum massa. Curabitur fringilla eros sed quam facilisis, eu tristique est tempor. Quisque dictum accumsan mauris eu ornare. Nullam condimentum lectus vitae mattis condimentum. Nulla gravida maximus felis ut bibendum. Nunc vitae commodo sapien.
                    Etiam nibh nulla, dictum at ullamcorper aliquet, pharetra nec nisl. Sed congue nunc et ultrices pretium. Etiam convallis nibh vitae eros eleifend sollicitudin. Duis bibendum, dui ac porttitor consequat, leo purus eleifend orci, nec malesuada libero nibh laoreet velit. Curabitur vitae dolor turpis. Praesent malesuada volutpat nisi, a feugiat libero tempus id. Pellentesque et maximus elit. Sed lobortis risus et lectus hendrerit, non vestibulum leo maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed commodo massa. Ut eleifend lectus ligula, nec fermentum mi dictum quis. Morbi venenatis, leo nec mollis luctus, metus augue sollicitudin lacus, nec rhoncus risus massa ullamcorper mi. Maecenas nec eros a nisl varius bibendum ut sit amet metus. Praesent volutpat imperdiet tortor, ut vestibulum nibh volutpat vitae. Fusce id ullamcorper neque.
                    Nullam vitae facilisis diam. Fusce egestas nisi vitae purus iaculis condimentum. Donec eget orci quis enim mollis volutpat id a augue. Sed nec sem sem. Fusce id ultrices arcu. Etiam tincidunt augue ac libero eleifend, a consectetur erat auctor. Donec faucibus, mi et interdum scelerisque, tortor ante convallis tellus, eu consequat dolor lacus nec est. Donec sapien augue, tempus a facilisis vitae, egestas sit amet dui. Aliquam erat volutpat. Cras id nisl magna. Donec tortor leo, porta sed quam quis, lacinia rutrum tellus. Maecenas nec volutpat dolor.
                    Pellentesque rhoncus urna et arcu gravida finibus. Nullam dignissim ex ullamcorper cursus porta. In hac habitasse platea dictumst. Vivamus odio nunc, laoreet et orci ut, sodales interdum turpis. Nulla elementum enim ullamcorper, volutpat urna sit amet, mollis neque. Etiam nisi lacus, luctus vel neque in, malesuada malesuada metus. Aenean accumsan pretium nunc sit amet bibendum. Suspendisse potenti. Suspendisse sit amet dui mauris. Mauris vitae porta ante. Cras sollicitudin, risus feugiat ultrices dictum, justo eros laoreet ex, luctus commodo dolor nisl sit amet magna. Quisque egestas dictum diam, lobortis rhoncus arcu accumsan fringilla. Integer sollicitudin nibh non libero bibendum aliquet. Etiam viverra accumsan felis, quis mollis enim venenatis nec. Etiam tempus lacinia nisi, sit amet efficitur purus posuere nec. Nulla quis mi tempor, finibus magna et, luctus justo.
                    Etiam cursus ac odio eget tempor. Vestibulum nec sem et nibh iaculis pellentesque. Pellentesque facilisis nisi eu diam pulvinar feugiat. Cras pellentesque tellus eu vestibulum efficitur. Etiam id aliquam arcu. Nunc sagittis justo sed odio placerat vestibulum. Vestibulum pellentesque facilisis lacus laoreet tincidunt. Donec commodo ipsum vitae lorem molestie, accumsan tincidunt erat faucibus. Etiam vitae nisl nec arcu faucibus euismod id at risus. Phasellus ut lectus eu metus lacinia vulputate eget non nunc. Nunc non arcu purus. Duis pulvinar dui orci, eu facilisis massa hendrerit et. Curabitur pharetra sit amet sem ac rhoncus. Nam a risus at enim pretium eleifend. Sed quis orci ex. Vestibulum at leo ut nibh accumsan consectetur at ut elit.
                </Text>
            </ScrollView>
        </View>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
    },

    nome: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    image: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },

    id: {
        justifyContent: 'center',
        marginLeft: 10,
    },

    sobre: {
        flex: 1,
        padding: 20,
    },

    sobreMim: {
        marginBottom: 5,
        fontWeight: 'bold',
    }
});

export default User;