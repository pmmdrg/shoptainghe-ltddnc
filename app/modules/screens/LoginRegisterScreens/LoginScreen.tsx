import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";

import {
  backgroundColor,
  borderColor,
  buttonColors,
  textColors,
} from "../../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Home");
  };
  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <SafeAreaView>
            <Text style={styles.title}>
              Chào mừng bạn trở lại với Shop Tai nghe
            </Text>
            <Text style={styles.description}>
              Vui lòng điền các thông tin đăng nhập cần thiết.
            </Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
              keyboardType="email-address"
              inputMode="email"
              placeholder="Địa chỉ email"
              value={email}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onChangeText={(text) => setEmail(text)}
              style={
                isEmailFocused
                  ? [styles.input, styles.inputFocused]
                  : styles.input
              }
            />
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={true}
              value={password}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              onChangeText={(text) => setPassword(text)}
              style={
                isPasswordFocused
                  ? [styles.input, styles.inputFocused]
                  : styles.input
              }
            />
            <TouchableOpacity
              style={
                email !== "" && password !== ""
                  ? styles.loginButton
                  : styles.buttonDisabled
              }
              disabled={email !== "" && password !== "" ? false : true}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <View style={styles.forgotSignUpContainer}>
              <TouchableOpacity style={styles.buttonForgot}>
                <Text style={styles.forgotText}>Quên mật khẩu?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonSignUp}
                onPress={handleSignUp}
              >
                <Text style={styles.signUpText}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 16,
  },
  forgotSignUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: textColors.primaryText,
  },
  description: {
    fontSize: 15,
    paddingVertical: 20,
    color: textColors.secondaryText,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: textColors.primaryText,
  },
  input: {
    backgroundColor: backgroundColor.secondaryBackground,
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: "bold",
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: borderColor.primaryBorder,
  },
  loginButton: {
    backgroundColor: buttonColors.loginButton,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: buttonColors.disabledButton,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonForgot: {
    backgroundColor: buttonColors.transparentButton,
    paddingRight: 20,
  },
  buttonSignUp: {
    backgroundColor: buttonColors.transparentButton,
    paddingLeft: 20,
  },
  text: {
    fontSize: 14,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  forgotText: {
    color: textColors.primaryText,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  signUpText: {
    color: textColors.blueText,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default LoginScreen;
