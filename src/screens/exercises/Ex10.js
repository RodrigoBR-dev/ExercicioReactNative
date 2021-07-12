import React from 'react';
import { View, Button } from 'react-native';

import { getData, getObject, storeData, storeObject, deleteKey } from '../../utils/storage'


const Ex10 = () => {
    return (
        <View>
            <Button title="SALVAR" onPress={() => storeData('SALVEIIIII')}/>
            <Button title="SALVAR JSON" onPress={() => storeObject({name: 'João', age: 30})}/>
            <Button title="RECUPERAR" onPress={() => getData()}/>
            <Button title="RECUPERAR JSON" onPress={() => getObject()}/>
            <Button title="DELETAR" onPress={() => deleteKey()}/>
        </View>
    );
}

export default Ex10;