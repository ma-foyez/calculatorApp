import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

const CalculatorMainScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.valueBox}>
                <View style={styles.titleBox}>
                    <Ionicons name="calculator-outline" size={30} color="#f9f9f9" />
                    <Text style={styles.title}>Calculator </Text>
                </View>
                <Text style={styles.calculatorText}>5 x 5</Text>
                <Text style={styles.resultText}>25</Text>
            </View>


            <View style={styles.btnBox}>

                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.symbolicText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="backspace-outline" size={25} color="#ff4c29" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.symbolicText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.symbolicText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.symbolicText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.symbolicText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.symbolicText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.equalBtn}>
                        <Text style={styles.btnText}>=</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#082032',
    },
    valueBox: {
        flex: 0.6,
        padding: 10,
      
    },
    titleBox: {
        width: wp(40),
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40,
        flexDirection: "row"
    },
    title:{
        fontSize: 30,
        color: "#f9f9f9",
        marginLeft: 10
    },
    calculatorText: {
        alignSelf: "flex-end",
        fontSize: 30,
        color: "#f9f9f9",
        marginTop: 30,
    },
    resultText: {
        alignSelf: "flex-end",
        fontSize: 60,
        color: "#f9f9f9",
        fontWeight: "bold"
    },
    btnBox: {
        flex: 1.2,
        padding: 10,
        borderTopColor: "#30536e",
        borderWidth: 1,
        borderRadius: 25,
    },
    btnRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10
    },
    btn: {
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#183245",
        // elevation: 40,
        // borderWidth: 1,
        // borderColor: "white"
    },
    btnText: {
        fontSize: 25,
        color: "#f9f9f9",
    },
    symbolicText: {
        fontSize: 25,
        color: "#ff4c29",
    },
    equalBtn: {
        width: 160,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 25,
        backgroundColor: "#ff4c29",
        color: "#f9f9f9"
    },
});


export default CalculatorMainScreen;