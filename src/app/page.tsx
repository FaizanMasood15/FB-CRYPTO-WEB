'use client'; // This directive MUST be the very first line to resolve the 'client-only' error.

import React from 'react';
// These import paths are relative to src/app/page.tsx.
// They go up one directory (to src/) then down into the components/ folder.
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ReasonsToInvest from '../components/ReasonsToInvest';
import WhyChooseSwapX from '../components/WhyChooseus';
import ThreeStepGuide from '../components/ThreeStepGuide';
import Testimonial from '../components/Testimonial';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

// This is your main page component that assembles all other components.
export default function Home() {
  return (
    // The main container for your entire landing page.
    // 'min-h-screen' ensures it takes at least the full viewport height.
    // 'bg-gray-900' sets a very dark background.
    // 'text-white' makes text white by default.
    // 'font-inter' applies the Inter font for a modern look.
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Render the Header component */}
      <Header />

      {/* Main content area */}
      <main>
        {/* Render each section component in order */}
        <HeroSection />
        <ReasonsToInvest />
        <WhyChooseSwapX />
        <ThreeStepGuide />
        <Testimonial />
        <FAQSection />
      </main>

      {/* Render the Footer component */}
      <Footer />

      {/* Global styles for font and animations */}
      {/* In a production Next.js app, font import might be in layout.tsx or globals.css
          and keyframes in globals.css for better organization. */}
      <style jsx>{`
        /* Define the 'blob' animation for background shapes */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        /* Import the Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
