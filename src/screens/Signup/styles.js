import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import fonts from "../../utils/fonts";

export const styles = StyleSheet.create({
    headerContent: {
        flexDirection: "row",
        marginTop: 60,
        paddingHorizontal: 15,
    },
    titleText: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "normal",
        color: "#3a3a3a",
        fontFamily: "Poppins",
    },
    signupText: {
        marginTop: 10,
        fontSize: 10,
        textAlign: "center",
        fontFamily: fonts.PoppinsRegular,
    },
    signupLinkText: {
        color: Colors.pink_Text,
    },

    imageContainerBottom: {
        flex: 1,
        zIndex: -1,
        paddingBottom: 130,
        justifyContent: "flex-end",
    },
    imageBottom: {
        width: "100%",
        resizeMode: "contain",
        position: "absolute",
        top: 5,
    },
    container: { backgroundColor: Colors.white, flexGrow:1 },
    socialLoginContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    HorizontalLine: {
        height: 1,
        backgroundColor: Colors.lightBlack,
        width: "20%",
    },
    socialLoginContainerTitle: {
        width: 50,
        textAlign: "center",
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
    },
    socialLoginIconsShadow: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
    },
    googleLogo: { height: 23, width: 23, paddingHorizontal: 30 },
    facebokIcon: { fontSize: 25, color: Colors.blue },
    privacyContainer: {
        backgroundColor: Colors.halfWhite,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    privcyText: {
        fontFamily: fonts.PoppinsRegular,
        fontSize: 12,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    privacyforwordIcon: {
        fontSize: 20,
        color: Colors.gray,
    },
    PrivacyBottomBorder: {
        borderBottomWidth: 0.3,
        marginHorizontal: 30,
        borderBottomColor: Colors.gray,
    },
    privacyLogo: {
        height: 25,
        width: 25,
        resizeMode: "contain",
    },
    privacyInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
