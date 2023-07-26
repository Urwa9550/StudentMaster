import { StyleSheet } from "react-native";
import fonts from "../../utils/fonts";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    heading: {
        fontSize: 25,
        marginBottom: 20,
        fontFamily: fonts.bold,
        color: Colors.lightBlack,
    },
    logo: {
        height: 89,
        width: 195,
        resizeMode: "contain",
        marginVertical: 10,
    },
    subHeading: {
        color: Colors.lightBlack,
        fontFamily: fonts.PoppinsRegular,
        letterSpacing: 6,
    },
    tagline: {
        letterSpacing: 2,
        paddingTop: 3,
        color: Colors.gray,
        fontSize: 10,
    },
});
