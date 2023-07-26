import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Textinput from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native";
import { styles } from "./styles";

const Signup = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContent}>
        <Ionicons
          name="chevron-back"
          size={18}
          color="#3a3a3a"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>Signup</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Textinput label={"full name"} />
        <Textinput label={"email"} />
        <Textinput label={"password"} />
        <Textinput label={"confirm password"} />
      </View>
      <View style={{ alignSelf: "center" }}>
        <CustomButton title={"Signup"} />
      </View>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.signupText}
        >
          Already have an account?
          <Text style={styles.signupLinkText}> Login</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <View style={styles.HorizontalLine} />
        <View>
          <Text style={styles.socialLoginContainerTitle}>or</Text>
        </View>
        <View style={styles.HorizontalLine} />
      </View>
      <View style={styles.socialLoginIconsShadow}>
        <TouchableOpacity>
          <AntDesign name="facebook-square" style={styles.facebokIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/google.png")}
            resizeMode="contain"
            style={styles.googleLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="apple1" style={{ fontSize: 25 }} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate("PrivacyPolicy")}
          style={styles.privacyContainer}
        >
          <View style={styles.privacyInnerContainer}>
            <Image
              source={require("../../../assets/privacyPolicy.png")}
              style={styles.privacyLogo}
            />
            <Text style={styles.privcyText}>Privacy Policy</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5
              name="greater-than"
              style={styles.privacyforwordIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.PrivacyBottomBorder} />
        <TouchableOpacity
          // onPress={() => navigation.navigate("TermsConditions")}
          style={styles.privacyContainer}
        >
          <View style={styles.privacyInnerContainer}>
            <Image
              source={require("../../../assets/termAndConditions.png")}
              style={styles.privacyLogo}
            />
            <Text style={styles.privcyText}>Term & Conditions</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5
              name="greater-than"
              style={styles.privacyforwordIcon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainerBottom}>
        <Image
          source={require("../../../assets/bottompink.png")}
          style={styles.imageBottom}
        />
      </View>
    </ScrollView>
  );
};

export default Signup;
