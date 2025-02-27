import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

export default function InquireScreen({ route, navigation }) {
  const { totalPrice } = route.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booked</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.bookNumber}>Book No. SMJ00233</Text>
            <Text style={styles.dateText}>Wed, 23 July 2022</Text>
          </View>
          <Text style={styles.itemTitle}>Honda Beat Playful</Text>
          <Text style={styles.itemSubtitle}>Scooter Gaming PH</Text>
          <Text style={styles.price}>₱{totalPrice}</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Waiting for Confirmation</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate('BookingDetail', {
              bookingNumber: 'SMJ00233',
              itemName: 'Honda Beat Playful',
              vendorName: 'Scooter Gaming PH',
              pickUpTime: 'July 16, 2022 (10:00 AM)',
              returnTime: 'July 16, 2022 (10:00 PM)',
              rentalDuration: '1 Day',
            });
          }}
        >
          <Text style={styles.itemButtonText}>View Booking Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: 'red',
    paddingVertical: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  bookNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#555',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  statusText: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  itemButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 