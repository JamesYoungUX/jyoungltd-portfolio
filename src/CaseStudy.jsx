import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';

const CaseStudy = () => {
  const { id } = useParams();
  const [theme, setTheme] = useState('system');

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

  // Case study data - you can expand this or move to a separate file
  const caseStudies = {
    'aurora': {
      title: 'Aurora - Web Platform',
      subtitle: 'UI/UX Design, Development • 2023',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A complete redesign of a financial platform with focus on data visualization and intuitive workflows. Created responsive interfaces and implemented with React and Tailwind CSS.',
      content: `
        <h2>Project Overview</h2>
        <p>Aurora was a comprehensive redesign of a financial platform that needed to handle complex data visualization while maintaining intuitive user workflows.</p>
        
        <h2>Challenge</h2>
        <p>The existing platform was difficult to navigate and lacked proper data visualization tools. Users struggled with complex financial workflows and data interpretation.</p>
        
        <h2>Process</h2>
        <p>I conducted extensive user research to understand pain points, created wireframes and prototypes, and implemented the final design using React and Tailwind CSS.</p>
        
        <h2>Outcome</h2>
        <p>The redesigned platform improved user satisfaction by 40% and reduced task completion time by 60%.</p>
      `
    },
    'nebula': {
      title: 'Nebula Design System',
      subtitle: 'Design System, Front-end • 2022',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive design system created for a suite of enterprise applications. Developed component library with documentation and implemented accessibility standards.',
      content: `
        <h2>Project Overview</h2>
        <p>Nebula was a comprehensive design system created to ensure consistency across multiple enterprise applications.</p>
        
        <h2>Challenge</h2>
        <p>Multiple teams were creating inconsistent interfaces, leading to poor user experience and increased development time.</p>
        
        <h2>Process</h2>
        <p>I audited existing components, created a unified design language, and developed a comprehensive component library with documentation.</p>
        
        <h2>Outcome</h2>
        <p>The design system reduced development time by 50% and improved design consistency across all applications.</p>
      `
    },
    'prism': {
      title: 'Prism 3D Experience',
      subtitle: '3D Design, Interactive Development • 2022',
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'An immersive digital experience blending 3D environments with intuitive user interfaces. Built using Three.js and WebGL to create seamless interactions.',
      content: `
        <h2>Project Overview</h2>
        <p>Prism was an immersive 3D experience that combined interactive environments with intuitive user interfaces.</p>
        
        <h2>Challenge</h2>
        <p>Creating a seamless experience between 3D environments and traditional UI elements while maintaining performance.</p>
        
        <h2>Process</h2>
        <p>I designed the user interface to complement the 3D environment, ensuring smooth transitions and intuitive interactions.</p>
        
        <h2>Outcome</h2>
        <p>The experience received positive feedback for its innovative approach to blending 3D and UI design.</p>
      `
    }
  };

  const caseStudy = caseStudies[id];

  if (!caseStudy) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ 
        fontFamily: "'Bricolage Grotesque', sans-serif", 
        margin: 0, 
        overflowX: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)'
      }}>
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 style={{ color: 'var(--text-primary)' }}>Case Study Not Found</h1>
            <p style={{ color: 'var(--text-secondary)' }}>The case study you're looking for doesn't exist.</p>
            <Link to="/" style={{ color: 'var(--text-primary)' }}>← Back to Portfolio</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ 
      fontFamily: "'Bricolage Grotesque', sans-serif", 
      margin: 0, 
      overflowX: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-secondary)'
    }}>
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <Header />
        {/* Case Study Content */}
        <article>
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="mb-8" style={{
              fontSize: 'clamp(48px, 6vw, 64px)',
              fontWeight: 432,
              letterSpacing: '-0.07em',
              lineHeight: 1.1,
              color: 'var(--text-primary)'
            }}>
              {caseStudy.title}
            </h1>
            <p className="mb-8" style={{
              fontSize: 'clamp(18px, 3vw, 24px)',
              fontWeight: 424,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              color: 'var(--text-tertiary)'
            }}>
              {caseStudy.subtitle}
            </p>
            <p className="mb-12" style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              fontWeight: 460,
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '60rem'
            }}>
              {caseStudy.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-16">
            <div style={{
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0.5rem',
              backgroundImage: `url("${caseStudy.image}")`
            }}></div>
          </div>

          {/* Case Study Content */}
          <div className="prose prose-lg max-w-none" style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 1.7
          }}>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default CaseStudy; 