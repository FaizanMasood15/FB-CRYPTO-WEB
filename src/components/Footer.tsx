import React from 'react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-gray-800 text-gray-400 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* My Logo in the Footer */}
        <div className="mb-4 sm:mb-0 text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6]">Faizan Masood</div>

        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a href="#" className="hover:text-blue-400 transition duration-300">Terms & Condition</a>
        </div>

        {/* App Download Links and Social Media */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex space-x-4">
            {/* App Store Download Badge */}
            <a href="#" className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-10 rounded-lg" />
            </a>
            {/* Google Play Download Badge */}
            <a href="#" className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" className="h-10 rounded-lg" />
            </a>
          </div>
          <p className="text-sm">Made with ❤️</p>
          <div className="flex space-x-4">
            {/* Social media icons */}
            <a href="#" className="hover:opacity-75 transition duration-300">
              <img
                src="\Social (1).png" 
                alt="Facebook"
                className="w-6 h-6 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/24x24/3B5998/white?text=FB'; }} // Fallback
              />
            </a>
            <a href="#" className="hover:opacity-75 transition duration-300">
              <img
                src="\Social (2).png"
                alt="Twitter"
                className="w-6 h-6 object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/24x24/1DA1F2/white?text=TW'; }} // Fallback
              />
            </a>
            <a href="#" className="hover:opacity-75 transition duration-300">
              <Image
                src="/Social.png" 
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
