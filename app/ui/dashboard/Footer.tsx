'use client';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">Mount Trading PLC</h2>
          <p className="mt-2 text-sm">Excellence in Trade & Quality</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/coffee" className="hover:text-white">
                  Coffee Division
                </Link>
              </li>
              <li>
                <Link href="/pharma" className="hover:text-white">
                  Medical Solutions
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <Link href="#" className="hover:text-white">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6">
        <p className="text-center text-sm">&copy; {year} Mount Trading PLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;