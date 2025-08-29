// Car data for the showcase app

export interface Car {
  id: number;
  name: string;
  image: any; // Use 'any' for require() images
  description: string;
  price: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: require('../assets/car1.png'), // Add your own images to assets
    description: 'An all-electric five-door liftback sedan produced by Tesla, Inc.',
    price: '$89,990',
  },
  {
    id: 2,
    name: 'BMW M3',
    image: require('../assets/car2.png'),
    description: 'A high-performance version of the BMW 3 Series, developed by BMW M GmbH.',
    price: '$70,895',
  },
  {
    id: 3,
    name: 'Audi R8',
    image: require('../assets/car3.png'),
    description: 'A mid-engine, 2-seater sports car, which uses Audi\'s trademark quattro permanent all-wheel drive system.',
    price: '$142,700',
  },
];
