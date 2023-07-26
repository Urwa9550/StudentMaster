import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from '../../components/CustomButton';
import { styles } from "./styles";

const Index = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../../assets/Splash.jpeg")}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.heading}>welcome to</Text>
                {/* <Image
                    source={require("../../../assets/lip.png")}
                    style={styles.logo}
                /> */}
                <Text style={styles.subHeading}>Schedule Master</Text>
                <Text style={styles.tagline}>Check & Schedule</Text>

            </View>
            <View style={{ marginBottom: '30%', bottom: 0, position: 'absolute', alignSelf: 'center' }}>
                <CustomButton onPress={() => navigation.navigate('Login')} title="get Started" />
            </View>
        </ImageBackground>
    );
};



export default Index;