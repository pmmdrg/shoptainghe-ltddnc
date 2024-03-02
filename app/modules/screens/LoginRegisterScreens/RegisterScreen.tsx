import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  backgroundColor,
  borderColor,
  buttonColors,
  textColors,
} from '../../../assets/colors';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleContinue = () => {};

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký tài khoản</Text>
        <Text style={styles.description}>
          Nhập địa chỉ email để đăng ký tài khoản.
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          inputMode='email'
          placeholder='Địa chỉ email'
          value={email}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          onChangeText={(text) => setEmail(text)}
          style={
            isEmailFocused ? [styles.input, styles.inputFocused] : styles.input
          }
        />
        <TouchableOpacity
          style={email !== '' ? styles.continueButton : styles.buttonDisabled}
          disabled={email !== '' ? false : true}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text style={styles.description}>Đã có tài khoản?</Text>
          <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
            <Text style={styles.signInText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 120,
    color: textColors.primaryText,
  },
  description: {
    fontSize: 16,
    paddingVertical: 20,
    color: textColors.secondaryText,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: textColors.primaryText,
    marginTop: 20,
  },
  input: {
    backgroundColor: backgroundColor.secondaryBackground,
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: 'bold',
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: borderColor.primaryBorder,
  },
  continueButton: {
    backgroundColor: buttonColors.loginButton,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 30,
  },
  buttonDisabled: {
    backgroundColor: buttonColors.disabledButton,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonSignIn: {
    backgroundColor: buttonColors.transparentButton,
    paddingLeft: 4,
  },
  text: {
    fontSize: 14,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  signInText: {
    color: textColors.blueText,
    fontWeight: 'bold',
    paddingVertical: 20,
    fontSize: 16,
  },
});

export default RegisterScreen;
