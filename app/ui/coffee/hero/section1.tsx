import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <main className="relative w-full h-screen">
      <Image
        src="/image/coffeeBeans.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <section className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-8xl font-bold tracking-wide mb-4 text-[#4E2814]">
          Farm to Cup
        </h1>
        <p className="tracking-wide mb-6 max-w-2xl text-center">
          We supply specially prepared, higher quality traceable coffee beans
          directly to global green coffee buyers and roasters worldwide.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
