import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-white via-[#D0F0F0] to-[#B2DCDC] px-6 md:px-16 py-16 space-y-10`}
    >
      <section className={`text-center space-y-6`}>
        <h1 className={`text-4xl md:text-5xl font-extrabold text-[#008080]`}>
          Revolutionizing Healthcare Equipment
        </h1>
        <p className={`text-md md:text-lg text-[#019696]`}>
          We deliver possibilities, not just machines.
        </p>
      </section>

      {/* Who We Are*/}
      <section
        className={`flex flex-col md:flex-row items-center gap-12 bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-xl`}
      >
        <div className={`flex-1 space-y-4 max-w-lg`}>
          <h2 className={`text-2xl md:text-3xl font-bold text-black`}>
            Who We Are
          </h2>
          <p className={`text-gray-700 text-base md:text-lg leading-relaxed`}>
            We are innovators at the intersection of technology and healthcare,
            dedicated to transforming how medical services are delivered. With a
            global network of partners, we support clinics and hospitals by
            offering cutting-edge equipment and exceptional service. Our team is
            passionate about driving meaningful, real-world impact where it
            matters most.
          </p>
        </div>
        <div className={`flex-1 w-full h-64 relative hidden md:block`}>
          <Image
            src="/image/certificate.jpg"
            alt="Certificate or Team"
            fill
            className="rounded-xl object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Mission Quote */}
      <section className={`text-center`}>
        <blockquote
          className={`text-xl md:text-2xl italic font-medium text-[#019696]`}
        >
          &quot;Empower every healthcare provider with world-class
          technology.&quot;
        </blockquote>
      </section>
    </main>
  );
};

export default AboutPage;
