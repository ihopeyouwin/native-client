import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

export const storeData = async (value, errorMessage) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('userData', jsonValue)
  } catch (e) {
    Alert.alert(errorMessage)
  }
}
export const getData = async (value, errorMessage) => {
  try {
    const jsonValue = await AsyncStorage.getItem(value)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    Alert.alert(errorMessage)
  }
}
export const removeData = async (value, errorMessage) => {
  try {
    await AsyncStorage.removeItem(value)
  } catch(e) {
    Alert.alert(errorMessage)
  }
}
