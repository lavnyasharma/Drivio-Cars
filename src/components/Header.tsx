

import React, { useState } from 'react';
import { Phone, Mail, Search, Menu, X, ChevronDown, Twitter, Facebook, Instagram, Linkedin, Plus, ShoppingBag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isScrolled = React.useMemo(() => window.scrollY > 50, []); // Simplified scroll check or keep useEffect if needed for sticky

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full flex flex-col z-[100] relative">
      {/* Top Bar */}
      <div className="bg-[#e81c24] text-white text-[11px] font-bold py-2.5 px-4 md:px-10 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} className="fill-white text-[#e81c24]" />
            <span>+88 1900 6789 56</span>
          </div>
          <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-6">
            <Mail size={14} className="fill-white text-[#e81c24]" />
            <span>example@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Twitter size={14} className="hover:opacity-80 cursor-pointer" />
          <Facebook size={14} className="hover:opacity-80 cursor-pointer" />
          <Instagram size={14} className="hover:opacity-80 cursor-pointer" />
          <Linkedin size={14} className="hover:opacity-80 cursor-pointer" />
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white transition-all duration-300 border-b border-gray-100 py-4`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer shrink-0">
            <img src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/logo.png" alt="DrivioCars" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Center Menu - Desktop */}
          <ul className="hidden xl:flex gap-8 font-black text-sm text-[#1a2b48] items-center uppercase tracking-tight">
            <li><Link to="/" className={`flex items-center gap-1 ${location.pathname === '/' ? 'text-[#e81c24]' : 'hover:text-[#e81c24]'} transition-colors`}>Home <ChevronDown size={14} /></Link></li>
            <li><Link to="/buy-car" className={`flex items-center gap-1 ${location.pathname === '/buy-car' ? 'text-[#e81c24]' : 'hover:text-[#e81c24]'} transition-colors`}>Buy Car <ChevronDown size={14} /></Link></li>
            <li><Link to="/car-listing" className={`flex items-center gap-1 ${location.pathname === '/car-listing' ? 'text-[#e81c24]' : 'hover:text-[#e81c24]'} transition-colors`}>Car Listing <ChevronDown size={14} /></Link></li>
            <li><Link to="/about" className={`flex items-center gap-1 ${location.pathname === '/about' ? 'text-[#e81c24]' : 'hover:text-[#e81c24]'} transition-colors`}>About Us <ChevronDown size={14} /></Link></li>
            <li><Link to="/blog" className={`flex items-center gap-1 ${location.pathname === '/blog' ? 'text-[#e81c24]' : 'hover:text-[#e81c24]'} transition-colors`}>Blog <ChevronDown size={14} /></Link></li>
            <li><Link to="/contact" className={`${location.pathname === '/contact' ? 'text-[#e81c24]' : 'hover:text-[#e81c24]'} transition-colors`}>Contact Us</Link></li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:block">
              <Search size={20} className="text-[#1a2b48] hover:text-[#e81c24] cursor-pointer" />
            </div>
            
            <button className="hidden lg:flex items-center gap-2 bg-white border border-gray-200 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm hover:shadow-md transition-all text-[#1a2b48]">
              <User size={16} className="text-[#e81c24]" /> Register / Login
            </button>
            
            <div className="relative cursor-pointer hidden sm:block">
              <ShoppingBag size={22} className="text-[#1a2b48]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#e81c24] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">0</span>
            </div>

            <button className="bg-black text-white px-5 md:px-7 py-3 rounded-md font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#e81c24] transition-all shrink-0">
              Listing Yours <Plus size={16} />
            </button>

            {/* Mobile Hamburger */}
            <button 
              className="xl:hidden p-2 text-[#1a2b48] hover:text-[#e81c24] transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 z-[110] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <img src="https://motorx.autodealwordpress.com/wp-content/uploads/2023/11/logo.png" alt="DrivioCars" className="h-10 w-auto" />
              <button onClick={toggleMenu} className="p-2 text-gray-400 hover:text-black transition-colors">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 font-black text-lg text-[#1a2b48] uppercase tracking-tight">
              <li><Link to="/" onClick={toggleMenu} className="text-[#e81c24] flex items-center justify-between">Home <ChevronDown size={16} /></Link></li>
              <li><Link to="/buy-car" onClick={toggleMenu} className="flex items-center justify-between">Buy Car <ChevronDown size={16} /></Link></li>
              <li><Link to="/car-listing" onClick={toggleMenu} className="flex items-center justify-between">Car Listing <ChevronDown size={16} /></Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
            <div className="mt-auto pt-10 space-y-4">
              <button className="w-full bg-gray-100 text-[#1a2b48] py-4 rounded-md font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3">
                <User size={18} /> Register / Login
              </button>
              <div className="flex justify-center gap-6 text-gray-400">
                <Twitter size={20} />
                <Facebook size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
