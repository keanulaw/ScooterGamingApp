import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MotorcycleBookScreen = () => {
  const bookings = [
    {
      id: 1,
      bike: 'Honda Click 125i',
      date: 'Aug 15 - 18, 2023',
      status: 'Confirmed',
      total: '₱1,800',
    },
    {
      id: 2,
      bike: 'Suzuki Raider 150',
      date: 'Sep 1 - 5, 2023',
      status: 'Pending',
      total: '₱2,800',
    },
  ];
  const StatusBadge = ({ status }) => (
    <View style={[
      styles.statusBadge,
      { backgroundColor: status === 'Confirmed' ? '#4CD964' : '#FFCC00' }
    ]}>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>My Bookings</Text>
      
      <View style={styles.segmentContainer}>
        <TouchableOpacity style={[styles.segmentButton, styles.activeSegment]}>
          <Text style={styles.activeSegmentText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentButton}>
          <Text style={styles.segmentText}>Past</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingCard}>
            <View style={styles.bookingHeader}>
              <View style={styles.bikeInfo}>
                <Ionicons name="calendar" size={20} color="#4b6584" />
                <Text style={styles.bookingDate}>{booking.date}</Text>
              </View>
              <StatusBadge status={booking.status} />
            </View>

            <View style={styles.bookingContent}>
              <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>Image</Text>
              </View>
              <View style={styles.bookingDetails}>
                <Text style={styles.bikeName}>{booking.bike}</Text>
                <Text style={styles.totalText}>Total: {booking.total}</Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Modify</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  segmentContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  imagePlaceholder: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: 'white',
    fontSize: 12,
  },
  segmentButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeSegment: {
    backgroundColor: '#FF3B30',
  },
  segmentText: {
    color: '#666',
    fontWeight: '600',
  },
  activeSegmentText: {
    color: 'white',
    fontWeight: '600',
  },
  scrollContainer: {
    padding: 15,
  },
  bookingCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  bikeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingDate: {
    marginLeft: 8,
    color: 'black',
    fontWeight: '600',
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  statusText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  bookingContent: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bookingImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  bookingDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  bikeName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  totalText: {
    fontSize: 16,
    color: '#4CD964',
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#4b6584',
    fontWeight: '600',
  },
});

export default MotorcycleBookScreen;