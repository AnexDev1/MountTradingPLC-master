'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background images - responsive */}
      <Image
        src="/image/medicalEquipmentDesktop.jpg"
        alt="Advanced Medical Equipment"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="hidden md:block"
      />
      <Image
        src="/image/medicalEquipmentMobile.jpg"
        alt="Advanced Medical Equipment"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="md:hidden"
      />

      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-48 h-48 border border-teal-500/20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 border border-teal-500/10 rounded-full hidden lg:block"></div>
      
      {/* Content container with animations */}
      <div className="absolute inset-0 flex items-center z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 bg-teal-600/80 text-white text-sm font-medium tracking-wider uppercase rounded-full">
              Mount Trading Medical Division
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white mb-6 leading-tight"
          >
            Advanced Medical <br />
            <span className="text-teal-400">Equipment Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl text-gray-100 mb-8 leading-relaxed"
          >
            Providing high-quality, reliable medical equipment for healthcare professionals worldwide. 
            Backed by expert service, fast delivery, and cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/pharma/products"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Browse Equipment
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="/pharma/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full border border-white/30 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-300">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default HomePage;