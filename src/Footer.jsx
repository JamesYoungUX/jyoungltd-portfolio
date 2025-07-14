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
            <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Company</h5>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
              <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Legal</h5>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Newsletter & Social */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 dark:border-white/10 mt-10 pt-8 gap-8">
        <form className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <label htmlFor="email-newsletter" className="sr-only">Subscribe to newsletter</label>
          <input id="email-newsletter" type="email" required placeholder="Your email address" className="min-w-0 w-full sm:w-64 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-900 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          <button type="submit" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-100 dark:shadow-blue-900">
            Subscribe
          </button>
        </form>
        <div className="flex space-x-3">
          <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 transition">
            {/* Twitter SVG */}
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016.11 0C13.32 0 11 2.43 11 5.5v1A11.64 11.64 0 013.13 1.82a4.51 4.51 0 001.39 6c-.91 0-1.8-.28-2.56-.69v.07A4.52 4.52 0 004.49 12a4.53 4.53 0 01-2.55.09A4.52 4.52 0 006.67 16a9.06 9.06 0 01-5.56 1.92c-.36 0-.71-.02-1.07-.07A12.88 12.88 0 007.29 21c8.129 0 12.583-6.741 12.583-12.584 0-.19-.004-.378-.013-.566A9.22 9.22 0 0023 3z"/></svg>
          </a>
          <a href="#" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 transition">
            {/* GitHub SVG */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.57v-2c-3.34.72-4-1.61-4-1.61a3.15 3.15 0 00-1.34-1.76c-1.1-.75.09-.74.09-.74a2.5 2.5 0 011.8 1.21 2.54 2.54 0 003.49 1A2.53 2.53 0 019 17.43c-2.66-.3-5.47-1.34-5.47-5.93A4.62 4.62 0 015.13 7.2a4.29 4.29 0 01.12-3.18s1-.33 3.21 1.23a11.22 11.22 0 015.84 0C16.92 3.69 17.91 4 17.91 4a4.29 4.29 0 01.12 3.18 4.62 4.62 0 011.23 3.21c0 4.59-2.81 5.63-5.48 5.93a2.86 2.86 0 01.81 2.22v3.29c0 .32.22.68.83.57A12 12 0 0012 0"/></svg>
          </a>
          <a href="#" aria-label="Discord" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 transition">
            {/* Discord SVG */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.317 4.369A19.791 19.791 0 0016.885 3.19a.112.112 0 00-.119.056c-.523.958-.993 1.933-1.406 2.893-1.006-.151-2.006-.227-3.006-.227-1 0-2 .076-2.997.227-.413-.96-.884-1.935-1.406-2.893a.115.115 0 00-.119-.056c-3.432 1.023-6.484 2.636-9.433 4.545a.118.118 0 00-.051.167c3.981 6.584 9.523 10.925 16.569 10.925 1 0 2-.09 2.972-.243.499-.082.994-.176 1.481-.282a.116.116 0 00.083-.129c.01-.065.015-.131.015-.198v-4.12c0-7.034-7.438-12.737-16.569-12.737zm-11.33 7.435a2.067 2.067 0 012.066-2.066 2.067 2.067 0 012.066 2.066 2.067 2.067 0 01-2.066 2.066 2.067 2.067 0 01-2.066-2.066zm7.325 0a2.067 2.067 0 012.066-2.066 2.067 2.067 0 012.066 2.066 2.067 2.067 0 01-2.066 2.066 2.067 2.067 0 01-2.066-2.066z"/></svg>
          </a>
        </div>
      </div>
      {/* Copyright and Mode */}
      <div className="mt-10 pt-8 pb-3 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-gray-500 dark:text-gray-400 font-inter gap-4">
        <span className="text-sm">© 2024 James Young. All rights reserved.</span>
      </div>
    </div>
  </footer>

)

export default Footer; 