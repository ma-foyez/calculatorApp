import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { storeHistory } from './../components/HistoryStorage';
import { styles } from '../assets/styles/Styles';

const CalculatorMainScreen = (props) => {

    const [resultText, setResultText] = useState("");
    const [calText, setCalText] = useState("0");

    const onButtonClick = (inputValue) => {
        if (inputValue === "=") {

            return calculateResult();
        }
        if (calText !== "0" && calText !== 0 && calText !== "") {
            setCalText(calText + inputValue);
        } else {
            setCalText(inputValue);
        }
    };

    const calculateResult = () => {
        const checkLastOperator = calText.slice(-1);
        const initialValue = "0";
        let finalCalValue;
        //last last digit of calText is any operators, then add 0 as like value
        if (checkLastOperator == "+" || checkLastOperator == "-" || checkLastOperator == "*" || checkLastOperator == "/") {
            finalCalValue = calText.concat(initialValue);
        } else {
            finalCalValue = calText;
        }
        setCalText(calText)
        setResultText(eval(finalCalValue));
        return storeHistory(calText)
    };

    const onOperationClick = (operation) => {
        let operations = ["DEL", "+", "-", "*", "/", "%"];

        if (operation == "DEL") {
            if (resultText !== "" && resultText !== 0) {
                setResultText("")
                return setCalText(
                    resultText.toString().substring(0, calText.length - 1)
                );
            } else {
                if (calText.length > 1) {
                    return setCalText(
                        calText.toString().substring(0, calText.length - 1)
                    );
                } else {
                    return setCalText("0");
                }
            }


        }
        if (operation == "AC") {
            setCalText("0");
            setResultText("");
            return;
        }
        if (resultText !== "" && resultText !== 0) {
            if (operations.includes(calText.toString().split("").pop())) return;
            setCalText(resultText + operation);
            setResultText("")
        } else {
            if (operations.includes(calText.toString().split("").pop())) return;
            setCalText(calText + operation);
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.valueBox}>
                <View style={styles.headerBox}>
                    <View style={styles.titleBox}>
                        <Ionicons name="calculator-outline" size={30} color="#f9f9f9" />
                        <Text style={styles.title}>Calculator </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.historyBtn}
                        onPress={() => {
                            props.navigation.navigate('History');
                        }}
                    >
                        <Fontisto name="history" size={30} color="#f9f9f9" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.calculatorText}>{resultText !== "" && resultText !== 0 && calText}</Text>
                <ScrollView vertical>
                    <Text style={styles.resultText}>{resultText !== "" ? resultText : calText}</Text>
                </ScrollView>
            </View>


            <View style={styles.btnBox}>

                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("AC")}>
                        <Text style={styles.symbolicText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("DEL")}>
                        <Ionicons name="backspace-outline" size={25} color="#ff4c29" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("%")}>
                        <Text style={styles.symbolicText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("/")}>
                        <Text style={styles.symbolicText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("7")}>
                        <Text style={styles.btnText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("8")}>
                        <Text style={styles.btnText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("9")}>
                        <Text style={styles.btnText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("*")}>
                        <Text style={styles.symbolicText} >X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("4")}>
                        <Text style={styles.btnText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("5")}>
                        <Text style={styles.btnText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("6")}>
                        <Text style={styles.btnText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("-")}>
                        <Text style={styles.symbolicText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("1")}>
                        <Text style={styles.btnText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("2")}>
                        <Text style={styles.btnText} >2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("3")}>
                        <Text style={styles.btnText} >3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onOperationClick("+")}>
                        <Text style={styles.symbolicText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick("0")}>
                        <Text style={styles.btnText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => onButtonClick(".")}>
                        <Text style={styles.btnText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.equalBtn} onPress={() => onButtonClick("=")}>
                        <Text style={styles.btnText}>=</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
};

export default CalculatorMainScreen;