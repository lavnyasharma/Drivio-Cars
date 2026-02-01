
import React from 'react';
import { Camera, Fuel, Gauge, ArrowRight } from 'lucide-react';
import { Car } from '../types';

interface Props {
  car: Car;
  onClick?: () => void;
}


const CarCard: React.FC<Props> = ({ car, onClick }) => {
  return (
    <div 
      className="bg-white group flex flex-col h-full rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      {/* Image Wrapper */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Top Left Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {car.featured && (
            <span className="bg-[#e81c24] text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-sm tracking-widest shadow-xl">
              Featured
            </span>
          )}
          <div className="flex items-center gap-1.5 bg-black/80 text-white px-3 py-1.5 rounded-sm text-[10px] font-bold shadow-xl backdrop-blur-sm">
             <Camera size={14} /> {Math.floor(Math.random() * 5) + 4}
          </div>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4 z-10">
           <span className="bg-[#e81c24] text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-sm tracking-widest shadow-xl">
             {car.year}
           </span>
        </div>

        {/* Bottom Red Line Only */}
        <div className="absolute bottom-0 left-0 h-1 w-16 bg-[#e81c24] z-10"></div>
      </div>
      
      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-[#e81c24] text-[11px] font-bold uppercase tracking-widest mb-2 block">{car.type}</span>
        <h3 className="text-xl font-black text-[#1a2b48] mb-3 group-hover:text-[#e81c24] transition-colors leading-tight line-clamp-2">
          {car.make} {car.model}
        </h3>
        <p className="text-[#e81c24] font-black text-xl mb-8">${car.price.toLocaleString()}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Fuel size={18} className="text-gray-400 stroke-[1.5]" />
            <div className="text-[10px]">
              <p className="text-gray-400 font-bold uppercase tracking-wide">Fuel Type</p>
              <p className="text-[#1a2b48] font-black">{car.fuel}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Gauge size={18} className="text-gray-400 stroke-[1.5]" />
            <div className="text-[10px]">
              <p className="text-gray-400 font-bold uppercase tracking-wide">Mileage</p>
              <p className="text-[#1a2b48] font-black">{car.mileage}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Settings2Icon />
            <div className="text-[10px]">
              <p className="text-gray-400 font-bold uppercase tracking-wide">Trans</p>
              <p className="text-[#1a2b48] font-black">Auto</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto border-t border-gray-100 pt-6">
          <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#1a2b48] group-hover:text-[#e81c24] transition-colors">
            VIEW DETAILS
            <ArrowRight size={14} className="text-[#e81c24] group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Settings2Icon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
);

export default CarCard;

