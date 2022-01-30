import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeHistory = async (currentValue) => {
    const dataList = await AsyncStorage.getItem('historyList');
    let storeData;
    if (dataList !== null) {
        const parseData = JSON.parse(dataList);
        storeData = ([...parseData, {
            key: Math.random().toString(),
            value: currentValue
        }]);
    } else {
        storeData = ([{
            key: Math.random().toString(),
            value: currentValue
        }]);
    }

    try {
        await AsyncStorage.setItem('historyList', JSON.stringify(storeData));
    } catch (e) {
        console.log('e :>> ', e);
    }
}

export const getHistoryData = async (setHisList = null) => {
    try {
        const dataList = await AsyncStorage.getItem('historyList');
        if (dataList !== null) {
            // return dataList
            setHisList(JSON.parse(dataList))
        }
    } catch (error) {
        // Error retrieving data
    }
}
export const removeHistoryList = async () => {
    try {
        const removeData = await AsyncStorage.removeItem('historyList');
        if (removeData === null) {
            getHistoryData();
        }
    } catch (error) {
        // Error retrieving data
    }
}