'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DesktopNavbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active item based on pathname
  useEffect(() => {
    const path = pathname.split('/')[2] || 'home';
    const mappedPath = Object.entries({
      '': 'Home',
      'about': 'About',
      'products': 'Products',
      'services': 'Services',
      'contact': 'Contact'
    }).find(([key]) => key === path)?.[1] || 'Home';
    
    setActiveItem(mappedPath);
  }, [pathname]);

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  const getLinkPath = (item: string) => {
    const basePath = pathname.split('/')[1] || ''; // Get the first part of the current path, e.g. 'pharma', 'coffee', etc.

    // Mapping menu items to their desired path segments
    const itemToPathMap: { [key: string]: string } = {
      Home: '/',
      About: 'about',
      Products: 'products',
      Services: 'services',
      Contact: 'contact',
    };

    if (item === 'Home' && basePath) {
      return `/${basePath}`;
    }

    const mappedItem = itemToPathMap[item] || item.toLowerCase();
    return basePath ? `/${basePath}/${mappedItem}` : `/${mappedItem}`;
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`flex relative mx-auto px-6 sm:px-10 md:px-16 justify-between items-center max-w-7xl transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg rounded-xl md:rounded-full border border-gray-100' 
            : 'bg-white/80 backdrop-blur-sm rounded-xl md:rounded-full'
        }`}
      >
        <Link href={'/'} className="py-4 flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white text-xl font-bold">M</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-800 tracking-tight">
              Mount<span className="text-teal-600">Trading</span>
            </h1>
            <p className="text-[10px] -mt-1 text-gray-500 hidden sm:block">Excellence in Trade</p>
          </div>
        </Link>

        <nav className="h-16 flex items-center">
          <ul className="flex gap-2 md:gap-8 items-center">
            {['Home', 'About', 'Products', 'Services', 'Contact'].map((item) => (
              <li key={item} className="relative">
                <Link 
                  href={getLinkPath(item)} 
                  onClick={() => handleSetActiveItem(item)}
                  className={`relative px-3 py-2 text-sm md:text-base font-medium transition-colors duration-200 ${
                    activeItem === item 
                      ? 'text-teal-600' 
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item}
                  {activeItem === item && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            {/* Call to Action Button */}
            <li className="ml-2">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm md:text-base px-4 py-2 rounded-full shadow-md transition-all duration-200 hidden md:block"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default DesktopNavbar;