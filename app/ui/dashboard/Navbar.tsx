'use client';

import Link from 'next/link';
import BrandSelector from './BrandNavbar';

const Navbar = () => {
  const menuItems = ['About', 'Contact'];

  return (
    <>
      <BrandSelector />
      <div
        className={`flex z-10 relative px-4 md:px-8 lg:px-16 bg-[#008080] justify-between items-center h-20`}
      >
        <h1
          className={`text-white font-bold cursor-pointer text-xs sm:text-lg tracking-wide`}
        >
          <Link href="/">MountTradingPLC</Link>
        </h1>

        <ul className="flex gap-4 sm:gap-8 text-white font-bold cursor-pointer text-xs sm:text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative hover:text-gray-300 tracking-wide"
            >
              <Link href={`/${item.toLowerCase()}`} passHref>
                {item}
                <span className="absolute bg-gray-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
