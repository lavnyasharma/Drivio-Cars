
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: { make: string; type: string; year: string; priceMax: string; condition: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'New' | 'Used'>('All');

  return (
    <section className="relative h-[800px] overflow-hidden bg-[#0a1128]">
      {/* Main Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>

      {/* Floating Elements & Overlay */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 md:px-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
          
          {/* Left Text Content */}
          <div className="text-white max-w-xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="mb-6">
              <span className="text-[#e81c24] font-black uppercase text-xs tracking-[0.2em] border-b-2 border-dotted border-[#e81c24] pb-1">
                TRUSTED CAR DEALER SERVICE
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8">
              Premium Car <br/>Collection
            </h1>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
              Car dealerships may sell new cars from one or several manufacturers, as well as used cars.
            </p>
            <div className="flex items-center gap-8">
              <button className="bg-[#e81c24] text-white px-10 py-5 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white hover:text-[#e81c24] transition-all">
                GO TO LISTING
              </button>
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#e81c24] shadow-2xl hover:scale-110 transition-transform">
                <Play fill="currentColor" size={24} />
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000">
            {/* 40% OFF Badge */}
            <div className="absolute top-0 right-[20%] z-20">
              <div className="bg-[#e81c24]/20 backdrop-blur-md w-32 h-32 rounded-full flex flex-col items-center justify-center border border-white/20 shadow-2xl">
                <span className="text-white text-3xl font-black">40%</span>
                <span className="text-white text-xs font-bold uppercase">OFF</span>
                {/* Tail for speech bubble look */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white/20 rotate-45 border-r border-b border-white/20"></div>
              </div>
            </div>

            {/* Red Car Image */}
            <img 
              src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/slider-01-main.png" 
              alt="Luxury Car" 
              className="w-full h-auto z-10 relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            />

            {/* Car Info Box Overlay */}
            <div className="absolute bottom-10 right-0 z-20 bg-black/90 backdrop-blur-sm p-6 w-[350px] border-l-4 border-[#e81c24] animate-in slide-in-from-bottom-5 duration-700">
               <div className="absolute top-[-15px] left-[-15px] w-8 h-8 bg-[#e81c24] rounded-full flex items-center justify-center text-white cursor-pointer hover:rotate-90 transition-transform">
                 <X size={16} />
               </div>
               <div className="flex justify-between items-center mb-3">
                 <h3 className="text-white font-bold text-lg">Luxury Ford Car</h3>
                 <span className="text-[#e81c24] font-black text-xl">$130,000</span>
               </div>
               <p className="text-gray-400 text-xs leading-relaxed">
                 1421 San Pedro St, Los Angeles, CA <br/>
                 Ectetur Adipisicing Elit
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Explore More Theme" Side Tab */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-[#4e44ff] text-white py-6 px-2 vertical-text font-bold text-xs uppercase tracking-widest rounded-l-md cursor-pointer hover:pr-4 transition-all">
        Explore More Theme
      </div>

      {/* Overlapping Tabs at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="flex bg-[#f3f6f9] w-fit rounded-t-lg overflow-hidden">
            {['All', 'New', 'Used'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-16 py-5 text-sm font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-[#1a2b48] text-white relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[10px] after:border-t-[#1a2b48] after:mb-[-10px]' 
                    : 'bg-white text-[#1a2b48] hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;
