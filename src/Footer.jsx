import React from 'react';

const Footer = () => (
  <footer className="relative z-10 bg-white dark:bg-black/90 mt-12 border-t border-gray-200 dark:border-white/10 rounded-t-3xl shadow-inner pt-12">
    <div className="max-w-7xl mx-auto px-6 pb-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Logo and tagline */}
        <div>
          <a href="#" className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 via-purple-400 to-emerald-400 text-white shadow-lg font-bold text-xl">JY</span>
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">James Young</span>
          </a>
          <p className="max-w-xs text-gray-500 dark:text-gray-400 font-inter text-base">
            Portfolio of James Young – building intelligent, modern web experiences with a focus on healthcare, design, and strategy.
          </p>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto">
          <div>
            <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Portfolio</h5>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
              <li><a href="/" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Case Studies</h5>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
              <li><a href="/case-study/seoc" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">SEOC</a></li>
              <li><a href="/case-study/epsi" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">EPSI</a></li>
              <li><a href="/case-study/resilience" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Resilience Lab</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Connect</h5>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
              <li><a href="mailto:james@jyoung.co" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/jamesyoungux/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">LinkedIn</a></li>
              <li><a href="/resume" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Resume</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Location</h5>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Orlando FL</a></li>
              
            </ul>
          </div>
        </div>
      </div>
     
      {/* Copyright and Mode */}
      <div className="mt-10 pt-8 pb-3 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-gray-500 dark:text-gray-400 font-inter gap-4">
        <span className="text-sm">© 2025 James Young. All rights reserved.</span>
      </div>
    </div>
  </footer>

)

export default Footer; 