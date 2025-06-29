
import React from 'react';
export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-18 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 z-0"></div>

      {/* Main content container, positioned above the background elements */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left content area: Text, input, and crypto ticker */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <p className="text-sm font-semibold mb-2 uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6]">
                  0% trading commission          </p>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-6">
            PAKISTAN MOST TRUSTED BITCOIN & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6]">CRYPTOCURRENCY </span> EXCHANGE
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Buy, Sell & Trade Bitcoin, Ethereum, Ripple, Litecoin and more cryptocurrencies in paksitan. Start trading now!
          </p>

          <div
            className="relative max-w-md mx-auto md:mx-0 p-[2px] shadow-lg
                       rounded-tl-xl rounded-tr-xl rounded-bl-4xl rounded-br-xl" /* Custom rounding */
            style={{ backgroundImage: 'linear-gradient(to right, #43FFFF, #327FC6)' }}
          >
            {/* Inner div for the solid background of the input field */}
            <div
              className="flex items-center bg-gray-800 overflow-hidden
                         rounded-tl-xl rounded-tr-xl rounded-bl-4xl rounded-br-xl" /* Match outer rounding */
            >
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-grow p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              />
              {/* Submit button, now integrated inside the main container */}
              <button
                className="flex-shrink-0 w-12 h-10 flex items-center justify-center rounded-xl text-white transition duration-300 transform hover:scale-105 mr-1" /* Button rounded-xl */
                style={{ backgroundImage: 'linear-gradient(to right, #43FFFF, #327FC6)' }}
              >
                <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Crypto Ticker Display */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="p-4 bg-gray-800 rounded-xl shadow-inner border border-gray-700">
              <p className="text-blue-400 text-sm font-semibold flex items-center"> {/* Changed text color and added flex */}
                ETH <span className="w-2 h-2 bg-green-400 rounded-full ml-2"></span> {/* Added live dot */}
              </p>
              <p className="text-xl font-bold text-white"> 
                $ 2000.47 <span className="text-white text-base font-normal">+2.06%</span> 
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-xl shadow-inner border border-gray-700">
              <p className="text-blue-400 text-sm font-semibold">USDT</p> 
              <p className="text-xl font-bold text-white"> 
                Rs 280.38 <span className="text-white text-base font-normal">+1.28%</span> 
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-xl shadow-inner border border-gray-700">
              <p className="text-blue-400 text-sm font-semibold">BTC</p> 
              <p className="text-xl font-bold text-white"> 
                $ 30057.96 <span className="text-white text-base font-normal">+0.08%</span> 
              </p>
            </div>
          </div>
        </div>

        {/* Right image area: Mobile phones with app screenshots */}
        <div className="md:w-1/2 flex justify-center items-center relative mt-2 md:mt-0">
          {/* Placeholder images for phone screenshots. Replace with actual images from public folder. */}
          {/* For example: <img src="/images/phone1.png" ... /> */}
          <img src="\iPhone 12 _ 12 Pro.png" alt="Mobile App Screenshot 1" className="w-68 h-auto rounded-3xl shadow-2xl rotate-3 transform transition-transform duration-500 ease-in-out hover:scale-105" />
          <img src="\iPhone 2.png" alt="Mobile App Screenshot 2" className="w-68 h-auto rounded-3xl shadow-2xl -ml-16 mt-20 -rotate-6 transform transition-transform duration-500 ease-in-out hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
