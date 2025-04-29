'use client';

import React from 'react';
import { FaCogs, FaRocket, FaHeart, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Yirgacheffe',
    description:
      'Yirgacheffe coffee is grown in the highlands of the Gedeo Zone in Southern Ethiopia. Known for its bright acidity and floral notes with hints of citrus and jasmine.',
    icon: <FaCogs size={24} />,
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
  },
  {
    title: 'Sidamo',
    description:
      'Sidamo coffee comes from southern Ethiopia. Renowned for a smooth body, floral aroma, and notes of lemon and tropical fruit.',
    icon: <FaRocket size={24} />,
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
  },
  {
    title: 'Harrar',
    description:
      'Harrar coffee is wild and fruity with earthy and spicy notes. Full-bodied with wine and chocolate hints and a smoky finish.',
    icon: <FaHeart size={24} />,
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
  },
  {
    title: 'Limu',
    description:
      'Limu coffee from western Ethiopia is balanced and smooth with light acidity, chocolate tones, and caramel sweetness.',
    icon: <FaShieldAlt size={24} />,
    bg: 'from-[#F5EDE8] via-white to-amber-50',
    ring: 'ring-[#4E2814]',
  },
];

const Service = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 min-h-screen bg-[#f9fafb]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl min-h-60 shadow-md bg-gradient-to-br ${service.bg} backdrop-blur-xl border ${service.ring} ring-1 transition duration-300`}
          >
            <div className="flex items-start space-x-8">
              <div className="w-16 h-16 rounded-full bg-[#008080] text-white flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
