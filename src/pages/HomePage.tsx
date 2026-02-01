import React from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import FAQZone from '../components/FAQZone';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import { CARS_DATA } from '../constants';
import { Plus, ChevronRight, X, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  // Simplified for brevity, state logic for filters can be added back if needed globally or locally
  const [activeInventoryTab, setActiveInventoryTab] = React.useState<'All' | 'New' | 'Used'>('All');

  const filteredCars = React.useMemo(() => {
    return CARS_DATA.filter(car => {
      const conditionToMatch = activeInventoryTab === 'All' ? 'All' : activeInventoryTab;
      return conditionToMatch === 'All' || car.condition === conditionToMatch;
    });
  }, [activeInventoryTab]);

  return (
    <>
      <Hero onSearch={() => {}} />

      {/* Brand Makes Section */}
      <section className="py-24 bg-[#f3f6f9]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 text-center">
          <span className="text-[#e81c24] font-bold uppercase text-xs tracking-widest border-b-2 border-dotted border-[#e81c24] pb-1 mb-6 inline-block">
            BRAND CATEGORY
          </span>
          <h2 className="text-5xl font-black text-[#1a2b48] mb-16 uppercase tracking-tight">Browse By Makes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <MakeCard image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-01.png" name="Acura" />
            <MakeCard image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-02.png" name="Audi" />
            <MakeCard image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-03.png" name="Bentley" />
            <MakeCard image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-04.png" name="BMW" />
            <MakeCard image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-05.png" name="Chevrolet" />
            <MakeCard image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-06.png" name="Ferrari" />
          </div>

          <button className="bg-[#e81c24] text-white px-10 py-5 font-bold uppercase text-xs tracking-widest rounded-md flex items-center gap-2 mx-auto hover:bg-[#111] transition-colors shadow-xl shadow-red-500/10">
            ADD YOUR LISTING <Plus size={16} />
          </button>
        </div>
      </section>

      {/* Explore All Vehicles Section */}
      <section id="inventory" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-[#e81c24] font-bold uppercase text-xs tracking-widest border-b-2 border-dotted border-[#e81c24] pb-1 mb-6 inline-block">
                RECENT LAUNCHED CAR
              </span>
              <h2 className="text-5xl font-black text-[#1a2b48] uppercase tracking-tighter">Explore All Vehicles</h2>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              {['All Cars', 'New', 'Used'].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveInventoryTab(t === 'All Cars' ? 'All' : t as any)}
                  className={`px-8 py-3 rounded-md text-sm font-bold transition-all ${
                    (t === 'All Cars' && activeInventoryTab === 'All') || (t === activeInventoryTab)
                      ? 'bg-[#e81c24] text-white shadow-xl shadow-red-500/20'
                      : 'bg-[#f3f6f9] text-[#1a2b48] hover:bg-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} onClick={() => navigate(`/car/${car.id}`)} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Zone Section (As seen in screenshot) */}
      <FAQZone />

      {/* Browse By Body Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-white">
            <span className="text-[#e81c24] font-bold uppercase text-xs tracking-widest border-b-2 border-dotted border-[#e81c24] pb-1 mb-6 inline-block">
              TYPES OF VEHICLE
            </span>
            <h2 className="text-5xl font-black mb-10 leading-tight uppercase tracking-tighter">Browse By Body</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Car servicing is the regular maintenance and inspection of a vehicle to ensure that it is operating safely and efficiently.
            </p>
            <button className="bg-[#e81c24] text-white px-10 py-5 font-bold uppercase text-xs tracking-widest rounded-md hover:bg-white hover:text-[#e81c24] transition-all">
              VIEW ALL LISTINGS
            </button>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 bg-white border border-gray-100 shadow-2xl rounded-sm">
            <BodyTypeCard name="SUV" image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/body-01.png" />
            <BodyTypeCard name="Sedan" image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/body-02.png" />
            <BodyTypeCard name="Hatchback" image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/body-03.png" />
            <BodyTypeCard name="Crossover" image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/body-04.png" />
            <BodyTypeCard name="Convertible" image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/body-05.png" />
            <BodyTypeCard name="Compact" image="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/body-06.png" />
          </div>
        </div>
      </section>

      {/* Testimonials Section (As seen in screenshot) */}
      <Testimonials />

      {/* Best Selling Cars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 text-center">
          <span className="text-[#e81c24] font-bold uppercase text-xs tracking-widest border-b-2 border-dotted border-[#e81c24] pb-1 mb-6 inline-block">
            RECENT LAUNCHED CAR
          </span>
          <h2 className="text-5xl font-black text-[#1a2b48] mb-16 uppercase tracking-tight">Best Selling Cars</h2>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative group">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200/50 blur-3xl -z-10 rounded-full scale-125"></div>
                <img src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/selling-car-01.png" alt="Featured Car" className="w-full h-auto drop-shadow-2xl" />
                
                <div className="absolute top-[15%] right-[10%] bg-[#e81c24] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl">
                  <span className="text-lg font-black">29%</span>
                  <span className="text-[10px] font-bold uppercase">OFF</span>
                </div>

                <div className="absolute top-[40%] left-[20%]">
                  <HotspotTooltip title="AWD - All-Wheel Drive" content="Kick Sensor With Tow Package" />
                </div>
                <div className="absolute top-[60%] left-[5%]">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#111] shadow-xl cursor-pointer hover:bg-[#e81c24] hover:text-white transition-colors">
                    <Plus size={16} />
                  </div>
                </div>
                <div className="absolute top-[65%] left-[45%]">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#111] shadow-xl cursor-pointer hover:bg-[#e81c24] hover:text-white transition-colors">
                    <Plus size={16} />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#e81c24] text-xs font-bold uppercase tracking-widest border-b border-[#e81c24]">SUV</span>
                <span className="bg-[#e81c24] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-sm">Featured</span>
              </div>
              <h3 className="text-4xl font-black text-[#1a2b48] mb-6 uppercase tracking-tight leading-none">Lexus RX 2023 – 350 F Sport</h3>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                As for the 2023 RX, the styling remains controversial. However, compared to the outgoing model, Lexus tones it down inside and out. More...
              </p>
              <div className="flex items-center gap-4 mb-10">
                 <span className="text-4xl font-black text-[#e81c24] tracking-tighter">219,097$</span>
                 <span className="text-lg text-gray-400 line-through font-bold">222,149$</span>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mb-12 border-t border-gray-100 pt-10">
                <div className="flex items-center gap-3">
                  <div className="text-[#e81c24]"><CarIcon /></div>
                  <div className="text-xs">
                    <p className="text-gray-400 font-bold uppercase tracking-widest mb-0.5">Fuel Type</p>
                    <p className="text-[#1a2b48] font-black uppercase">Petrol</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[#e81c24]"><Gauge size={22} /></div>
                  <div className="text-xs">
                    <p className="text-gray-400 font-bold uppercase tracking-widest mb-0.5">Mileage</p>
                    <p className="text-[#1a2b48] font-black uppercase">0 KM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[#e81c24]"><Settings2Icon /></div>
                  <div className="text-xs">
                    <p className="text-gray-400 font-bold uppercase tracking-widest mb-0.5">Transmission</p>
                    <p className="text-[#1a2b48] font-black uppercase">Auto</p>
                  </div>
                </div>
              </div>

              <button className="bg-[#e81c24] text-white px-12 py-5 font-black uppercase text-xs tracking-widest rounded-sm hover:bg-[#111] transition-colors shadow-2xl shadow-red-500/20">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Floating Scroll Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 bg-[#e81c24] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-[100] hover:scale-110 active:scale-95 transition-all group"
      >
        <ChevronRight className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
      </button>

    </>
  );
};

// Helper Components (Reused)
const MakeCard = ({ image, name }: { image: string, name: string }) => (
  <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col items-center gap-6 group">
    <div className="h-20 w-auto flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
      <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
    </div>
    <span className="font-black text-[#1a2b48] text-lg uppercase group-hover:text-[#e81c24] transition-colors tracking-tighter">{name}</span>
  </div>
);

const BodyTypeCard = ({ name, image }: { name: string, image: string }) => (
  <div className="p-12 flex flex-col items-center gap-6 border border-gray-50 hover:bg-gray-50 transition-all cursor-pointer group">
    <div className="h-20 w-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
      <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
    </div>
    <span className="font-black text-[#1a2b48] text-xl uppercase group-hover:text-[#e81c24] transition-colors tracking-tighter">{name}</span>
  </div>
);

const HotspotTooltip = ({ title, content }: { title: string, content: string }) => (
  <div className="relative group">
    <div className="w-8 h-8 bg-[#e81c24] rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
      <X size={16} className="rotate-45" />
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-white p-6 shadow-2xl rounded-sm scale-0 group-hover:scale-100 transition-transform origin-bottom z-50 pointer-events-none">
      <h4 className="text-[#1a2b48] font-black uppercase text-sm mb-2">{title}</h4>
      <p className="text-gray-400 text-xs leading-relaxed font-bold">{content}</p>
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
    </div>
  </div>
);

const Settings2Icon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
);
  
const CarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);

export default HomePage;
