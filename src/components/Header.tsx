'use client';// This component now uses useState, so it must be a client component.
import React, { useState } from 'react';
export default function Header() {
  // State to manage the open/close status of the language dropdown
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  // State to manage the currently selected language
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  // Function to toggle the language dropdown visibility
  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };
  // Function to handle language selection
  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLangDropdownOpen(false); // Close dropdown after selection
  };
  return (
    <header className="py-8 px-6 md:px-12 flex justify-between items-center relative z-10">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6]">Faizan Masood</div>
      <div className="hidden md:flex items-center space-x-10"> 
        {/* Desktop Navigation Links */}
        <nav className="space-x-14 text-gray-300"> {/* space-x-8 controls gap between nav links */}
          <a href="#" className="hover:text-blue-400 transition duration-300">About us</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Learn</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Signup</a>
        </nav>
        {/* Language Selector */}
        <div className="relative"> {/* Use relative positioning for the dropdown menu */}
          <div
            className="text-gray-300 flex items-center cursor-pointer hover:text-blue-400 transition duration-300 px-3 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700"
            onClick={toggleLangDropdown} // Toggle dropdown on click
            >
            <span>{selectedLanguage}</span> {/* Display selected language */}
            {/* Arrow icon that rotates based on dropdown state */}
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {/* Language Dropdown Options */}
          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-gray-800 rounded-md shadow-lg py-1 z-20">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                onClick={() => handleLanguageSelect('EN')} >
                English
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                onClick={() => handleLanguageSelect('HI')}
              >
                Hindi
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                onClick={() => handleLanguageSelect('ARB')}
              >
                Arabic
              </button>
            </div>
          )}
        </div>
        <button
          className="text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          // Inline style for linear gradient background
          style={{ backgroundImage: 'linear-gradient(to right, #43FFFF, #327FC6)' }}
        >
          Login <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden">
        <button className="text-white text-2xl">&#9776;</button>
      </div>
    </header>
  );
}
