import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {}
  };
const storeLogin = async value => {
    try {
      await AsyncStorage.setItem('login', value);
    } catch (e) {}
  };
const storeObject = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {}
  };
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {}
  };
const getLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value !== null) {
        return (value);
      }
    } catch (e) {}
  };
const getObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      return jsonValue !== null
        ? console.log(JSON.parse(jsonValue).name)
        : null;
    } catch (e) {}
  };
const deleteKey = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
    } catch (e) {
      console.log(e.message);
    }
  };

  export {
    storeData,
    storeLogin,
    storeObject,
    getData,
    getLogin,
    getObject,
    deleteKey
  }