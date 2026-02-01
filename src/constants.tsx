
import { Car } from './types';

export const CARS_DATA: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    price: 84900,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop',
    mileage: '1,200 mi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'Coupe',
    condition: 'Used',
    featured: true
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'G-Class AMG',
    year: 2024,
    price: 179000,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    mileage: '50 mi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'SUV',
    condition: 'New',
    featured: true
  },
  {
    id: '3',
    make: 'Audi',
    model: 'RS7 Sportback',
    year: 2022,
    price: 112000,
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800&auto=format&fit=crop',
    mileage: '12,500 mi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'Sedan',
    condition: 'Used',
    featured: false
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911 GT3',
    year: 2023,
    price: 198500,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    mileage: '2,100 mi',
    transmission: 'Manual',
    fuel: 'Petrol',
    type: 'Coupe',
    condition: 'Used',
    featured: true
  },
  {
    id: '5',
    make: 'Land Rover',
    model: 'Defender 110',
    year: 2024,
    price: 76000,
    image: 'https://images.unsplash.com/photo-1618245472895-399676735e26?q=80&w=800&auto=format&fit=crop',
    mileage: '150 mi',
    transmission: 'Automatic',
    fuel: 'Diesel',
    type: 'SUV',
    condition: 'New',
    featured: false
  },
  {
    id: '6',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 89900,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad42243c79?q=80&w=800&auto=format&fit=crop',
    mileage: '5,000 mi',
    transmission: 'Automatic',
    fuel: 'Electric',
    type: 'Sedan',
    condition: 'Used',
    featured: false
  },
  {
    id: '7',
    make: 'Ford',
    model: 'F-150 Raptor',
    year: 2024,
    price: 92000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    mileage: '10 mi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'Truck',
    condition: 'New',
    featured: true
  },
  {
    id: '8',
    make: 'Volkswagen',
    model: 'Golf GTI',
    year: 2021,
    price: 32000,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    mileage: '35,000 mi',
    transmission: 'Manual',
    fuel: 'Petrol',
    type: 'Hatchback',
    condition: 'Used',
    featured: false
  }
];

export const MAKES = ['All Makes', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Land Rover', 'Tesla', 'Ford', 'Volkswagen'];
export const TYPES = ['All Types', 'SUV', 'Sedan', 'Coupe', 'Hatchback', 'Truck'];
export const YEARS = ['All Years', '2024', '2023', '2022', '2021', '2020'];
