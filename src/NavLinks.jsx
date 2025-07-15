import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * NavLinks component renders navigation sections and links for both header and footer.
 * Props:
 * - layoutClass: string of classes for the container (e.g. grid or flex)
 * - onAboutClick: optional handler for About link (for smooth scroll)
 */
const NavLinks = ({ layoutClass = '', onAboutClick }) => {
  const location = useLocation();
  // Helper for About link behavior
  const handleAboutClick = (e) => {
    if (onAboutClick) {
      onAboutClick(e);
    }
  };

  return (
    <div className={`min-w-0 ${layoutClass}`}>
      {/* Portfolio */}
      <div className="w-full text-left">
        <h5 className="font-semibold mb-3 text-gray-800 dark:text-white text-lg 2xl:text-xl">Portfolio</h5>
        <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Home</Link></li>
          <li>
            {location.pathname === '/' ? (
              <a href="#about" onClick={handleAboutClick} className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">About</a>
            ) : (
              <Link to="/#about" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">About</Link>
            )}
          </li>
        </ul>
      </div>
      {/* Case Studies */}
      <div className="w-full text-left">
        <h5 className="font-semibold mb-3 text-gray-800 dark:text-white text-lg 2xl:text-xl">Case Studies</h5>
        <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
          <li><Link to="/case-study/seoc" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">SEOC</Link></li>
          <li><Link to="/case-study/epsi" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">EPSI</Link></li>
          <li><Link to="/case-study/resilience" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Resilience Lab</Link></li>
          <li><Link to="/case-study/pearl" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Pearl Health</Link></li>
          <li><Link to="/case-study/ayva" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Ayva</Link></li>
        </ul>
      </div>
      {/* Connect */}
      <div className="w-full text-left">
        <h5 className="font-semibold mb-3 text-gray-800 dark:text-white text-lg 2xl:text-xl">Connect</h5>
        <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
          <li><a href="mailto:james@jyoungltd.com" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Email</a></li>
          <li><a href="https://www.linkedin.com/in/jamesyoungux/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">LinkedIn</a></li>
          <li><Link to="/resume" className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Resume</Link></li>
        </ul>
      </div>
      {/* Location */}
      <div className="w-full text-left">
        <h5 className="font-semibold mb-3 text-gray-800 dark:text-white text-lg 2xl:text-xl">Location</h5>
        <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-inter">
          <li><span className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors" aria-disabled="true">Orlando FL</span></li>
        </ul>
      </div>
    </div>
  );
};

NavLinks.propTypes = {
  layoutClass: PropTypes.string,
  onAboutClick: PropTypes.func
};

export default NavLinks;
