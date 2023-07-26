import React, { useState } from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextStyle } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

import { styles } from "./styles";
import { validateLogin } from "../../utils/Helper";
import InputField from "../../components/InputField";
import { renderStatusBar } from "../../utils/UIUtils";
import { String } from "../../utils/String";

interface LoginProps {
  navigation: any;
}

interface ErrorState {
  email?: string;
  password?: string;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<ErrorState>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = () => {
    const error: ErrorState = validateLogin(email, password);
    setErrorMessage(error);

    if (Object.keys(error).length === 0) {
      if (email.toLowerCase() === "teacher@email.com") {
        navigation.navigate('Home2');
      } else if (email.toLowerCase() === "student@email.com") {
        navigation.navigate('Home');
      } else {
        setErrorMessage({ ...error, email: String.USER_NOT_FOUND });
      }
    }
  };

  const renderContent = () => {
    return (
      <KeyboardAvoidingView
        style={styles.contentContainer}
      >
        {/* <Auth_Header navigation={navigation} title={"Log in"} /> */}
        <Text style={styles.welcomeText}>Welcome Back</Text>

        <View style={styles.textinputContainer}>
          <InputField
            title="Email"
            placeholder="someone@mail.com"
            onChangeText={(val) => { setEmail(val) }}
          />
          {errorMessage?.email && <Text style={styles.errorText}>{errorMessage.email}</Text>}

          <InputField
            title="Password"
            placeholder="••••••••"
            containerStyle={{ marginTop: 20 }}
            eyeOffSvg={true}
            secureTextEntry={true}
            onChangeText={(val) => { setPassword(val) }}
          />
          {errorMessage?.password && <Text style={styles.errorText}>{errorMessage.password}</Text>}
          <View>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Sign in"
            disable={email === "" || password === ""}
            loading={isLoading}
            onPress={() => handleLogin()}
          />
        </View>

        <View style={styles.signupLabel}>
          <Text onPress={() => navigation.navigate("Signup")} style={styles.signupText}>
            Don't have an account?{<TouchableOpacity>
              <Text style={styles.signupLinkText}> Sign up</Text>
            </TouchableOpacity>}
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <View style={styles.container}>
      {renderStatusBar()}
      {renderContent()}
    </View>
  );
};

export default Login;
