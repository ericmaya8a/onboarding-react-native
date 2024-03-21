import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeItem(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error storing value', error);
  }
}

export async function getItem(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error('Error retrieving value', error);
  }
}

export async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error deleting value', error);
  }
}
