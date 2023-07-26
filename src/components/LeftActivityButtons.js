import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import fonts from "../utils/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { BlurView } from "@react-native-community/blur";

const LeftActivityButtons = ({ undo, save, share, retake }) => {
    return (
        <TouchableOpacity style={styles.actionButton}>
            <BlurView
                style={styles.innerGradient}
                blurType="light"
                blurAmount={16}
                reducedTransparencyFallbackColor="white"
            >
                {undo ? (
                    <MaterialCommunityIcons
                        name="undo-variant"
                        style={[styles.actionLogo, styles.Blur]}
                    />
                ) : (
                    <>
                        {save ? (
                            <FontAwesome5 name="save" style={styles.actionLogo} />
                        ) : (
                            <>
                                {share ? (
                                    <FontAwesome name="share" style={styles.actionLogo} />
                                ) : (
                                    <Entypo name="camera" style={styles.actionLogo} />
                                )}
                            </>
                        )}
                        {retake ? (
                            <Entypo name="camera" style={styles.actionLogo} />
                        ) : (
                            <MaterialCommunityIcons
                                name="restore"
                                style={[styles.actionLogo, styles.Blur]}
                            />
                        )}
                    </>
                )}

                <Text style={[styles.actiontext, styles.Blur]}>Undo</Text>
            </BlurView>
        </TouchableOpacity>
    );
};

export default LeftActivityButtons;

const styles = StyleSheet.create({
    actionButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        marginVertical: 5,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        overflow: "hidden",
    },
    innerGradient: {
        flexDirection: "row",
        alignItems: "center",
        width: 110,
        flex: 1,
    },
    actionLogo: {
        fontSize: 20,
        color: Colors,
        paddingLeft: 10,
    },
    actiontext: {
        color: Colors.white,
        fontFamily: fonts.PoppinsRegular,
        fontSize: 12,
        paddingHorizontal: 15,
    },
    Blur: { opacity: 0.6 },
});
