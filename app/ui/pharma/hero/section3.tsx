'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaBoxOpen, FaHandshake } from 'react-icons/fa';

const Numbers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      {/* Main content section */}
      <section className="relative px-6 md:px-16 pt-24 pb-64">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-50 blur-3xl opacity-70"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-teal-50 blur-3xl opacity-70"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1 mb-4 bg-teal-100 text-teal-800 text-sm font-medium tracking-wider uppercase rounded-full">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              We Are <span className="text-teal-700">Proud Med</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto my-6 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-600 font-medium">
              Trusted by Leading Healthcare Institutions, Built with Purpose
            </p>
            
            <div className="mt-10 text-gray-700 text-base md:text-lg space-y-6 leading-relaxed">
              <p>
                Mount Trading's Medical Division has established itself as a premier provider of high-quality medical equipment across Ethiopia and beyond. Our commitment to excellence drives us to source and deliver only the most reliable, innovative solutions that empower healthcare professionals.
              </p>
              <p>
                Through strategic partnerships with world-class manufacturers and rigorous quality control processes, we ensure that every piece of equipment we provide meets international standards and enhances patient outcomes. Our team of specialists offers personalized consultation, seamless implementation, and ongoing support.
              </p>
            </div>
          </motion.div>
          
          {/* Trusted Partners Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">Trusted By Leading Institutions</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
              {/* Replace with actual partner logos */}
              <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Logo 1</div>
              <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Logo 2</div>
              <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Logo 3</div>
              <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Logo 4</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Stats Section */}
      <div className="relative">
        {/* Curved top edge */}
        <div className="absolute -top-20 left-0 w-full h-20 bg-white" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}></div>
        
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-700 to-teal-600 py-20 px-6 md:px-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Impact in Numbers</h3>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <h2 className="text-5xl font-extrabold text-white mb-2">120<span className="text-teal-200">+</span></h2>
                <p className="text-lg text-teal-100">Dedicated Employees</p>
                <p className="text-sm text-white/70 mt-4 text-center">
                  Specialists committed to healthcare excellence and customer service
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <FaBoxOpen className="text-white text-3xl" />
                </div>
                <h2 className="text-5xl font-extrabold text-white mb-2">500<span className="text-teal-200">+</span></h2>
                <p className="text-lg text-teal-100">Quality Products</p>
                <p className="text-sm text-white/70 mt-4 text-center">
                  Premium medical equipment solutions for diverse healthcare needs
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <FaHandshake className="text-white text-3xl" />
                </div>
                <h2 className="text-5xl font-extrabold text-white mb-2">35<span className="text-teal-200">+</span></h2>
                <p className="text-lg text-teal-100">Global Partners</p>
                <p className="text-sm text-white/70 mt-4 text-center">
                  Strategic relationships with leading medical technology providers
                </p>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-teal-700 px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Learn More About Our Impact
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Numbers;