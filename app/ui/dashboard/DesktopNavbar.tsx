'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const DesktopNavbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const pathname = usePathname(); // Get the current pathname

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  const getLinkPath = (item: string) => {
    const basePath = pathname.split('/')[1]; // Get the first part of the current path, e.g. 'pharma', 'coffee', etc.

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
      className={`flex z-10 relative my-5 mx-16 px-10 bg-white justify-between rounded-full items-center h-16 shadow-lg shadow-blue-600/30`}
    >
      <Link href={'/'} passHref>
        <h1 className={`font-bold cursor-pointer`}>MountTradingPLC</h1>
      </Link>
      <ul className={`flex gap-8 text-black font-bold cursor-pointer text-md`}>
        {['Home', 'About', 'Products', 'Services', 'Contact'].map(
          (item, index) => (
            <li
              key={index}
              className={`relative hover:text-[#008080] group ${
                activeItem === item ? 'text-[#008080]' : ''
              }`}
              onClick={() => handleSetActiveItem(item)}
            >
              <Link href={getLinkPath(item)} passHref>
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#008080] transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
