'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="relative w-full h-auto overflow-hidden">
      {/* Decorative coffee beans pattern */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-5 -rotate-12">
        <Image 
          src="/image/coffee-pattern.png" // Add this decorative image to your project
          alt=""
          width={200}
          height={200}
        />
      </div>

      {/* Company Story */}
      <section className="py-24 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 bg-amber-100 text-[#4E2814] text-xs font-medium tracking-wider uppercase rounded-full mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E1A0F] mb-6">
              Our Journey from Farm to Cup
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-800 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <motion.p 
              variants={fadeIn}
              className="mt-6 max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-gray-700 md:text-center"
            >
              Mount Trading is a premier green arabica coffee export company based in Addis
              Ababa, Ethiopia. The company was established in 2024 by Mr. Ashenafi
              Gizaw who has over 12 years experience in the Ethiopian green coffee
              planting, processing and export business. Mount Trading was founded
              on the principles of fairness and transparency in the coffee value chain,
              fulfilling the needs of our valued customers. Since the
              establishment, we have produced and exported both specially prepared
              traceable commercial coffee beans directly to the global green
              coffee buyers and roasters worldwide.
            </motion.p>
            
            <div className="flex items-center justify-center mt-10 space-x-4">
              <div className="w-20 h-1 bg-amber-200 rounded-full"></div>
              <Image 
                src="/image/coffee-bean-icon.svg" // Add this icon to your project
                alt="Coffee bean"
                width={30}
                height={30}
                className="opacity-70"
              />
              <div className="w-20 h-1 bg-amber-200 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gradient-to-b from-[#F9F6F3] to-white py-24 px-4 md:px-8 lg:px-16 relative">
        <div className="absolute -top-10 left-0 w-full h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-amber-100 text-[#4E2814] text-xs font-medium tracking-wider uppercase rounded-full mb-4">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1A0F]">
              What We Stand For
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-800 to-amber-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8"
          >
            {/* Vision */}
            <motion.div 
              variants={fadeIn}
              className="group relative flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-700 to-[#4E2814] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mt-10 text-xl md:text-2xl font-semibold text-[#4E2814]">Vision</h3>
              <div className="w-12 h-1 bg-amber-200 rounded-full my-3"></div>
              <p className="mt-2 text-base text-center text-gray-600 leading-relaxed">
                To be the leader in innovation and quality among coffee
                producers and exporters while caring for the environment.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              variants={fadeIn} 
              className="group relative flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-700 to-[#4E2814] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-10 text-xl md:text-2xl font-semibold text-[#4E2814]">Mission</h3>
              <div className="w-12 h-1 bg-amber-200 rounded-full my-3"></div>
              <p className="mt-2 text-base text-center text-gray-600 leading-relaxed">
                To become the most reliable and market-oriented green coffee
                supplier in Ethiopia, setting new standards for quality and service.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div 
              variants={fadeIn} 
              className="group relative flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-700 to-[#4E2814] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-10 text-xl md:text-2xl font-semibold text-[#4E2814]">Values</h3>
              <div className="w-12 h-1 bg-amber-200 rounded-full my-3"></div>
              <p className="mt-2 text-base text-center text-gray-600 leading-relaxed">
                Honesty, Trust, Timeliness, Deliverable, Teamwork, Diligence,
                and Transparency in all of our interactions and products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4E2814] text-white py-20 text-center px-4 md:px-8 lg:px-16 relative">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image 
            src="/image/coffee-beans-scatter.png" // Add this decorative image
            alt=""
            width={300}
            height={300}
          />
        </div>
      
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Ethiopian Coffee?</h2>
          <p className="mt-4 text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover the rich flavors and sustainable practices that make our coffee exceptional. 
            Let's start a conversation about your coffee needs.
          </p>
          <Link
            href="/coffee/contact"
            className="mt-6 inline-block bg-white text-[#4E2814] py-3 px-8 rounded-full text-base font-medium hover:bg-amber-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default About;