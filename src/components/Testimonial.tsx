import React from 'react';

// Testimonial component: Features a customer's quote and a photo,
// designed to build trust and credibility.
export default function Testimonial() {
  return (
    <section className="py-20 px-6 md:px-18 bg-gray-800 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6] mb-16">
          What our customers say!
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image section with a background gradient and speech bubble */}
          <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl filter blur-lg opacity-50 z-0"></div>
            {/* Placeholder for customer image. Replace with actual image from public folder. */}
            {/* For example: <img src="/images/customer.jpg" ... /> */}
            <img src="/WhatsApp Image 2025-05-26 at 3.55.39 PM.jpeg" alt="Customer" className="relative z-10 w-full h-auto rounded-2xl shadow-xl" />
          </div>

          {/* Testimonial text and Contact Us button */}
          <div className="lg:w-1/2 text-center lg:text-left p-6">
            <blockquote className="text-xl md:text-2xl italic leading-relaxed text-gray-200 mb-8">
              &ldquo;I Entered The Market With "Crypto Is A Scam!" Phrase And Mindset. My First Exchange Was Bitbns And 
              I Was Pretty Scared. Year after year the trust developed and by now believe me I dug into the whole team and
               was mesmerized how FAIZAN MASOOD was created.&rdquo;
            </blockquote>
            <button
          className="text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          // Inline style for linear gradient background
          style={{ backgroundImage: 'linear-gradient(to right, #43FFFF, #327FC6)' }}
        >
          CONTACT US <span aria-hidden="true">&rarr;</span>
        </button>
          </div>
        </div>
      </div>
    </section>
  );
}
