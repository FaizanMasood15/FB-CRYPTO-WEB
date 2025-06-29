import React from 'react';
// presented with icons and descriptive text.
export default function WhyChooseus() {
  return (
    // Changed section background to bg-gray-900 to match the provided image
    <section className="py-20 px-6 md:px-18 bg-gray-900 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6] mb-16">
          Why should you choose us for trading? {/* Corrected heading text to match image */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Easy Deposit & Withdrawals */}
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg  transition-transform duration-300 hover:scale-105">
            {/* Replaced SVG with img tag for the icon */}
            <div className="w-24 h-24 mb-4 flex items-center justify-center overflow-hidden"> {/* Added overflow-hidden for rounded image */}
              <img
                src="\image 10.png"
                alt="Easy Deposit & Withdrawals Icon"
                className="w-22 h-22 object-contain" // Ensure image fits and scales
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/blue/white?text=Icon'; }} // Fallback
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy deposit & withdrawals</h3>
            <p className="text-gray-500">Quickly add & withdraw funds <br></br>to your bank account</p>
          </div>

          {/* Card 2: Fast & Simple */}
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg  transition-transform duration-300 hover:scale-105">
            {/* Replaced SVG with img tag for the icon */}
            <div className="w-24 h-24 mb-4 flex items-center justify-center  overflow-hidden">
              <img
                src="\image 11.png" 
                alt="Fast & Simple Icon"
                className="w-22 h-22 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/orange/white?text=Icon'; }} // Fallback
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & simple</h3>
            <p className="text-gray-500">Start investing in under<br></br> 10 minutes</p>
          </div>

          {/* Card 3: Safe & Secure */}
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            {/* Replaced SVG with img tag for the icon */}
            <div className="w-24 h-24 mb-4 flex items-center justify-center  overflow-hidden">
              <img
                src="\image 9.png"
                alt="Safe & Secure Icon"
                className="w-22 h-22 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/green/white?text=Icon'; }} // Fallback
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe & secure</h3>
            <p className="text-gray-500">World class security features ensure<br></br> your investments are in safe hands</p>
          </div>
        </div>
      </div>
    </section>
  );
}
