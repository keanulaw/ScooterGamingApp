import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PaymentSuccessScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✔️</Text>
      </View>
      <Text style={styles.title}>Your motorbike has been successfully booked</Text>
      <Text style={styles.message}>
        Your motorbike has been successfully booked, all you have to do is confirm with the rental place via chat in this application or by tapping the button below
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Payment Success</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8e8e8',
    padding: 20,
  },
  iconContainer: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
