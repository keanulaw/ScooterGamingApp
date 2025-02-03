import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PaymentScreen({ route, navigation }) {
  const { totalPrice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Honda Beat</Text>
        <Text style={styles.detailLink}>Detail</Text>
      </View>
      <Text style={styles.infoText}>Wed, 23 July 2022 | Scooter Gaming PH</Text>
      <Text style={styles.infoText}>Book No. SMJ00233</Text>
      <Text style={styles.totalPayment}>Total Payment: ₱{totalPrice}</Text>

      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => navigation.navigate('PaymentDetails', { totalPrice, paymentMethod: 'Cash' })}>
        <Text style={styles.optionText}>Cash</Text>
      </TouchableOpacity>

      <View style={styles.paymentOption}>
        <Text style={styles.optionText}>E-Cash</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentDetails', { totalPrice, paymentMethod: 'G-Cash' })}>
          <Text style={styles.subOptionText}>G-Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentDetails', { totalPrice, paymentMethod: 'Paymaya' })}>
          <Text style={styles.subOptionText}>Paymaya</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paymentOption}>
        <Text style={styles.optionText}>Cards</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentDetails', { totalPrice, paymentMethod: 'BPI' })}>
          <Text style={styles.subOptionText}>BPI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentDetails', { totalPrice, paymentMethod: 'OVO' })}>
          <Text style={styles.subOptionText}>OVO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
  },
  detailLink: {
    fontSize: 18,
    color: 'red',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalPayment: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  paymentOption: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subOptionText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
});
