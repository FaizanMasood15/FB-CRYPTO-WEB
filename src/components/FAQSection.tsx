 'use client';// This MUST be the very first line in the file for useState to work

import React, { useState } from 'react';
import PlusMinusIcon from './icons/PlusMinusIcon';
export default function FAQSection() {
  // State to manage the open/close status of FAQ items.
  // 'null' means no item is open. When an item is open, its index is stored.
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // Function to toggle the visibility of an FAQ item.
  // If the clicked item is already open, it closes it. Otherwise, it opens the clicked item.
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Array of FAQ data: Each object contains a question and its corresponding answer.
  const faqs = [
    {
      question: "What is a Cryptocurrency?",
      answer: "A cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers."
    },
    {
      question: "Is Cryptocurrency Legal in Pakistan?",
      answer: "While there have been regulatory uncertainties, the Supreme Court of Pakistan lifted the ban on cryptocurrency trading in March 2020. However, the regulatory landscape is still evolving, and it's advisable to stay updated on the latest government policies."
    },
    {
      question: "What is the Future of Cryptocurrency Trading in Pakistan?",
      answer: "The future of cryptocurrency in Pakistan is promising, with increasing adoption and innovation. While regulatory clarity is still sought, the potential for decentralized finance and blockchain technology to revolutionize various sectors is immense."
    },
    {
      question: "How to Buy Cryptocurrency in Pakistan?",
      answer: "You can buy cryptocurrency in Pakistan through various exchanges like Faizan Masood. Typically, you need to sign up, complete KYC (Know Your Customer) verification, deposit funds via bank transfer or other methods, and then you can start trading."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#43FFFF] to-[#327FC6] text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {/* Map through the FAQs array to render each question and answer */}
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-md border border-gray-700">
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)} // Call toggleFaq when button is clicked
              >
                <span className="text-lg font-semibold text-gray-200">{faq.question}</span>
                <PlusMinusIcon isOpen={openFaq === index} /> {/* Pass isOpen prop to PlusMinusIcon */}
              </button>
              {/* Conditionally render the answer if the current FAQ item is open */}
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 text-gray-300 text-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
