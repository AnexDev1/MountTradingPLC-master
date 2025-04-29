'use client';
import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e6ffff] to-[#ccf2f2] py-10`}
    >
      <section
        className={`w-full mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-16 py-20`}
      >
        <div
          className={`h-[600px] hidden lg:flex flex-col overflow-hidden rounded-tl-lg rounded-bl-lg shadow-lg`}
        >
          <div className="relative h-[75%] w-full">
            <Image
              src="/image/mountLogo.jpg"
              alt="Contact background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className={`h-[25%] bg-white/60 backdrop-blur-lg px-6 py-4 flex flex-col justify-center`}
          >
            <h2 className={`text-xl font-bold text-black`}>
              Let’s Build Something Together
            </h2>
            <p className={`mt-2 text-sm text-gray-700`}>
              {`Reach out to us with your ideas, questions, or business inquiries.
              We're always ready to listen and collaborate.`}
            </p>
          </div>
        </div>

        <div className={`bg-white rounded-tr-lg rounded-br-lg shadow-xl p-10`}>
          <h3 className={`text-2xl font-semibold text-black mb-6`}>
            Contact Us
          </h3>
          <form className={`space-y-6`}>
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium text-gray-700`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080]`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium text-gray-700`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080]`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium text-gray-700`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080]`}
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-[#008080] hover:bg-[#006666] text-white font-semibold py-3 rounded-xl transition duration-300`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
