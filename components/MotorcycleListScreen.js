// MotorcycleListScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const motorcycleData = [
  { id: 1, name: 'Honda Beat', location: 'Lahug, Salinas Drive Extension', price: 500, rating: 4 },
  { id: 2, name: 'Honda Click 125i', location: 'Lahug, Salinas Drive Extension', price: 600, rating: 4 },
  { id: 3, name: 'Yamaha Mio Soul', location: 'Lahug, Salinas Drive Extension', price: 550, rating: 4 },
  { id: 4, name: 'Suzuki Raider 150', location: 'Lahug, Salinas Drive Extension', price: 700, rating: 5 },
  { id: 5, name: 'Kawasaki Barako', location: 'Lahug, Salinas Drive Extension', price: 650, rating: 3 },
];

const MotorcycleListScreen = () => {
  const [searchText, setSearchText] = useState('');

  const filteredMotorcycles = motorcycleData.filter(motorcycle =>
    motorcycle.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for motorcycles..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <ScrollView>
        {filteredMotorcycles.map((motorcycle) => (
          <View key={motorcycle.id} style={styles.card}>
            {/* Placeholder for motorcycle image */}
            <View style={styles.imagePlaceholder}></View>
            <View style={styles.cardContent}>
              <Text style={styles.motorcycleName}>{motorcycle.name}</Text>
              <Text style={styles.location}><Ionicons name="location-sharp" size={14} color="gray" /> {motorcycle.location}</Text>
              <Text style={styles.price}>₱{motorcycle.price}/Day</Text>
              <View style={styles.ratingContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Ionicons
                    key={index}
                    name={index < motorcycle.rating ? 'star' : 'star-outline'}
                    size={16}
                    color="orange"
                  />
                ))}
              </View>
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
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  motorcycleName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 4,
  },
  price: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default MotorcycleListScreen;
