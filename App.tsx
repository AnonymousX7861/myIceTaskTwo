import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, TextInput, Image, Text, Button } from 'react-native';
import { CarCard } from './components/CarCard';	
import { CarDetails } from './components/CarDetails';
import { Car, cars } from './data/cars';

const App: React.FC = () => {
const [selectedCar, setSelectedCar] = useState<Car | null>(null);
const [modalVisible, setModalVisible] = useState(false);
const [searchText, setSearchText] = useState('');

const handleCardPress = (car: Car) => {
	setSelectedCar(car);
	setModalVisible(true);
};

const handleCloseModal = () => {
	setModalVisible(false);
	setSelectedCar(null);
};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />
      <Text>Car Showcase</Text>
	  <TextInput
		placeholder="Enter name"
		onChangeText={(text) => setSearchText(text)}
		value={searchText}
	  />
	 <Image source={require('./assets/Asphalt-Legends-Unite-Koenigsegg-Agera-RS.webp')} style={{ width: 50, height: 50 }} />
   <Text>Asphalt Legends Unite</Text>
   <Text> Koenigsegg Agera RS</Text>
   <Text>Details</Text>
   <Button title="Details of car" onPress={() => alert('Details of car')} />
	  <FlatList 
		data={cars.filter((car: { name: string; }) =>
		  car.name.toLowerCase().includes(searchText.toLowerCase())
		)}
		keyExtractor={(item) => item.id.toString()}
		renderItem={({ item }) => (
		  <CarCard car={item} onPress={() => handleCardPress(item)} />
		)}
		contentContainerStyle={styles.list}
	  />
	  {selectedCar && (
		<CarDetails car={selectedCar} visible={modalVisible} onClose={handleCloseModal} />
	  )}
	</SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
	},
	list: {
		padding: 16,
	},
});

export default App;

