import React from 'react';
import { useTheme } from './ThemeProvider';
import NavLinks from './NavLinks';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="relative z-10 mt-12 border-t border-gray-200 dark:border-white/10 rounded-t-3xl shadow-inner pt-12">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-6 pb-10">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 2xl:gap-24 max-w-5xl mx-auto">
          {/* Logo and tagline */}
          <div className="w-full md:max-w-xs flex-shrink-0 text-center md:text-left">
            <a href="#" className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 via-purple-400 to-emerald-400 text-white shadow-lg font-bold text-xl">JY</span>
              <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">James Young</span>
            </a>
            <p className="max-w-xs text-gray-500 dark:text-gray-400 font-inter text-base">
              Leading teams at the intersection of AI, design, and technology—advancing healthcare through innovative digital solutions and strategic vision.
            </p>
          </div>
          {/* Links */}
          <NavLinks layoutClass="flex-1 min-w-0 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left" />
        </div>
      <div className="mt-10 pt-8 pb-3 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-gray-500 dark:text-gray-400 font-inter gap-4">
          <span className="text-sm"> 2025 James Young. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;