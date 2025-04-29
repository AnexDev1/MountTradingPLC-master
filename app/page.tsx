'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './ui/dashboard/Footer';
import Navbar from './ui/dashboard/Navbar';
import Homepage from './ui/hero/homePage';

export default function Page() {
  // Smooth scroll behavior
  useEffect(() => {
    // Ensure smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Page transition animation
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen flex flex-col bg-white"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >

        
        {/* Main content */}
        <main className="flex-grow pt-16"> {/* pt-16 to account for fixed navbar */}
          <Homepage />
        </main>
        
        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}