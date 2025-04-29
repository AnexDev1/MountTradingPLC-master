'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Division {
  title: string;
  desc: string;
  img: string;
  href: string;
  color: string;
}

const divisions: Division[] = [
  {
    title: 'Coffee Export',
    desc: 'Premium Ethiopian coffee beans sourced directly from farmers and delivered globally.',
    img: '/image/coffeeBeans.jpg',
    href: '/coffee',
    color: '#4E2814',
  },
  {
    title: 'Medical Equipment',
    desc: 'High‑quality equipment for hospitals, clinics and healthcare professionals.',
    img: '/image/medicalEquipmentDesktop.jpg',
    href: '/pharma',
    color: '#008080',
  },
];

const BusinessDivisions = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Business Divisions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Delivering excellence across multiple industries with specialized expertise and commitment to quality.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {divisions.map(({ title, desc, img, href, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link
              href={href}
              className="block relative h-80 overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={img}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white"
                style={{ borderBottom: `4px solid ${color}` }}
              >
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm md:text-base opacity-90">{desc}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessDivisions;