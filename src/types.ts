
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: string;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  type: 'SUV' | 'Sedan' | 'Coupe' | 'Hatchback' | 'Truck';
  condition: 'New' | 'Used';
  featured: boolean;
}

export interface FilterOptions {
  make: string;
  model: string;
  year: string;
  type: string;
  minPrice: string;
  maxPrice: string;
}
