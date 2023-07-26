import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { buttonPair, Colors } from "../utils/Colors";
import fonts from "../utils/fonts";
const CustomButton = ({ title, onPress, radius }) => {
    return (
        <TouchableOpacity onPress={onPress}>
           
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    gradientContainer: {
        marginTop: 30,
        alignItems: "center",
        width: 250,
        paddingVertical: 15,
    },
    ButtonLabel: {
        textAlign: "center",
        color: Colors.white,
        fontFamily: fonts.bold,
        fontSize: 16,
    },
});
