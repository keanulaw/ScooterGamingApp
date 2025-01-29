import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email and password to continue</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>or</Text>
      
      <SocialIcon
        title="Sign in with Google"
        button
        type="google"
      />
      
      <SocialIcon
        title="Sign in with Facebook"
        button
        type="facebook"
      />
      
      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink}>Register Here.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#888',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  registerLink: {
    color: '#ff0000',
  },
});

export default LoginScreen; 