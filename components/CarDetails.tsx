import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Button } from 'react-native';
import { Car } from '../data/cars';

interface CarDetailsProps {
  car: Car;
  visible: boolean;
  onClose: () => void;
}

export const CarDetails: React.FC<CarDetailsProps> = ({ car, visible, onClose }) => (
  <Modal visible={visible} animationType="slide" transparent>
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Image source={car.image} style={styles.image} />
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.description}>{car.description}</Text>
        <Text style={styles.price}>{car.price}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    width: 300,
  },
  image: {
    width: 180,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
  description: {
    color: '#555',
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
  },
});
