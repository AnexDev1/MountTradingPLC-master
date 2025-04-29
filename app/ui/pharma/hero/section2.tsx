'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaUsers, FaGlobeAmericas, FaMedkit } from 'react-icons/fa';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero section with gradient background */}
      <section className="bg-gradient-to-b from-white via-[#E5F8F7] to-[#D0EFEF] px-6 md:px-16 py-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"></div>
        <div className="absolute -bottom-32 left-10 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center space-y-6 relative z-10"
          >
            <span className="inline-block px-4 py-1 mb-4 bg-teal-100 text-teal-800 text-sm font-medium tracking-wider uppercase rounded-full">
              Medical Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-700 leading-tight">
              Revolutionizing <span className="text-teal-600">Healthcare</span> Equipment
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto my-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-teal-600 max-w-3xl mx-auto font-medium">
              We deliver possibilities, not just machines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div 
              variants={fadeIn}
              className="flex-1 space-y-6 max-w-lg"
            >
              <div>
                <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-2">Our Identity</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Who We Are
                </h2>
                <div className="w-16 h-1 bg-teal-500 rounded-full mb-6"></div>
              </div>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We are innovators at the intersection of technology and healthcare,
                dedicated to transforming how medical services are delivered. With a
                global network of partners, we support clinics and hospitals by
                offering cutting-edge equipment and exceptional service.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our team is passionate about driving meaningful, real-world impact where it
                matters most.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <FaStethoscope />
                  </div>
                  <span className="font-medium">Quality Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <FaUsers />
                  </div>
                  <span className="font-medium">Expert Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <FaGlobeAmericas />
                  </div>
                  <span className="font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <FaMedkit />
                  </div>
                  <span className="font-medium">Healthcare Focus</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex-1 w-full relative"
            >
              <div className="absolute -top-8 -left-8 w-full h-full bg-teal-200/30 rounded-xl transform rotate-3"></div>
              <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-2xl border-4 border-white">
                <Image
                  src="/image/certificate.jpg"
                  alt="Certificate or Team"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 px-6 md:px-16 py-24 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-white" style={{ borderRadius: '0 0 100% 100%' }}></div>
        <div className="absolute -right-10 top-20 opacity-10">
          <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M40,10 L80,10 L80,30 L95,30 L95,70 L80,70 L80,90 L40,90 L40,70 L10,70 L10,30 L40,30 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl text-white opacity-30 mb-6">"</div>
            <blockquote className="text-2xl md:text-4xl font-light italic mb-8 leading-relaxed">
              Empower every healthcare provider with world-class technology and support, enhancing patient outcomes globally.
            </blockquote>
            <div className="flex justify-center items-center">
              <div className="w-16 h-1 bg-white/50 rounded-full mx-4"></div>
              <span className="text-lg font-semibold">Our Mission</span>
              <div className="w-16 h-1 bg-white/50 rounded-full mx-4"></div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="px-6 md:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-2">What Guides Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-teal-500 rounded-full mx-auto mb-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeIn} 
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 text-2xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality & Safety</h3>
                <p className="text-gray-600">
                  We are committed to providing medical equipment that meets the highest standards of quality, reliability, and patient safety.
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn} 
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 text-2xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek and embrace new technologies and solutions to address the evolving challenges in healthcare delivery.
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn} 
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 text-2xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We build lasting relationships with healthcare providers, working together to enhance patient care and clinical outcomes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;