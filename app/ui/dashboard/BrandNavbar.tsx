'use client';

import Link from 'next/link';

const BrandSelector = () => {
  return (
    <div className={`w-full bg-white py-4 px-4 md:px-8 lg:px-16`}>
      <div className={`mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8`}>
        {/* Pharmaceutical Equipment */}
        <Link
          href="/pharma"
          className={`group block border rounded-2xl p-8 bg-[#CCECEC] shadow-md hover:shadow-xl transition`}
        >
          <h2
            className={`text-xl font-bold mb-3 text-[#008080] group-hover:underline`}
          >
            Explore our Pharmaceutical Equipment
          </h2>
          <p className={`text-base text-[#019696]`}>
            High-quality machines for labs and production.
          </p>
        </Link>

        {/* Coffee Import */}
        <Link
          href="/coffee"
          className={`group block border rounded-2xl p-8 bg-amber-50 shadow-md hover:shadow-xl transition`}
        >
          <h2
            className={`text-xl font-bold mb-3 text-amber-900 group-hover:underline`}
          >
            Explore our Coffee Import
          </h2>
          <p className={`text-base text-amber-800`}>
            Premium Ethiopian coffee directly from origin.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BrandSelector;
