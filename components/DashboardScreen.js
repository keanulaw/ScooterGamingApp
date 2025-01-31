import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const scooters = [
    { id: 1, name: 'Honda Beat', cc: '110cc', price: '₱500/Day', image: 'path/to/image1' },
    { id: 2, name: 'Honda Click 125i', cc: '125cc', price: '₱600/Day', image: 'path/to/image2' },
    { id: 3, name: 'Nmax/Aerox/ADV', cc: '150cc', price: '₱800/Day', image: 'path/to/image3' },
    { id: 4, name: 'Xmax', cc: '300cc', price: '₱2000/Day', image: 'path/to/image4' },
  ];

  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('MotorcycleList', { query: searchText });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Scooter"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerContainer}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Enjoy Scooter Gaming Services and pay easily</Text>
        </View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Enjoy Scooter Gaming Services and pay easily</Text>
        </View>
      </ScrollView>

      <View style={styles.unitsContainer}>
        <Text style={styles.unitsTitle}>Our Units</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scooterList}>
        {scooters.map((scooter) => (
          <TouchableOpacity
            key={scooter.id}
            style={styles.scooterCard}
            onPress={() => navigation.navigate('MotorcycleDetail', { motorcycle: scooter })}
          >
            <Image source={{ uri: scooter.image }} style={styles.scooterImage} />
            <Text style={styles.scooterName}>{scooter.name}</Text>
            <Text style={styles.scooterCC}>{scooter.cc}</Text>
            <Text style={styles.scooterPrice}>{scooter.price}</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}></Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  bannerContainer: {
    marginVertical: 10,
  },
  banner: {
    width: 300,
    height: 150,
    backgroundColor: '#d1d8e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  unitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  unitsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: 'red',
  },
  scooterList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  scooterCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  scooterImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  scooterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scooterCC: {
    fontSize: 14,
    color: '#666',
  },
  scooterPrice: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DashboardScreen; 