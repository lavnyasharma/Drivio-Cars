
import React from 'react';
import { Check, Play } from 'lucide-react';

const FAQZone: React.FC = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
      {/* Left Side: Content */}
      <div className="lg:w-1/2 bg-[#f4f7fa] py-20 px-4 md:px-20 lg:px-32 flex flex-col justify-center">
        <div className="mb-6">
          <span className="text-[#e81c24] font-black uppercase text-xs tracking-[0.2em] border-b-2 border-dotted border-[#e81c24] pb-1">
            TRUSTED CAR DELAER SERVICE
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1a2b48] mb-10 leading-tight">
          Frequently Questions <br/>& Asking Zone..
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg">
          For 15 years, we raising the standard of used car retailing with we raising the standard of used car ret one of the most innovative and reliable
        </p>

        <div className="space-y-6 mb-12">
          <FAQItem text="We are the best car provider agency with great service" />
          <FAQItem text="Get Best Super servicing for car & Rental Service" active />
          <FAQItem text="Expert Mechanic for fixings and servicing car & rental" />
        </div>

        <button className="bg-[#e81c24] text-white px-10 py-5 font-black uppercase text-xs tracking-widest rounded-md w-fit hover:bg-black transition-all shadow-xl shadow-red-500/10">
          GET STARTED
        </button>
      </div>

      {/* Right Side: Image/Video */}
      <div className="lg:w-1/2 relative min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop" 
          alt="Truck" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#1a2b48] shadow-2xl hover:scale-110 transition-transform">
            <Play fill="currentColor" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ text, active }: { text: string; active?: boolean }) => (
  <div className="flex items-center gap-4">
    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${active ? 'bg-[#e81c24] text-white' : 'border-2 border-[#e81c24] text-[#e81c24]'}`}>
      <Check size={14} strokeWidth={4} />
    </div>
    <span className="text-[#1a2b48] font-black text-sm tracking-tight">{text}</span>
  </div>
);

export default FAQZone;
