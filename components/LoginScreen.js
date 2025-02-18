import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import api from "../api/api";

const LoginScreen = ({ navigation }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!usernameOrEmail.trim() || !password.trim()) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    setLoading(true);

    try {
      console.log("🔍 Logging in:", usernameOrEmail, password);
      const response = await api.post("/login", { usernameOrEmail, password });

      if (response.data && response.data.user) {
        console.log("✅ Login Success:", response.data.user);
        Alert.alert("Success", `Welcome, ${response.data.user.firstName}!`);
        navigation.replace('MotorcycleList');
      } else {
        throw new Error("Invalid response from server");
      }
      
    } catch (error) {
      console.error("❌ Login Error:", error);
      const errorMessage = error.response?.data?.error || "Login failed. Please check your credentials.";
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email or username and password to continue</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        keyboardType="email-address"
        autoCapitalize="none"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.disabledButton]} 
        onPress={handleLogin} 
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Enter</Text>}
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <SocialIcon title="Sign in with Google" button type="google" />
      <SocialIcon title="Sign in with Facebook" button type="facebook" />

      <Text style={styles.registerText}>
        Don't have an account?{' '}
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
          Register Here.
        </Text>
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
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#007BFF',
    marginBottom: 20,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    fontSize: 14,
  },
  registerLink: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
