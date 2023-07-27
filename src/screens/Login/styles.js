import { StyleSheet } from "react-native";
import fonts from "../../utils/fonts";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    contentContainer:{
        flex:1,
        marginHorizontal: 20,
    },
    welcomeText: {
        marginTop: 100,
        textAlign: "center",
        color: Colors.primaryBlue,
        fontSize: 32,
        fontFamily: fonts.PoppinsMedium,
    },
    textinputContainer: {
        marginTop: 30,
    },
    forgotPasswordText: {
        color: Colors.primaryBlue,
        textAlign: "right",
        paddingHorizontal: 20,
        fontSize: 12,
        fontFamily: fonts.PoppinsRegular,
        marginTop: 20,
    },
    buttonContainer: {
        width:'100%',
        // flex:0.2,
        // alignSelf: "center",
        marginTop: 30,
    },
    signupText: {
        fontSize: 13,
        textAlign: "center",
        fontFamily: fonts.PoppinsRegular,
    },
    signupLinkText: {
        color: Colors.primaryBlue,
        alignItems:"center",
        fontSize: 13,
    },
    signupLabel:{ 
        // alignItems: "center",
    justifyContent:"center",
    marginTop: 80,
    flexDirection:"row" },
    imageContainerBottom: {
        flex: 1,
        zIndex: -1,
        paddingBottom:220,
        justifyContent: "flex-end",
    },
    imageBottom: {
        width: "100%",
        resizeMode: "contain",
        position: "absolute",
        top: 95,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
      },
});
