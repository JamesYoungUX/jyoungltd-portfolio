import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const caseStudies = [
  {
    title: 'AI Powered Workflow to Enhance Standardized Episodes of Care (SEOC)',
    description: 'Leading a multidisciplinary team, I architected an intuitive solution streamlining the creation and management of SEOCs, driving both clinical and operational improvements.',
    link: '/case-study/seoc',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Healthcare Innovation'],
    year: '2024–2025',
  },
  {
    title: 'Nebula Design System',
    description: 'A comprehensive design system created for a suite of enterprise applications. Developed component library with documentation and implemented accessibility standards.',
    link: '/case-study/nebula',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Design System', 'Front-end'],
    year: '2022',
  },
  {
    title: 'Prism 3D Experience',
    description: 'An immersive digital experience blending 3D environments with intuitive user interfaces. Built using Three.js and WebGL to create seamless interactions.',
    link: '/case-study/prism',
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['3D Design', 'Interactive Development'],
    year: '2022',
  },
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
      {/* Optional: Spline background animation for extra polish */}
      <div className="spline-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <iframe 
          src='https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="Background Animation"
        />
      </div>
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
            Discover how I lead teams to deliver transformative healthcare solutions, robust design systems, and next-generation digital products—powered by AI and advanced prompt engineering.
          </p>
          <div className="divider mb-16" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>
          {/* Featured Case Study */}
          <div
            className="border-gradient p-1 rounded-lg mb-12 flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            style={{
              position: 'relative',
              borderRadius: '0.5rem',
              background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
              border: '1px solid transparent',
              minHeight: 420
            }}
          >
            <div className="p-6 rounded-md flex flex-col h-full" style={{ background: 'var(--bg-secondary)' }}>
              <div
                className="project-image mb-6"
                style={{
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '0.375rem',
                  backgroundImage: `url('${featured.image}')`
                }}
              ></div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h2 className="text-xl font-medium mb-2 md:mb-0" style={{ color: 'var(--text-primary)' }}>{featured.title}</h2>
                <span style={{ color: 'var(--text-tertiary)' }}>{featured.tags.join(', ')} • {featured.year}</span>
              </div>
              <p className="body-text mb-6 flex-1" style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 460,
                lineHeight: 1.5,
                color: 'var(--text-secondary)'
              }}>
                {featured.description}
              </p>
              <Link to={featured.link} className="btn-text mt-auto" style={{
                fontSize: '14px',
                fontWeight: 560,
                color: 'var(--text-primary)'
              }}>
                View Case Study
              </Link>
            </div>
          </div>
          {/* Remaining Case Studies in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {others.map((cs, idx) => (
              <div
                key={idx}
                className="border-gradient p-1 rounded-lg h-full flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  position: 'relative',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                  border: '1px solid transparent',
                  minHeight: 420
                }}
              >
                <div className="p-6 rounded-md flex flex-col h-full" style={{ background: 'var(--bg-secondary)' }}>
                  <div
                    className="project-image mb-6"
                    style={{
                      height: '200px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '0.375rem',
                      backgroundImage: `url('${cs.image}')`
                    }}
                  ></div>
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-medium mb-2 md:mb-0" style={{ color: 'var(--text-primary)' }}>{cs.title}</h3>
                    <span style={{ color: 'var(--text-tertiary)' }}>{cs.tags.join(', ')} • {cs.year}</span>
                  </div>
                  <p className="body-text mb-6 flex-1" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}>
                    {cs.description}
                  </p>
                  <Link to={cs.link} className="btn-text mt-auto" style={{
                    fontSize: '14px',
                    fontWeight: 560,
                    color: 'var(--text-primary)'
                  }}>
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