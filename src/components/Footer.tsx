
import React from 'react';
import { Send, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#e81c24] flex items-center justify-center rounded-sm">
              <span className="font-bold text-white text-lg">D</span>
            </div>
            <span className="font-heading text-xl font-black tracking-tighter uppercase">
              DRIVIO<span className="text-[#e81c24]">CARS</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            DrivioCars is a premium automotive directory and dealership platform, designed to provide the best car buying and selling experience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#e81c24] transition-colors rounded-sm flex items-center justify-center text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#e81c24] transition-colors rounded-sm flex items-center justify-center text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#e81c24] transition-colors rounded-sm flex items-center justify-center text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#e81c24] transition-colors rounded-sm flex items-center justify-center text-white">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-black uppercase tracking-tighter mb-8 pb-2 border-b-2 border-[#e81c24] inline-block">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e81c24] rounded-full"></span> Inventory
            </li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e81c24] rounded-full"></span> Services & Repair
            </li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e81c24] rounded-full"></span> Dealer Directory
            </li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e81c24] rounded-full"></span> Compare Vehicles
            </li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e81c24] rounded-full"></span> Sell Your Car
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-heading text-lg font-black uppercase tracking-tighter mb-8 pb-2 border-b-2 border-[#e81c24] inline-block">Top Categories</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer">Luxury Sedans</li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer">Electric Vehicles</li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer">Performance Coupes</li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer">Family SUVs</li>
            <li className="hover:text-[#e81c24] transition-colors cursor-pointer">Off-Road Trucks</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading text-lg font-black uppercase tracking-tighter mb-8 pb-2 border-b-2 border-[#e81c24] inline-block">Newsletter</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Get the latest deals and automotive news delivered to your inbox.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-[#e81c24] transition-colors rounded-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e81c24] p-2.5 rounded-sm hover:bg-[#c4151c] transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/5 py-8 text-center text-xs text-gray-500 font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} DrivioCars Automotive Network. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
