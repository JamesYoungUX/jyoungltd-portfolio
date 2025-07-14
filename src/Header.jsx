import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('system');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
    } else {
      root.setAttribute('data-theme', newTheme);
    }
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-24">
        <div className="flex items-center space-x-1">
          <Link to="/" className="font-medium text-xl" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>James Young</Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            onClick={e => {
              // Delay scroll to allow navigation
              setTimeout(() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text"
            style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 460,
              lineHeight: 1.5,
              color: 'var(--text-secondary)'
            }}
          >
            About
          </Link>
          <button
            className="relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text bg-transparent border-none cursor-pointer"
            style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 460,
              lineHeight: 1.5,
              color: 'var(--text-secondary)'
            }}
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const section = document.getElementById('projects');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            Case Studies
          </button>
          <Link to="/resume" className="relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text" style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: 460,
            lineHeight: 1.5,
            color: 'var(--text-secondary)'
          }}>Resume</Link>
          <a href="#contact" className="relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text" style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: 460,
            lineHeight: 1.5,
            color: 'var(--text-secondary)'
          }}>Contact</a>
          <a href="https://www.linkedin.com/in/jyoung2k/" target="_blank" rel="noopener noreferrer" className="relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text" style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: 460,
            lineHeight: 1.5,
            color: 'var(--text-secondary)'
          }}>
            LinkedIn &rarr;
          </a>
          {/* Theme Toggle */}
          <div className="relative">
            <button
              onClick={() => handleThemeChange(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')}
              className="p-2 rounded-md hover:bg-gray-800 transition-colors"
              style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 460,
                lineHeight: 1.5
              }}
            >
              {theme === 'dark' && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              )}
              {theme === 'light' && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              )}
              {theme === 'system' && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => handleThemeChange(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors"
            style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 460,
              lineHeight: 1.5
            }}
          >
            {theme === 'dark' && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
            {theme === 'light' && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
            {theme === 'system' && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            )}
          </button>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors"
            style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 460,
              lineHeight: 1.5
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={toggleMobileMenu} />
          {/* Dropdown Sheet */}
          <div className="absolute left-0 top-0 w-full bg-white dark:bg-black shadow-xl rounded-b-3xl p-8 pt-6 flex flex-col gap-6 animate-slideDown">
            <button
              onClick={toggleMobileMenu}
              className="self-end mb-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-4 mt-2">
              <Link to="/" onClick={toggleMobileMenu} className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-300">Home</Link>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  if (window.location.pathname === '/') {
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    window.location.href = '/#about';
                  }
                }}
                className="text-xl font-semibold text-left hover:text-blue-600 dark:hover:text-blue-300 bg-transparent border-none p-0"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  toggleMobileMenu();
                  setTimeout(() => {
                    const section = document.getElementById('projects');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="text-xl font-semibold text-left hover:text-blue-600 dark:hover:text-blue-300 bg-transparent border-none p-0"
              >
                Case Studies
              </button>
              <Link to="/resume" onClick={toggleMobileMenu} className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-300">Resume</Link>
              <a href="#contact" onClick={toggleMobileMenu} className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-300">Contact</a>
              <a href="https://www.linkedin.com/in/jyoung2k/" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu} className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-300">LinkedIn &rarr;</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 