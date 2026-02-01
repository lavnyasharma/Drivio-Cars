
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Share2, 
  Heart, 
  Printer, 
  CheckCircle2, 
  Car as CarIcon, 
  Gauge, 
  Fuel, 
  Settings2, 
  Calendar,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  Hash,
  Fingerprint,
  Zap,
  DoorOpen,
  Palette,
  Users,
  Wind,
  Target,
  MessageSquare,
  Repeat,
  Bookmark,
  Play,
  Grid,
  Star,
  Facebook,
  Twitter,
  Link as LinkIcon,
  DollarSign,
  MapPin,
  Calculator,
  X,
  ChevronRight
} from 'lucide-react';
import { Car } from '../types';
import CarCard from './CarCard';
import { CARS_DATA } from '../constants';
import { useNavigate } from 'react-router-dom';

interface Props {
  car: Car;
}

const CarDetail: React.FC<Props> = ({ car }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();

  // Related cars
  const relatedCars = CARS_DATA.filter(c => c.id !== car.id).slice(0, 4);

  // Mock Gallery Images (using car image + generic ones)
  const galleryImages = [
    car.image,
    "https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/selling-car-01.png",
    "https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-01.png",
    "https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/brand-02.png"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Title & Actions Bar */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-black text-[#1a2b48] uppercase tracking-tighter leading-none">
            {car.make} {car.model}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <div className="flex gap-2">
              <HeaderAction icon={<Repeat size={18} />} />
              <HeaderAction icon={<Bookmark size={18} />} />
              <HeaderAction icon={<Share2 size={18} />} />
              <HeaderAction icon={<Printer size={18} />} />
            </div>
            <div className="text-4xl md:text-5xl font-black text-[#1a2b48] tracking-tighter">
              ${car.price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Info Badges */}
        <div className="flex flex-wrap gap-2 mt-8">
          <DetailBadge icon={<Calendar size={14} className="text-[#e81c24]" />} text={car.year.toString()} />
          <DetailBadge icon={<CarIcon size={14} className="text-[#e81c24]" />} text={car.make.toUpperCase()} />
          <DetailBadge icon={<CarIcon size={14} className="text-[#e81c24]" />} text={car.model.toUpperCase()} />
          <DetailBadge icon={<CarIcon size={14} className="text-[#e81c24]" />} text={car.type.toUpperCase()} />
          <DetailBadge icon={<ShieldCheck size={14} className="text-[#e81c24]" />} text={car.condition.toUpperCase()} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 pb-20">
        {/* Responsive Gallery Grid: 1 large + 4 small (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-20">
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden aspect-[16/10] group">
            <img src={car.image} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" alt="Main View" />
            <div className="absolute top-6 left-6 flex gap-3">
              <button className="bg-white px-5 py-2.5 rounded-md flex items-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-[#e81c24] hover:text-white transition-all">
                <Play size={14} className="fill-current" /> Video
              </button>
              <button className="bg-white px-5 py-2.5 rounded-md flex items-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-[#e81c24] hover:text-white transition-all">
                <Grid size={14} /> All Photo
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 h-full">
            <GalleryImage src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop" />
            <GalleryImage src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop" />
            <GalleryImage src="https://images.unsplash.com/photo-1617788138017-80ad42243c79?q=80&w=800&auto=format&fit=crop" />
            <GalleryImage src="https://images.unsplash.com/photo-1618245472895-399676735e26?q=80&w=800&auto=format&fit=crop" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Car Overview */}
            <section>
              <h2 className="text-3xl font-black text-[#1a2b48] mb-10 tracking-tight uppercase">Car Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 border border-gray-100 p-8 rounded-2xl shadow-sm">
                <OverviewItem icon={<CarIcon size={20} />} label="Condition" value={car.condition} />
                <OverviewItem icon={<Settings2 size={20} />} label="Cylinders" value="4" />
                <OverviewItem icon={<Hash size={20} />} label="Stock Number" value="212344252123" />
                <OverviewItem icon={<Fuel size={20} />} label="Fuel Type" value={car.fuel} />
                <OverviewItem icon={<Fingerprint size={20} />} label="VIN Number" value="ACB12345BC" />
                <OverviewItem icon={<DoorOpen size={20} />} label="Doors" value="4" />
                <OverviewItem icon={<Calendar size={20} />} label="Year" value={car.year.toString()} />
                <OverviewItem icon={<Palette size={20} />} label="Color" value="Black, Gray" />
                <OverviewItem icon={<Gauge size={20} />} label="Mileage" value={car.mileage} />
                <OverviewItem icon={<Users size={20} />} label="Seats" value="5" />
                <OverviewItem icon={<Settings2 size={20} />} label="Transmission" value={car.transmission} />
                <OverviewItem icon={<Wind size={20} />} label="City MPG" value="24" />
                <OverviewItem icon={<Zap size={20} />} label="Engine Size" value="2.0" />
                <OverviewItem icon={<Wind size={20} />} label="Highway MPG" value="32" />
                <OverviewItem icon={<Target size={20} />} label="Drive Type" value="RWD – Rear-wheel drive" />
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Features Categories */}
            <section>
              <h2 className="text-3xl font-black text-[#1a2b48] mb-10 tracking-tight uppercase">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <FeatureGroup title="Convenience" features={['Android Auto', 'Apple CarPlay', 'Power Steering']} />
                <FeatureGroup title="Exterior" features={['Alloy Wheel Locks', 'Door Edge Guards', 'Fog Lights Front', 'Rain Sensing Wiper']} />
                <FeatureGroup title="Interior" features={['Air Conditioner', 'Digital Odometer', 'Heater']} />
                <FeatureGroup title="Safety" features={['Anti-lock Braking', 'Driver Air Bag', 'Stability Control']} />
              </div>
            </section>

            {/* Loan Calculator Section */}
            <section className="bg-[#f3f6f9] p-10 rounded-2xl border border-gray-100">
              <div className="border-l-4 border-[#e81c24] pl-6 mb-10">
                <h2 className="text-3xl font-black text-[#1a2b48] tracking-tight uppercase leading-none">Loan Calculator</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                <CalcField label="Total Amount" value="10,000" required />
                <CalcField label="Down Payment" value="3,000" />
                <CalcField label="Amortization Period (months)" value="12" required />
                <CalcField label="Interest rate (%)" value="5" required />
              </div>
              <div className="flex items-center gap-8">
                <button className="bg-[#e81c24] text-white px-10 py-4 rounded-md font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl shadow-red-500/10">
                  Calculate
                </button>
                <button className="text-gray-400 font-black uppercase text-xs tracking-widest hover:text-[#e81c24] transition-colors">Reset</button>
              </div>
            </section>

      
      {/* Breadcrumb / Back Navigation */}
      <div className="bg-[#f3f6f9] py-4 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)} 
              className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#e81c24] transition-colors"
            >
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-[#e81c24] group-hover:border-[#e81c24] transition-all">
                    <ChevronLeft size={16} className="group-hover:text-white transition-colors" />
                </div>
                Back to Inventory
            </button>
            
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Home</span>
                <span className="text-gray-300">/</span>
                <span>Inventory</span>
                <span className="text-gray-300">/</span>
                <span className="text-[#e81c24]">{car.make} {car.model}</span>
            </div>
        </div>
      </div>

            {/* Review Section */}
            <section className="bg-[#f3f6f9] p-10 rounded-2xl border border-gray-100">
               <div className="border-l-4 border-[#e81c24] pl-6 mb-10">
                 <h2 className="text-3xl font-black text-[#1a2b48] tracking-tight uppercase leading-none">Review (0 Review)</h2>
               </div>
               <div className="flex flex-col md:flex-row gap-16 items-center">
                 <div className="flex flex-col items-center justify-center p-10 bg-white rounded-full w-52 h-52 border border-gray-100 shadow-xl ring-8 ring-white/50">
                    <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-1">Overall Rating</span>
                    <span className="text-5xl font-black text-[#1a2b48] tracking-tighter">0.0</span>
                 </div>
                 <div className="flex-grow space-y-6 w-full">
                    <RatingRow label="Comfort" rating={0.0} />
                    <RatingRow label="Interior Design" rating={0.0} />
                    <RatingRow label="Performance" rating={0.0} />
                    <RatingRow label="Value for Money" rating={0.0} />
                 </div>
               </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-24 h-fit">
            {/* Sidebar CTAs */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-gray-200/40 border border-gray-100 space-y-5">
              <button className="w-full bg-[#e81c24] text-white py-5 rounded-md font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-red-500/10">
                 <Target size={18} /> Schedule Test Driver
              </button>
              <button className="w-full border-2 border-[#e81c24] text-[#e81c24] py-5 rounded-md font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#e81c24] hover:text-white transition-all">
                 <Zap size={18} className="rotate-12" /> Make An Offer Price
              </button>
            </div>

            {/* Agent Contact Card */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-gray-200/40 border border-gray-100">
              <div className="flex items-center gap-5 mb-12">
                <img src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/agent-01.png" className="w-20 h-20 rounded-full object-cover border-4 border-[#f3f6f9]" alt="Agent" />
                <div>
                  <h4 className="font-black text-xl text-[#1a2b48] tracking-tight">Robert Fox</h4>
                  <p className="text-[#e81c24] font-black text-[10px] uppercase tracking-widest mt-1">Dealer Agent</p>
                </div>
              </div>
              
              <form className="space-y-4">
                <SidebarInput icon={<Users size={18} />} placeholder="Your Name" />
                <SidebarInput icon={<Mail size={18} />} placeholder="Email" />
                <SidebarInput icon={<Phone size={18} />} placeholder="Enter Phone" />
                <div className="relative">
                  <div className="absolute top-4 left-5 text-gray-300"><MessageSquare size={18} /></div>
                  <textarea rows={5} placeholder="Message" className="w-full bg-[#f3f6f9] border-none rounded-md pl-14 pr-5 py-4 focus:ring-2 focus:ring-[#e81c24] transition-all resize-none text-sm font-bold text-[#1a2b48] placeholder-gray-400"></textarea>
                </div>
                <button className="w-full bg-[#e81c24] text-white py-5 rounded-md font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-red-500/10 mt-2">
                  Send Message
                </button>
              </form>
            </div>

            {/* Floating Banner */}
            <div className="relative bg-[#4e44ff] p-12 rounded-2xl overflow-hidden group shadow-2xl shadow-[#4e44ff]/20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-110 transition-transform"></div>
              <h3 className="text-white text-3xl font-black mb-4 relative z-10 leading-tight">Instant Car Valuation</h3>
              <p className="text-white/70 text-sm font-medium mb-8 relative z-10 leading-relaxed">Describe your vehicle to our AI-powered valuation engine and get a fair market offer in seconds.</p>
              <button className="bg-white text-[#4e44ff] px-10 py-4 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-[#e81c24] hover:text-white transition-all relative z-10 shadow-2xl">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Related Listing Section */}
        <section className="mt-32 border-t border-gray-100 pt-24">
          <h2 className="text-5xl font-black text-[#1a2b48] text-center mb-20 tracking-tighter uppercase">Related Listing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedCars.map(c => (
              <CarCard key={c.id} car={c} />
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-16">
            <div className="w-3 h-3 rounded-full border-2 border-[#e81c24] p-0.5"><div className="w-full h-full bg-[#e81c24] rounded-full"></div></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          </div>
        </section>
      </div>


    </div>
  );
};

const HeaderAction = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#1a2b48] hover:bg-[#e81c24] hover:text-white transition-all shadow-sm bg-white">
    {icon}
  </button>
);

const DetailBadge = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-3 bg-[#f3f6f9] px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest text-[#1a2b48] hover:bg-gray-200 transition-colors">
    {icon} {text}
  </div>
);

const OverviewItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center justify-between py-1.5 group">
    <div className="flex items-center gap-4 text-gray-400 group-hover:text-[#e81c24] transition-colors">
      <span className="text-[#e81c24]">{icon}</span>
      <span className="font-bold text-sm text-gray-500">{label}:</span>
    </div>
    <span className="text-[#1a2b48] font-black text-sm">{value}</span>
  </div>
);

const FeatureGroup = ({ title, features }: { title: string, features: string[] }) => (
  <div className="space-y-8">
    <h3 className="text-xl font-black text-[#1a2b48] uppercase tracking-tight">{title}</h3>
    <ul className="space-y-4">
      {features.map(f => (
        <li key={f} className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-tight">
          <div className="w-5 h-5 bg-[#e81c24] rounded-full flex items-center justify-center text-white p-1">
            <CheckCircle2 size={12} fill="currentColor" stroke="none" />
          </div>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const CalcField = ({ label, value, required }: { label: string, value: string, required?: boolean }) => (
  <div className="space-y-4">
    <label className="text-[11px] font-black uppercase tracking-widest text-[#1a2b48]">
      {required && <span className="text-[#e81c24] mr-1">(*)</span>}
      {label}
    </label>
    <input type="text" defaultValue={value} className="w-full bg-white border border-gray-100 px-6 py-4 rounded-md focus:ring-2 focus:ring-[#e81c24] outline-none transition-all font-bold text-sm text-[#1a2b48] shadow-sm" />
  </div>
);

const RatingRow = ({ label, rating }: { label: string, rating: number }) => (
  <div className="flex items-center justify-between w-full">
    <span className="text-[#1a2b48] font-black text-[11px] uppercase tracking-widest">{label}</span>
    <div className="flex items-center gap-6">
      <div className="flex text-gray-200 gap-1">
        {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <span className="text-[#1a2b48] font-black text-sm min-w-[30px] text-right">{rating.toFixed(1)}</span>
    </div>
  </div>
);

const SidebarInput = ({ icon, placeholder }: { icon: React.ReactNode, placeholder: string }) => (
  <div className="relative">
    <div className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-300">{icon}</div>
    <input type="text" placeholder={placeholder} className="w-full bg-[#f3f6f9] border-none rounded-md pl-14 pr-5 py-5 focus:ring-2 focus:ring-[#e81c24] transition-all text-sm font-bold text-[#1a2b48] placeholder-gray-400" />
  </div>
);

const GalleryImage = ({ src }: { src: string }) => (
  <div className="rounded-2xl overflow-hidden h-full group">
    <img src={src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery" />
  </div>
);

export default CarDetail;
