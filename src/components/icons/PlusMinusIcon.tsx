import React from 'react';

// PlusMinusIcon component: Renders a plus or minus SVG icon based on 'isOpen' prop.
// Used primarily for accordion-style elements (like FAQs).
export default function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        // If isOpen is true, show the minus path
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
      ) : (
        // If isOpen is false, show the plus path
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      )}
    </svg>
  );
}
