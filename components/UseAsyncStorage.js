import { useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  
  useEffect(() => {
    const getItemFromStorage = async () => {
      try {
        const storedItem = await AsyncStorage.getItem(itemName);

        let parsedItem;

        if (!storedItem) {
          await AsyncStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(storedItem);
          setItem(parsedItem);
        } 
      } catch (error) {
        console.error("Error al obtener el elemento de AsyncStorage:", error);
      }
    };
    getItemFromStorage();
  }, []);

  

  const saveItem = async (newItem) => {
    try {
      await AsyncStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      console.error("Error al guardar el elemento en AsyncStorage:", error);
    }
  };
  
  return {
    item,
    saveItem
  };

  
}

