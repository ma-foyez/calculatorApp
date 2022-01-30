import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { getHistoryData, removeHistoryList } from '../components/HistoryStorage';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from '../assets/styles/Styles';

const CalculationHistory = () => {

    const [hisList, setHisList] = useState([])

    useEffect(() => {
        getHistoryData(setHisList);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.titleBox}>
                    <Ionicons name="calculator-outline" size={30} color="#f9f9f9" />
                    <Text style={styles.title}>History </Text>
                </View>
                <TouchableOpacity
                    style={styles.historyBtn}
                    onPress={() => removeHistoryList()}
                >
                    <MaterialCommunityIcons name="beaker-remove-outline" size={30} color="#f9f9f9" />
                </TouchableOpacity>
            </View>
            {
                hisList.length > 0 && (
                    <FlatList
                        data={hisList}
                        renderItem={(info) => {
                            return (
                                <View style={styles.taskContainer}>
                                    <Text style={styles.historyText} >{info.item.value}</Text>
                                </View>
                            )
                        }}
                        style={{ width: "100%" }}
                    >
                    </FlatList>
                )
            }
            {/*If history list is empty*/}
            {
                hisList.length < 1 && (
                    <View>
                        <Text style={styles.emptyHistory}>Empty History</Text>
                    </View>
                )
            }
        </View>
    );
};

export default CalculationHistory;