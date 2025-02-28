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

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value.trim() });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!form.username || !form.email || !form.password || !form.firstName || !form.lastName) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    if (!validateEmail(form.email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      // ✅ API Call instead of Firestore
      await api.post("/register", {
        username: form.username,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password, // Ensure the backend handles password securely
      });

      Alert.alert("Success", "Registration successful!");
      navigation.navigate('Login');
    } catch (error) {
      console.error("Registration Error:", error);
      Alert.alert("Error", error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account and enjoy motorcycle rentals in Cebu!</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={form.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={form.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={form.username}
        onChangeText={(text) => handleChange("username", text)}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Create Account</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signInText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  signInLink: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
