import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import Modal from "react-native-modal";
import fonts from "../utils/fonts";
import { BlurView } from "@react-native-community/blur";

const ModalCustom = ({ title, isVisible, onBackdropPress, onPress }) => {
    return (
        <Modal onBackdropPress={onBackdropPress} isVisible={isVisible}>
            <BlurView
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    position: "absolute",
                    left: -22,
                }}
                blurType="light"
                blurAmount={0.1}
                reducedTransparencyFallbackColor="white"
            >
                <View
                    style={{
                        backgroundColor: Colors.white,
                        height: 260,
                        borderRadius: 20,
                        width: 250,
                    }}
                >
                    <Image
                        style={styles.warning}
                        source={require("../../assets/warning.png")}
                    />
                    <Text style={styles.modalText}>{title}</Text>
                    <TouchableOpacity
                        onPress={onPress}
                        style={[
                            styles.modalButton,
                            { marginBottom: 15, backgroundColor: Colors.bluesh },
                        ]}
                    >
                        <Text style={styles.modalButtonText}>save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={styles.modalButton}>
                        <Text style={styles.modalButtonText}>cancel</Text>
                    </TouchableOpacity>
                </View>
            </BlurView>
        </Modal>
    );
};

export default ModalCustom;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        zIndex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    modalButton: {
        backgroundColor: "red",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    modalButtonText: {
        padding: 12,
        width: 145,
        color: Colors.white,
        fontFamily: fonts.PoppinsRegular,
        textAlign: "center",
    },
    warning: {
        height: 30,
        width: 30,
        alignSelf: "center",
        marginVertical: 20,
    },
    modalText: {
        alignSelf: "center",
        width: 200,
        textAlign: "center",
        marginBottom: 20,
        fontFamily: fonts.bold,
    },
});
