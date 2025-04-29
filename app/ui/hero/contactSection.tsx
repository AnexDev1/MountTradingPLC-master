'use client';
import { useState } from 'react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: integrate with API or form provider
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600">Questions? Partnership inquiries? Let’s start a conversation.</p>
      </div>
      {submitted ? (
        <p className="text-center text-green-600">Thank you! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="col-span-1 md:col-span-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Message"
            className="col-span-1 md:col-span-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
);
}

export default ContactSection;