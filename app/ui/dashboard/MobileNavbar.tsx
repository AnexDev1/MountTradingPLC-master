'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';
import { usePathname } from 'next/navigation';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const menuItems = ['Home', 'About', 'Products', 'Services', 'Contact'];

  const getLinkPath = (item: string) => {
    const basePath = pathname.split('/')[1]; // Get the first part of the current path, e.g., 'pharma', 'coffee', etc.

    // Mapping menu items to their desired path segments
    const itemToPathMap: { [key: string]: string } = {
      Home: '/',
      About: 'about',
      Products: 'products',
      Services: 'services',
      Contact: 'contact',
    };

    const mappedItem = itemToPathMap[item] || item.toLowerCase(); // Default to lowercase if no mapping exists
    return `/${basePath}/${mappedItem}`;
  };

  return (
    <div
      className={`flex items-center justify-between p-4 text-black bg-white font-bold z-10 shadow-lg shadow-[#008080]/30`}
    >
      <Link href={'/'} passHref>
        <h1 className={`font-bold cursor-pointer`}>MountTradingPLC</h1>
      </Link>
      <button onClick={() => setOpen(!open)} className="text-3xl">
        {open ? <CgClose /> : <CgMenuRightAlt />}
      </button>
      <div
        className={`absolute top-full left-0 w-full bg-white text-black transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={getLinkPath(item)} // Use the dynamic link path
            passHref
            onClick={() => setOpen(false)}
          >
            <p className={`py-4 pl-4 relative group w-fit`}>
              {item}
              <span
                className={`absolute bottom-1 left-0 w-0 h-[2px] bg-[#008080] transition-all duration-300 group-hover:w-full`}
              ></span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
