import Link from 'next/link';

const About = () => {
  return (
    <main className="relative w-full h-auto">
      {/* Company Story */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Our Journey
          </h2>
          <p className="mt-6 max-w-4xl mx-4 md:mx-auto text-base text-left md:text-center">
            Mount Trading is green arabica coffee export company based in Addis
            Ababa, Ethiopia. The company was established in 2024 by Mr. Ashenafi
            Gizaw who has over 12 years experience in the Ethiopian green coffee
            planting, processing and export business. Mount Trading was founded
            on the principles of fairness and transparency in the coffee value
            fulfilling the needs of our valued customers. Since the
            establishment, we have produced and exported both specially prepared
            traceable commercial coffee beans directly to the global green
            coffee buyers and roasters worldwide.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#F9F9F9] py-12 min-h-[80vh] flex flex-col px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#534A4A]">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Vision */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md min-h-[300px]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#4E2814] rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl text-white">✔️</span>
              </div>
              <h3 className="mt-8 text-lg md:text-xl font-semibold">Vision</h3>
              <p className="mt-2 text-sm md:text-base text-center">
                To be the leader in innovation and quality among coffee
                producers and exporters while caring for the environment.
              </p>
            </div>

            {/* Mission */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md min-h-[300px]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#4E2814] rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl text-white">✔️</span>
              </div>
              <h3 className="mt-8 text-lg md:text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-sm md:text-base text-center">
                To become the most reliable and market-oriented green coffee
                supplier in Ethiopia.
              </p>
            </div>

            {/* Values */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md min-h-[300px]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#4E2814] rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl text-white">✔️</span>
              </div>
              <h3 className="mt-8 text-lg md:text-xl font-semibold">Values</h3>
              <p className="mt-2 text-sm md:text-base text-center">
                Honesty, Trust, Timeliness, Deliverable, Teamwork, Diligence,
                and Transparency in all of our values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4E2814] text-white py-12 text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Learn More?</h2>
        <p className="mt-4 text-sm md:text-base">
          Explore our products, our values, and what we can do for you.
        </p>
        <Link
          href="/coffee/contact"
          className="mt-6 inline-block bg-[#F9F9F9] text-[#4E2814] py-2 px-6 rounded-full text-sm md:text-base"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
};

export default About;
