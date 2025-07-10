
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* AC Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full mb-4">
              <span className="text-black text-2xl font-bold">AC</span>
            </div>
            <h3 className="text-white text-xl font-semibold">Academy Creators</h3>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Support</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Academy Creators. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Transform your knowledge into a profitable business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
