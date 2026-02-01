
import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* World Map Watermark Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/map.png" alt="World Map" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Client Large Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" 
                className="w-full rounded-sm object-cover aspect-[4/5] shadow-2xl" 
                alt="Client"
              />
              {/* Quote Icon Bubble */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#e81c24] rounded-full flex items-center justify-center shadow-xl">
                 <img src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/quote.png" alt="Quote" className="w-10" />
              </div>
              {/* Star Rating Overlay */}
              <div className="absolute bottom-8 left-8 bg-white py-4 px-10 rounded-sm shadow-xl flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-[#e81c24] text-[#e81c24]" />)}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[#e81c24] font-black uppercase text-xs tracking-[0.2em] mb-4 block">
                OUR TESTIMONIALS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#1a2b48] tracking-tighter uppercase leading-none">
                What Client’s Says
              </h2>
            </div>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed italic max-w-2xl font-medium">
              “ The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure Events moment. Dislike men who are so beguiled and demoraliz worlds by the charms of pleasure “
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-5">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-50" 
                  alt="Avatar"
                />
                <div>
                  <h4 className="font-black text-xl text-[#1a2b48] tracking-tight uppercase">Teodoro D. Williams</h4>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">Car Dealer</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#e81c24] hover:text-white transition-all shadow-sm">
                  <ArrowLeft size={20} />
                </button>
                <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#e81c24] hover:text-white transition-all shadow-sm">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
