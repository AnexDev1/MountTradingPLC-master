import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <main className={`relative w-full min-h-screen`}>
      <Image
        src="/image/medicalEquipmentDesktop.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="hidden md:block"
      />
      <Image
        src="/image/medicalEquipmentMobile.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="md:hidden"
      />
      <div className={`bg-black opacity-20 absolute inset-0`}></div>

      <section
        className={`absolute inset-0 flex flex-col justify-center items-start gap-6 px-6 md:px-16 z-10`}
      >
        <h1
          className={`text-4xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-md`}
        >
          Medical <span className={`text-[#008080]`}>Equipment Supply</span>
        </h1>
        <p
          className={`text-base md:text-lg max-w-2xl text-white drop-shadow-sm`}
        >
          High-quality, reliable equipment for hospitals, clinics, and
          professionals. Backed by expert service, fast delivery, and
          cutting-edge tech.
        </p>
        <button
          className={`bg-[#008080] hover:bg-[#019696] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition`}
        >
          Get in Touch
        </button>
      </section>
    </main>
  );
};

export default HomePage;
