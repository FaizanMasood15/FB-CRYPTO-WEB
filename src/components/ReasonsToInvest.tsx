import React from 'react';
import Image from 'next/image';
export default function ReasonsSection() {
  return (
    <section className="py-24 px-6 md:px-18 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Left Section: Reasons Checklist (remains coded) */}
        <div className="md:w-1/2">
          {/* Heading with Linear Gradient Text */}
          <h2 className="text-4xl md:text-4xl font-bold mb-12 leading-tight  tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6]">
            Reasons to invest in <br /> cryptocurrencies in 2022
          </h2>
          <div className="space-y-8">
            {/* Reason 1 */}
            <div className="flex items-start">
              {/* Checkmark Icon - solid white inside a rounded blue circle */}
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Buying Bitcoin is legal</h3>
                <p className="text-gray-300">
                  The Supreme Court judgement turned in favour of Pakistan Investors making investing in cryptocurrency legal.
                </p>
              </div>
            </div>
            {/* Reason 2 */}
            <div className="flex items-start">
              {/* Checkmark Icon */}
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Growing alternate asset class</h3>
                <p className="text-gray-300">
                  Trusted by 70M+ traders, major banks, institutional and renowned investors, and hedge funds.
                </p>
              </div>
            </div>
            {/* Reason 3 */}
            <div className="flex items-start">
              {/* Checkmark Icon */}
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1
                  0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">High return potential</h3>
                <p className="text-gray-300">
                  Bitcoin became the most lucrative choice of investment delivering a whopping 300% + returns in 2022.
                </p>
              </div>
            </div>
          </div>
        </div>

       {/* Right Section: Image of the Portfolio Overview */}
        <div className="md:w-1/2 flex justify-center items-center p-4 py-22 "> 
          <Image 
            src="/portfolio-display 1.png" 
            alt="Portfolio Overview"
            width={600} 
            height={400} 
            className="max-w-full h-auto rounded-xl shadow-lg border border-gray-700"
          />
        </div>
      </div>
    </section>
  );
}
