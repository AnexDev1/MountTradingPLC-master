'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Division {
  title: string;
  desc: string;
  img: string;
  href: string;
  color: string;
  icon: string;
}

const divisions: Division[] = [
  {
    title: 'Coffee Export',
    desc: 'Premium Ethiopian coffee beans sourced directly from farmers and delivered globally with uncompromised quality.',
    img: '/image/coffeeBeans.jpg',
    href: '/coffee',
    color: '#4E2814',
    icon: '/image/coffee-icon.svg', // Add this icon to your public folder
  },
  {
    title: 'Medical Equipment',
    desc: 'High‑quality medical equipment and pharmaceutical solutions for healthcare professionals worldwide.',
    img: '/image/medicalEquipmentDesktop.jpg',
    href: '/pharma',
    color: '#008080',
    icon: '/image/medical-icon.svg', // Add this icon to your public folder
  },
];

const BusinessDivisions = () => (
  <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-teal-600">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
          Business Divisions
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Delivering excellence across multiple industries with specialized expertise and uncompromising commitment to quality.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {divisions.map(({ title, desc, img, href, color, icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="100vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: color}}>
                  <Image src={icon} alt="" width={24} height={24} />
                </div>
              </div>
              
              <div className="p-8" style={{borderTop: `4px solid ${color}`}}>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  {title}
                </h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                
                <Link 
                  href={href}
                  className="inline-flex items-center font-medium text-sm"
                  style={{color: color}}
                >
                  <span className="mr-2">Explore Division</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessDivisions;