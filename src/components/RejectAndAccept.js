import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { Colors } from "../utils/Colors";
import fonts from "../utils/fonts";
const RejectAndAccept = ({ Scan, pBar, mTop, okay, navigation, reject, paddingBottom }) => {
    return (
        <View>
            <View style={[styles.BottommainView, { marginTop: !mTop ? 30 : 0, paddingBottom: paddingBottom ? 120 : 0 }]}>
                <TouchableOpacity onPress={reject} style={styles.actionButton}>
                    <Entypo
                        name="cross"
                        style={[styles.TickButton, { color: 'red' }]}
                    />
                </TouchableOpacity>
                {Scan &&
                    <View style={{ width: "50%" }}>
                        <Text style={styles.scaningText}>scanning...</Text>
                        <Text style={styles.detailText}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                        </Text>
                    </View>
                }
                <TouchableOpacity onPress={okay} style={styles.actionButton}>
                    <Entypo name="check" style={styles.TickButton} />
                </TouchableOpacity>
            </View>
            {pBar &&
                <View style={{ width: "80%", alignSelf: "center" }}>
                    <ProgressBar progress={0.8} color={Colors.pink} />
                    <View style={styles.ProgresContainer}>
                        <Text style={styles.progressRatio}>0%</Text>
                        <Text style={styles.progressRatio}>100%</Text>
                    </View>
                </View>
            }
        </View>
    );
};

export default RejectAndAccept;

const styles = StyleSheet.create({
    actionButton: {
        backgroundColor: Colors.white,
        alignItems: "center",
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
    },
    TickButton: { color: Colors.green, fontSize: 20, textAlign: "center" },
    progressRatio: {
        color: Colors.white,
        fontFamily: fonts.PoppinsRegular,
        fontSize: 10,
    },
    ProgresContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    BottommainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flex: 1

    },
    scaningText: {
        textAlign: "center",
        color: Colors.white,
        fontFamily: fonts.PoppinsRegular,
        fontSize: 16,
    },
    detailText: {
        textAlign: "center",
        fontFamily: fonts.PoppinsRegular,
        fontSize: 8,
        paddingVertical: 8,
        color: Colors.white,
    },
});
