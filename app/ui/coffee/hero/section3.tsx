'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi';
import { FaCoffee, FaMugHot } from 'react-icons/fa';

// Better coffee-themed icons
const coffeeIcons = [
  <GiCoffeeBeans size={28} key="beans" />,
  <FaCoffee size={28} key="coffee" />,
  <FaMugHot size={28} key="mug" />,
  <GiCoffeeCup size={28} key="cup" />
];

const services = [
  {
    title: 'Yirgacheffe',
    description:
      'Yirgacheffe coffee is grown in the highlands of the Gedeo Zone in Southern Ethiopia. Known for its bright acidity and floral notes with hints of citrus and jasmine.',
    icon: coffeeIcons[0],
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
    flavor: 'Floral, Citrus, Jasmine'
  },
  {
    title: 'Sidamo',
    description:
      'Sidamo coffee comes from southern Ethiopia. Renowned for a smooth body, floral aroma, and notes of lemon and tropical fruit.',
    icon: coffeeIcons[1],
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
    flavor: 'Floral, Lemon, Tropical Fruit'
  },
  {
    title: 'Harrar',
    description:
      'Harrar coffee is wild and fruity with earthy and spicy notes. Full-bodied with wine and chocolate hints and a smoky finish.',
    icon: coffeeIcons[2],
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
    flavor: 'Wine, Chocolate, Smoky'
  },
  {
    title: 'Limu',
    description:
      'Limu coffee from western Ethiopia is balanced and smooth with light acidity, chocolate tones, and caramel sweetness.',
    icon: coffeeIcons[3],
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
    flavor: 'Balanced, Chocolate, Caramel'
  },
];

const Service = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-white to-[#F9F5F2] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[#f9fafb]" style={{ borderRadius: '0 0 100% 100%' }}></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10">
        <Image 
          src="/image/coffee-beans-scatter.png" // Ensure you have this image
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-30 bg-gradient-to-t from-[#4E2814]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-[#4E2814] text-xs font-medium tracking-wider uppercase rounded-full mb-4">Our Coffee Varieties</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E1A0F] mb-4">Ethiopia's Finest Coffee Regions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-800 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Ethiopia is the birthplace of coffee, offering some of the world's most distinctive and sought-after varieties. 
            Explore our premium selections from Ethiopia's renowned coffee regions.
          </p>
        </motion.div>
        
        {/* Coffee Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group"
            >
              <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl bg-gradient-to-br ${service.bg} border border-amber-100/50 transition duration-500 h-full transform hover:-translate-y-1`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4E2814] to-amber-700 text-white flex items-center justify-center shrink-0 shadow-md mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#3A1E0F] text-center md:text-left">{service.title}</h3>
                    <div className="w-12 h-1 bg-amber-200 rounded-full mb-4 mx-auto md:mx-0"></div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    
                    {/* Flavor profile tag */}
                    <div className="flex items-center mt-4">
                      <span className="text-xs uppercase tracking-wider text-gray-500 mr-3">Flavor Profile:</span>
                      <span className="text-sm font-medium text-[#4E2814] bg-amber-100/50 py-1 px-3 rounded-full">
                        {service.flavor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button className="px-8 py-3 bg-[#4E2814] text-white rounded-full transition-all duration-300 font-medium shadow-lg hover:bg-[#3E1804] hover:shadow-xl transform hover:-translate-y-0.5">
            Learn More About Our Coffee
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;