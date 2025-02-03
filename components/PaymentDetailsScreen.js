import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PaymentDetailsScreen({ route, navigation }) {
  const { totalPrice, paymentMethod } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <Text style={styles.orderNumber}>Order No. SMJ00233</Text>

      <View style={styles.priceDetails}>
        <Text style={styles.sectionTitle}>Price Details</Text>
        <View style={styles.detailRow}>
          <Text>Honda Beat</Text>
          <Text style={styles.price}>₱500</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>4 Days Rental</Text>
          <Text style={styles.price}>₱{totalPrice}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>Total Payment</Text>
          <Text style={styles.totalPrice}>₱{totalPrice}</Text>
        </View>
      </View>

      <View style={styles.paymentMethod}>
        <Text>Payment Method</Text>
        <TouchableOpacity style={styles.methodButton}>
          <Text style={styles.methodText}>{paymentMethod}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.agreementText}>
        By pressing the button below, you agree to{' '}
        <Text style={styles.linkText}>Terms and Conditions</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PaymentSuccess')}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
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
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  orderNumber: {
    textAlign: 'center',
    marginBottom: 20,
  },
  priceDetails: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontWeight: 'bold',
    color: 'red',
  },
  paymentMethod: {
    marginBottom: 20,
  },
  methodButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  methodText: {
    fontSize: 16,
  },
  agreementText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: 'red',
  },
  payButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
