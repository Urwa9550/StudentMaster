import React, { useState } from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextStyle } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

import { styles } from "./styles";
import { validateLogin } from "../../utils/Helper";
import InputField from "../../components/InputField";
import { renderStatusBar } from "../../utils/UIUtils";
import { String } from "../../utils/String";
import { LoginProps, ErrorState } from '../../utils/Types'


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
        style={styles.content_container}
      >
        <Text style={styles.welcome_text}>Welcome Back</Text>

        <View style={styles.text_input_container}>
          <InputField
            title="Email"
            placeholder="someone@mail.com"
            onChangeText={(val) => { setEmail(val) }}
          />
          {errorMessage?.email && <Text style={styles.error_text}>{errorMessage.email}</Text>}

          <InputField
            title="Password"
            placeholder="••••••••"
            containerStyle={{ marginTop: 20 }}
            eyeOffSvg={true}
            secureTextEntry={true}
            onChangeText={(val) => { setPassword(val) }}
          />
          {errorMessage?.password && <Text style={styles.error_text}>{errorMessage.password}</Text>}
          <View>
            <Text style={styles.forgot_password_text}>Forgot Password?</Text>
          </View>
        </View>

        <View style={styles.button_container}>
          <PrimaryButton
            title="Sign in"
            disable={email === "" || password === ""}
            loading={isLoading}
            onPress={() => handleLogin()}
          />
        </View>

        <View style={styles.signup_label}>
          <Text onPress={() => navigation.navigate("Signup")} style={styles.signup_text}>
            Don't have an account?
          </Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.signup_link_text}> Sign up</Text>
            </TouchableOpacity>
          </View>
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
