'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0">
        <Image
          src="/image/coffeeBeans.jpg"
          alt="Premium Coffee Beans"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="filter brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-amber-700/30 rounded-full"></div>
      <div className="absolute bottom-40 right-[10%] w-48 h-48 border border-amber-700/20 rounded-full"></div>
      
      {/* Content container */}
      <section className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white z-10">
        <div className="mb-3 opacity-80">
          <span className="inline-block px-4 py-1 bg-[#4E2814]/80 rounded-full text-amber-200 text-sm font-medium tracking-wider uppercase">
            Ethiopian Excellence
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-6 text-center">
          <span className="text-amber-200 drop-shadow-lg">Farm</span>
          <span className="text-white mx-2">to</span>
          <span className="text-amber-200 drop-shadow-lg">Cup</span>
        </h1>
        
        <p className="tracking-wide mb-8 max-w-2xl text-center text-lg md:text-xl text-gray-100 leading-relaxed">
          We supply specially prepared, higher quality traceable coffee beans
          directly to global green coffee buyers and roasters worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="px-8 py-3 bg-[#4E2814] hover:bg-[#3E1804] text-white rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore Our Coffee
          </button>
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all duration-300 font-medium border border-white/30 transform hover:-translate-y-0.5">
            Our Process
          </button>
        </div>
      </section>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white transition-opacity duration-700 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-sm mb-2 text-gray-300">Scroll to discover</span>
        <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;