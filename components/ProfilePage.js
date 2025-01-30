import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfilePage = () => {
  const user = {
    name: 'John Maverick',
    email: 'john.maverick@example.com',
    phone: '+63 912 345 6789',
    joined: 'Member since March 2022',
    rides: 15,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>Profile Image</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.memberSince}>{user.joined}</Text>
          <View style={styles.ridesBadge}>
            <Ionicons name="bicycle" size={18} color="white" />
            <Text style={styles.ridesText}>{user.rides} Rides</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <View style={styles.infoItem}>
          <Ionicons name="mail" size={20} color="#4b6584" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Email Address</Text>
            <Text style={styles.infoValue}>{user.email}</Text>
          </View>
          <Ionicons name="checkmark-circle" size={20} color="#4CD964" />
        </View>
        
        <View style={styles.infoItem}>
          <Ionicons name="call" size={20} color="#4b6584" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <Text style={styles.infoValue}>{user.phone}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  placeholderText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  memberSince: {
    color: '#666',
    marginBottom: 8,
  },
  ridesBadge: {
    flexDirection: 'row',
    backgroundColor: '#4b6584',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  ridesText: {
    color: 'white',
    marginLeft: 6,
    fontWeight: '600',
  },
  section: {
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  infoContent: {
    flex: 1,
    marginLeft: 15,
  },
  infoLabel: {
    color: '#666',
    fontSize: 14,
    marginBottom: 2,
  },
  infoValue: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    color: '#333',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfilePage;