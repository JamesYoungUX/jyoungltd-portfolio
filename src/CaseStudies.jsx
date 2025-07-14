import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const caseStudies = [
  {
    title: 'AI Powered Workflow to Enhance Standardized Episodes of Care (SEOC)',
    description: 'A design framework for building and deploying new SEOCs, accelerating innovation and improving patient care delivery.',
    link: '/case-study/seoc',
  },
  {
    title: 'Nebula Design System',
    description: 'A comprehensive design system for enterprise healthcare applications, focused on accessibility and scalability.',
    link: '/case-study/nebula',
  },
  {
    title: 'Prism 3D Experience',
    description: 'An immersive digital experience blending 3D environments with intuitive user interfaces.',
    link: '/case-study/prism',
  },
  // Add more case studies here as needed
];

const featured = caseStudies[0];
const others = caseStudies.slice(1);

const CaseStudies = () => {
  const [theme, setTheme] = useState('system');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="text-gray-300 transition-colors duration-300" style={{
      fontFamily: "'Bricolage Grotesque', sans-serif",
      margin: 0,
      overflowX: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-secondary)'
    }}>
      <div className="content min-h-screen transition-colors duration-300" style={{
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-tertiary))'
      }}>
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-16">
          {/* Header */}
          <Header />
          <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Case Studies
          </h1>
          <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
            Explore a selection of my work, spanning healthcare innovation, design systems, and digital product experiences.
          </p>
          {/* Featured Case Study */}
          <div className="border-gradient p-1 rounded-lg mb-12">
            <div className="p-8 md:p-12 rounded-md h-full flex flex-col md:flex-row items-center md:items-start" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{featured.title}</h2>
                <p className="mb-6 text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>{featured.description}</p>
                <Link to={featured.link} className="btn-text" style={{ color: 'var(--text-primary)' }}>
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
          {/* Remaining Case Studies in 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((cs, idx) => (
              <div key={idx} className="border-gradient p-1 rounded-lg h-full flex flex-col">
                <div className="p-6 rounded-md h-full flex flex-col" style={{ background: 'var(--bg-secondary)' }}>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{cs.title}</h2>
                  <p className="mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>{cs.description}</p>
                  <Link to={cs.link} className="btn-text mt-auto" style={{ color: 'var(--text-primary)' }}>
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 