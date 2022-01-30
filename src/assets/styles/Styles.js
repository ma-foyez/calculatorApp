import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#082032',
    },
    valueBox: {
        flex: 0.6,
        padding: 10,

    },
    headerBox: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-evenly",
        marginTop: 40,
        alignItems: "center",
    },
    historyBtn: {
        width: wp(30),
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row"
    },
    titleBox: {
        width: wp(40),
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    title: {
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
        fontWeight: "bold",
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

    // calculation history
    emptyHistory: {
        color: "#f9f9f9",
        alignSelf: 'center',
        marginVertical: 300
    },
    taskContainer: {
        padding: 10,
        margin: 5,
        fontSize: 28,
        borderBottomColor: "#f9f9f9",
        borderBottomWidth: 1,
        fontWeight: "bold",
        textAlign: "right",
        color: "#f9f9f9",
        marginTop: 10
    },
    historyText: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "right",
        color: "#f9f9f9",
    },
});