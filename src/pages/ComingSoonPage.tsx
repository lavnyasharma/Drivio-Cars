import React, { useEffect, useRef, useState } from 'react';
import { Mail, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

// Declare gsap type for TypeScript
declare const gsap: any;

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const car1Ref = useRef<HTMLDivElement>(null);
  const car2Ref = useRef<HTMLDivElement>(null);
  const car3Ref = useRef<HTMLDivElement>(null);
  const car4Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLButtonElement>(null);

  // Mouse position for parallax
  const mousePos = useRef({ x: 0, y: 0 });

  // GSAP Intro Animation
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial states - everything hidden
    gsap.set(logoRef.current, { opacity: 0, y: -30 });
    gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });
    gsap.set([car1Ref.current, car2Ref.current, car3Ref.current, car4Ref.current], { 
      opacity: 0, 
      scale: 1.3, 
      y: 80,
      rotation: 5
    });
    gsap.set([badgeRef.current], { opacity: 0, scale: 0.8, y: -20 });
    gsap.set([headlineRef.current], { opacity: 0, y: 100, skewY: 5 });
    gsap.set([subtextRef.current], { opacity: 0, y: 60 });
    gsap.set([formRef.current], { opacity: 0, y: 50, scale: 0.95 });
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
      opacity: 0, 
      scale: 0, 
      rotation: -15 
    });
    gsap.set(statsRef.current, { opacity: 0, y: 40 });
    gsap.set(featuresRef.current, { opacity: 0, y: 30 });

    // Cinematic intro sequence
    tl
      // Logo drops in first
      .to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' })
      
      // Background glow expands
      .to(glowRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }, '-=0.4')
      
      // Cars fly in with stagger
      .to(car1Ref.current, { 
        opacity: 1, scale: 1, y: 0, rotation: 0, 
        duration: 1, ease: 'power3.out' 
      }, '-=1')
      .to(car2Ref.current, { 
        opacity: 1, scale: 1, y: 0, rotation: 0, 
        duration: 0.9, ease: 'power3.out' 
      }, '-=0.7')
      .to(car3Ref.current, { 
        opacity: 1, scale: 1, y: 0, rotation: 0, 
        duration: 0.85, ease: 'power3.out' 
      }, '-=0.6')
      .to(car4Ref.current, { 
        opacity: 1, scale: 1, y: 0, rotation: 0, 
        duration: 0.8, ease: 'power3.out' 
      }, '-=0.5')
      
      // Badge pops
      .to(badgeRef.current, { 
        opacity: 1, scale: 1, y: 0, 
        duration: 0.6, ease: 'back.out(2)' 
      }, '-=0.5')
      
      // Headline sweeps in
      .to(headlineRef.current, { 
        opacity: 1, y: 0, skewY: 0, 
        duration: 0.8, ease: 'power4.out' 
      }, '-=0.3')
      
      // Subtext fades in
      .to(subtextRef.current, { 
        opacity: 1, y: 0, 
        duration: 0.6, ease: 'power2.out' 
      }, '-=0.4')
      
      // Form slides up
      .to(formRef.current, { 
        opacity: 1, y: 0, scale: 1, 
        duration: 0.7, ease: 'power2.out' 
      }, '-=0.3')
      
      // Glassmorphism cards pop with bounce
      .to([card1Ref.current, card2Ref.current, card3Ref.current], { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.7)'
      }, '-=0.4')
      
      // Stats counter effect
      .to(statsRef.current, { 
        opacity: 1, y: 0, 
        duration: 0.5, ease: 'power2.out' 
      }, '-=0.3')
      
      // Features fade in
      .to(featuresRef.current, { 
        opacity: 1, y: 0, 
        duration: 0.5, ease: 'power2.out' 
      }, '-=0.2');

    // Continuous floating animation for cards
    const floatCards = () => {
      gsap.to(card1Ref.current, {
        y: '+=10', duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1
      });
      gsap.to(card2Ref.current, {
        y: '-=8', duration: 2.3, ease: 'sine.inOut', yoyo: true, repeat: -1
      });
      gsap.to(card3Ref.current, {
        y: '+=12', duration: 1.8, ease: 'sine.inOut', yoyo: true, repeat: -1
      });
    };
    
    tl.call(floatCards);

  }, []);

  // Mouse Parallax Effect
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      mousePos.current = { x, y };

      // Background glow
      gsap.to(glowRef.current, { 
        x: x * 40, y: y * 40, 
        duration: 1.2, ease: 'power2.out'
      });

      // Cars at different depths
      gsap.to(car1Ref.current, { 
        x: x * 50, y: y * 30, 
        duration: 0.8, ease: 'power2.out'
      });
      gsap.to(car2Ref.current, { 
        x: x * 70, y: y * 40, 
        duration: 0.9, ease: 'power2.out'
      });
      gsap.to(car3Ref.current, { 
        x: x * 60, y: y * 35, 
        duration: 0.85, ease: 'power2.out'
      });
      gsap.to(car4Ref.current, { 
        x: x * 45, y: y * 25, 
        duration: 0.75, ease: 'power2.out'
      });

      // Cards float with mouse
      gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], { 
        x: x * 25, 
        duration: 0.6, ease: 'power2.out', stagger: 0.05
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic Button Effect
  useEffect(() => {
    if (typeof gsap === 'undefined' || !magneticBtnRef.current) return;

    const btn = magneticBtnRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0, y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black overflow-hidden relative">
      {/* Background Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(32, 223, 105, 0.2) 0%, rgba(32, 223, 105, 0.08) 40%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />



      {/* Navigation - Logo with Brand Name */}
      <nav className="relative z-50 px-4 sm:px-6 py-4 lg:px-12 lg:py-8">
        <div ref={logoRef} className="flex items-center justify-between sm:justify-center lg:justify-start">
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src="https://wrijpsiiuvmeqaeklnqi.supabase.co/storage/v1/object/public/new/Adobe%20Express%20-%20file.png" 
              alt="DRIVIO Logo"
              className="w-auto object-contain h-12 sm:h-16 lg:h-20"
            />
            <span className="font-heading text-xl sm:text-2xl lg:text-4xl font-black tracking-tight text-black">
              DRIVIO <span className="text-primary">CARS</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 lg:px-12 pt-4 lg:pt-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
  

            {/* Headline */}
            <h1 
              ref={headlineRef}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 leading-[0.9]"
            >
              <span className="text-black">TRADE</span>
              <br />
              <span className="text-primary" style={{ textShadow: '0 0 40px rgba(32, 223, 105, 0.4)' }}>LIMITLESS</span>
            </h1>

            {/* Subtext */}
            <p 
              ref={subtextRef}
              className="text-lg sm:text-xl text-black/60 mb-10 max-w-md mx-auto lg:mx-0"
            >
              Rewriting the rules of ownership.
            </p>

            {/* Email Form */}
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-black/5 border-2 border-black/10 rounded-xl text-black placeholder:text-black/40 focus:outline-none focus:border-primary/50 focus:bg-white transition-all duration-300"
                  required
                />
              </div>
              <button
                ref={magneticBtnRef}
                type="submit"
                className="px-8 py-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-hover transition-all duration-300 shadow-lg group"
                style={{ boxShadow: '0 4px 30px rgba(32, 223, 105, 0.4)' }}
              >
                {isSubmitted ? (
                  <span>Joined! ✓</span>
                ) : (
                  <>
                    <span>Request Invite</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Stats */}
            <div ref={statsRef} className="flex justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-black text-primary">500+</div>
                <div className="text-sm text-black/50 font-medium">Luxury Cars</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-black text-primary">50K+</div>
                <div className="text-sm text-black/50 font-medium">Waitlist</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-black text-primary">24/7</div>
                <div className="text-sm text-black/50 font-medium">Support</div>
              </div>
            </div>

            {/* Features */}
            <div ref={featuresRef} className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
                <Zap size={16} className="text-primary" />
                <span className="text-sm font-medium text-black/70">Instant Trading</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
                <Shield size={16} className="text-primary" />
                <span className="text-sm font-medium text-black/70">Verified Cars</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-medium text-black/70">Live Auctions</span>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="lg:w-1/2 relative h-[320px] sm:h-[450px] lg:h-[600px] mt-4 sm:mt-8 lg:mt-0">
            {/* Main Featured Car */}
            <div 
              ref={car1Ref}
              className="absolute top-0 right-0 w-[75%] sm:w-[80%] z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Porsche GT3 RS"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
                style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.2)' }}
              />
            </div>

            {/* Secondary Car */}
            <div 
              ref={car2Ref}
              className="absolute bottom-16 sm:bottom-24 left-0 w-[45%] sm:w-[50%] z-30"
            >
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Porsche 911"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
              />
            </div>

            {/* Third Car - Hidden on small mobile */}
            <div 
              ref={car3Ref}
              className="hidden sm:block absolute bottom-8 right-4 w-[40%] z-25"
            >
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mercedes AMG"
                className="w-full h-auto rounded-xl shadow-lg"
                style={{ boxShadow: '0 15px 50px rgba(0,0,0,0.12)' }}
              />
            </div>

            {/* Fourth Car - Hidden on mobile */}
            <div 
              ref={car4Ref}
              className="hidden lg:block absolute top-20 left-0 w-[28%] z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="BMW M4"
                className="w-full h-auto rounded-xl shadow-md opacity-80"
              />
            </div>

            {/* Glassmorphism Auction Cards - Responsive positioning */}
            <div 
              ref={card1Ref}
              className="absolute top-2 sm:top-4 left-0 sm:left-4 rounded-xl sm:rounded-2xl p-3 sm:p-4 z-40 bg-white/90 backdrop-blur-md border border-black/10 shadow-xl"
            >
              <div className="text-[10px] sm:text-xs text-black/50 mb-0.5 font-medium">Current Bid</div>
              <div className="text-lg sm:text-xl font-black text-primary">$245,000</div>
              <div className="text-[10px] sm:text-xs text-black/40">Porsche 911 GT3</div>
            </div>

            <div 
              ref={card2Ref}
              className="absolute top-1/4 sm:top-1/3 right-0 sm:right-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 z-40 bg-white/90 backdrop-blur-md border border-black/10 shadow-xl"
            >
              <div className="text-[10px] sm:text-xs text-black/50 mb-0.5 font-medium">Live Auction</div>
              <div className="text-lg sm:text-xl font-black text-black">$189,500</div>
              <div className="flex items-center gap-1 sm:gap-2 mt-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs text-primary font-semibold">12 Bidders</span>
              </div>
            </div>

            <div 
              ref={card3Ref}
              className="absolute bottom-4 sm:bottom-16 left-1/4 sm:left-1/3 rounded-xl sm:rounded-2xl p-3 sm:p-4 z-40 bg-black text-white shadow-xl"
              style={{ boxShadow: '0 10px 40px rgba(32, 223, 105, 0.3)' }}
            >
              <div className="text-[10px] sm:text-xs text-white/60 mb-0.5 font-medium">Sold</div>
              <div className="text-lg sm:text-xl font-black text-white">$320,000</div>
              <div className="text-[10px] sm:text-xs text-primary font-semibold">✓ Verified Sale</div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default ComingSoonPage;
