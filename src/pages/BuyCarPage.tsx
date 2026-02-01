import React from 'react';
import CarCard from '../components/CarCard';
import { CARS_DATA } from '../constants';
import { useNavigate } from 'react-router-dom';

const BuyCarPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-[#e81c24] font-bold uppercase text-xs tracking-widest border-b-2 border-dotted border-[#e81c24] pb-1 mb-6 inline-block">
            INVENTORY
          </span>
          <h2 className="text-5xl font-black text-[#1a2b48] uppercase tracking-tight">Buy Your Dream Car</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CARS_DATA.map(car => (
            <CarCard key={car.id} car={car} onClick={() => navigate(`/car/${car.id}`)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyCarPage;
