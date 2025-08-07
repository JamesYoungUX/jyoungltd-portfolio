import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // DRY header nav links array
  const headerLinks = [
    {
      type: 'link',
      label: 'About',
      to: '/#about',
      className: 'relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text text-base font-semibold leading-6 text-secondary',
      onClick: (e) => {
        if (location.pathname === '/' && location.hash !== '#about') {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    },
    {
      type: 'link',
      label: 'AI Expertise',
      to: '/#ai-expertise',
      className: 'relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text text-base font-semibold leading-6 text-secondary',
      onClick: (e) => {
        if (location.pathname === '/' && location.hash !== '#ai-expertise') {
          e.preventDefault();
          const aiSection = document.getElementById('ai-expertise');
          if (aiSection) {
            aiSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    },
    {
      type: 'button',
      label: 'Case Studies',
      className: 'relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text bg-transparent cursor-pointer text-base font-semibold leading-6 text-secondary',
      onClick: () => {
        navigate('/');
        
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const section = document.getElementById('case-studies');
          if (section) {
            // Check if smooth scrolling is supported
            const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
            
            if (supportsSmoothScroll) {
              // Use smooth scroll if supported
              const rect = section.getBoundingClientRect();
              const scrollTop = window.pageYOffset + rect.top - 100;
              
              window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
              });
            } else {
              // Fallback for browsers that don't support smooth scroll
              section.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
              });
            }
          }
        }, 300);
      }
    },
    {
      type: 'link',
      label: 'Resume',
      to: '/resume',
      className: 'relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text text-base font-semibold leading-6 text-secondary'
    },
    {
      type: 'anchor',
      label: 'Contact',
      href: '#contact',
      className: 'relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text text-base font-semibold leading-6 text-secondary'
    },
    {
      type: 'link',
      label: 'LinkedIn →',
      to: 'https://www.linkedin.com/in/jyoung2k/',
      className: 'relative pb-1 border-b-2 border-transparent hover:border-current transition-all duration-200 body-text text-base font-semibold leading-6 text-secondary',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ];

  return (
    <>
      <header className="flex items-center mb-24">
        <div className="flex items-center space-x-1 flex-shrink-0">
          <Link to="/" className="no-underline" aria-label="Home">
            <img 
              src="/James Young_black.png" 
              alt="James Young" 
              className="h-11 w-auto"
              style={{ filter: 'var(--logo-filter)' }}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center min-w-0">
          <nav className="hidden md:flex items-center space-x-8 mr-2">
            {headerLinks.map(link => {
              if (link.type === 'link') {
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={link.className}
                    target={link.target}
                    rel={link.rel}
                    onClick={link.onClick}
                  >
                    {link.label}
                  </Link>
                );
              } else if (link.type === 'button') {
                return (
                  <button
                    key={link.label}
                    className={link.className}
                    onClick={link.onClick}
                  >
                    {link.label}
                  </button>
                );
              } else if (link.type === 'anchor') {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={link.className}
                    target={link.target}
                    rel={link.rel}
                    onClick={link.onClick}
                  >
                    {link.label}
                  </a>
                );
              }
              return null;
            })}
            <button
              onClick={() => handleThemeChange(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')}
              className="p-2 rounded-md hover:bg-gray-800 transition-colors ml-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' && (
                <svg
                  className="w-5 h-5"
                  style={{ stroke: '#fff', filter: 'drop-shadow(0 0 4px #fff)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              )}
              {theme === 'light' && (
                <svg
                  className="w-5 h-5 text-gray-900 dark:text-white"
                  style={{ filter: theme === 'light' ? '' : 'drop-shadow(0 0 4px #fff)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              )}
              {theme === 'system' && (
                <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => handleThemeChange(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')}
            className="p-2 rounded-md hover:bg-gray-800 transition-colors text-base font-semibold leading-6"
            aria-label="Toggle theme"
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
            className="p-2 rounded-md hover:bg-gray-800 transition-colors text-base font-semibold leading-6"
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
          <div className="mobile-menu-dropdown absolute left-0 top-0 w-full bg-white dark:bg-gray-900 shadow-xl rounded-b-3xl p-8 pt-6 flex flex-col gap-6 animate-slideDown">
            <button
              onClick={toggleMobileMenu}
              className="self-end mb-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Mobile nav links (same as header, not footer) */}
            <nav className="flex flex-col gap-4 mt-2">
              {headerLinks.map(link => {
                if (link.type === 'link') {
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-300"
                      target={link.target}
                      rel={link.rel}
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  );
                } else if (link.type === 'button') {
                  return (
                    <button
                      key={link.label}
                      className="text-xl font-semibold text-left hover:text-blue-600 dark:hover:text-blue-300 bg-transparent border-none p-0"
                      onClick={() => {
                        link.onClick();
                        toggleMobileMenu();
                      }}
                    >
                      {link.label}
                    </button>
                  );
                } else if (link.type === 'anchor') {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-300"
                      target={link.target}
                      rel={link.rel}
                      onClick={e => {
                        if (link.onClick) link.onClick(e);
                        toggleMobileMenu();
                      }}
                    >
                      {link.label}
                    </a>
                  );
                }
                return null;
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;