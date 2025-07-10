
import React from 'react';

const CTAButton = () => {
  const handleBookCourse = () => {
    // Placeholder for booking functionality
    console.log('Book the Course clicked');
    // You can add actual booking logic here
  };

  return (
    <div className="text-center py-8">
      <button
        onClick={handleBookCourse}
        className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 uppercase tracking-wide"
      >
        Book the Course
      </button>
      
      {/* Additional trust signals */}
      <div className="mt-6 text-gray-400 text-sm">
        <p>✓ Instant Access</p>
        <p>✓ 30-Day Money Back Guarantee</p>
        <p>✓ Limited Time Special Price</p>
      </div>
    </div>
  );
};

export default CTAButton;
