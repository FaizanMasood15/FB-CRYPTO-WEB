import React from 'react';

// ThreeStepGuide component: Guides new users through the initial steps to start using SwapX,
// presented as a simple three-step process.
export default function ThreeStepGuide() {
  return (
    <section className="py-20 px-6 md:px-18 bg-gray-900 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6] mb-16">
          Get started in 3 steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1: Create an account */}
          <div className="flex flex-col items-center p-6">
            <div className="w-24 h-24 mb-4 flex items-center justify-center  overflow-hidden">
              <img
                src="\image 12.png" 
                alt="Safe & Secure Icon"
                className="w-22 h-22 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/green/white?text=Icon'; }} // Fallback
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">1.Create an account</h3>
            <p className="text-gray-500">Sign up with your email and mobile in just 5 minutes</p>
          </div>

          {/* Step 2: Add funds to wallet */}
          <div className="flex flex-col items-center p-6">
            <div className="w-24 h-24 mb-4 flex items-center justify-center  overflow-hidden">
              <img
                src="\image 13.png" 
                alt="Safe & Secure Icon"
                className="w-22 h-22 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/green/white?text=Icon'; }} // Fallback
              />
            </div>            <h3 className="text-xl font-semibold mb-2">2.Add funds to wallet</h3>
            <p className="text-gray-500">Quickly add money to your<br></br> Faizan Masood investment wallet</p>
          </div>

          {/* Step 3: Start investing in crypto */}
          <div className="flex flex-col items-center p-6">
            <div className="w-24 h-24 mb-4 flex items-center justify-center  overflow-hidden">
              <img
                src="\image 14.png" 
                alt="Safe & Secure Icon"
                className="w-22 h-22 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/green/white?text=Icon'; }} // Fallback
              />
            </div>            <h3 className="text-xl font-semibold mb-2">3.Start investing in crypto</h3>
            <p className="text-gray-500">Buy & Sell a variety of top coins at the best prices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
