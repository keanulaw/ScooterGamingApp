import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MotorcycleDetailScreen = ({ route }) => {
  const { motorcycle } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageCarousel}>
        <Image source={{ uri: motorcycle.image }} style={styles.image} />
        {/* Add more images if needed */}
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{motorcycle.name}</Text>
        <Text style={styles.location}>
          <Ionicons name="location-sharp" size={14} color="gray" /> {motorcycle.location}
        </Text>

        <View style={styles.addOns}>
          <Text style={styles.addOnsTitle}>Add Ons:</Text>
          <View style={styles.addOnItem}>
            <Image source={{ uri: 'path/to/extra-helmet-image' }} style={styles.addOnImage} />
            <Text style={styles.addOnText}>Extra Helmet</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₱{motorcycle.price} Per Day</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageCarousel: {
    height: 250,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
  addOns: {
    marginVertical: 20,
  },
  addOnsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addOnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addOnImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  addOnText: {
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  bookButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MotorcycleDetailScreen; 