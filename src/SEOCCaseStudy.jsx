import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const SEOCCaseStudy = () => {
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
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>/</li>
              <li className="text-white">SEOC Case Study</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            AI Powered Workflow to Enhance Standardized Episodes of Care (SEOC)
          </h1>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            Leading a multidisciplinary team, I architected an intuitive solution streamlining the creation and management of SEOCs, driving both clinical and operational improvements.
          </p>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            As part of a multidisciplinary team focused on Standardized Episodes of Care (SEOCs), I was tasked with developing digital solutions that would both streamline provider workflows and prioritize efficient workflows. SEOCs are integral in ensuring evidence-based, consistent care across diverse patient populations, but translating their complexity into daily practice presents a challenge—particularly in digital environments.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Problem</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              [Describe the challenge or pain point that motivated this project.]
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Solution</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              [Summarize the solution you designed and its key features.]
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Process</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              [Outline your design process, research, prototyping, collaboration, and iterations.]
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Results</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              [Share the outcomes, impact, and any metrics or feedback.]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SEOCCaseStudy; 