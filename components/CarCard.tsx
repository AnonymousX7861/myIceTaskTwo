import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Car } from '../data/cars';

interface CarCardProps {
  car: Car;
  onPress: () => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={car.image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{car.name}</Text>
      <Text numberOfLines={2} style={styles.description}>{car.description}</Text>
      <Text style={styles.price}>{car.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: '#555',
    fontSize: 13,
    marginBottom: 4,
  },
  price: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
