import React from 'react';

const Numbers = () => {
  return (
    <main className={`h-screen w-full flex flex-col`}>
      <section
        className={`flex flex-col flex-grow items-center justify-start py-12 px-6 md:px-16 space-y-10`}
      >
        <div className={`max-w-3xl text-center`}>
          <h2 className={`text-2xl md:text-4xl font-extrabold text-black`}>
            We Are Proud Med
          </h2>
          <p className={`text-base md:text-lg text-gray-700 mt-2`}>
            Trusted by Institutions, Built with Purpose
          </p>
          <p className={`mt-6 text-gray-700 text-base md:text-lg`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, nulla at efficitur consequat, magna felis gravida metus,
            sed bibendum eros velit nec nisl. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis a augue ut magna bibendum accumsan. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis a augue ut magna bibendum accumsan.
          </p>
        </div>

        {/* Immersive Stats */}
        <div
          className={`w-full mt-auto py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-[#CCECEC] rounded-t-3xl`}
        >
          <div>
            <h2 className={`text-4xl font-extrabold text-[#008080]`}>120+</h2>
            <p className={`mt-2 text-[#006666]`}>Employees</p>
          </div>
          <div>
            <h2 className={`text-4xl font-extrabold text-[#008080]`}>500+</h2>
            <p className={`mt-2 text-[#006666]`}>Products</p>
          </div>
          <div>
            <h2 className={`text-4xl font-extrabold text-[#008080]`}>35+</h2>
            <p className={`mt-2 text-[#006666]`}>Partners</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Numbers;
