'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest news and updates.</p>
            </div>
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-l-lg bg-gray-700 border-0 focus:ring-2 focus:ring-teal-500 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-r-lg text-white font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">M</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Mount Trading PLC</h2>
              </div>
              <p className="mt-2 text-sm text-gray-400">Excellence in Trade & Quality</p>
            </div>
            
            <p className="text-gray-400">
              A premier trading company specializing in premium coffee exports and advanced medical equipment solutions worldwide.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-teal-500 mr-3" />
                <span>123 Business Avenue, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-teal-500 mr-3" />
                <span>+251 123 456 789</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-teal-500 mr-3" />
                <span>info@mounttrading.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 pb-2 border-b border-gray-700 inline-block">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 pb-2 border-b border-gray-700 inline-block">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/coffee" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Coffee Division
                </Link>
              </li>
              <li>
                <Link href="/pharma" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Medical Solutions
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 pb-2 border-b border-gray-700 inline-block">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; {year} Mount Trading PLC. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <FaFacebookF className="text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <FaTwitter className="text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <FaLinkedinIn className="text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <FaInstagram className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;