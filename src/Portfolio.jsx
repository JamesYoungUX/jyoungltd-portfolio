import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Portfolio = () => {
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

  const badgeStyle = {
    borderRadius: '9999px',
    padding: '0.5rem 1rem',
    fontSize: '14px',
    display: 'inline-block',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    cursor: 'pointer'
  };

  return (
    <div className="text-gray-300 transition-colors duration-300" style={{ 
      fontFamily: "'Bricolage Grotesque', sans-serif", 
      margin: 0, 
      overflowX: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-secondary)'
    }}>
      {/* Spline background - only render for non-hero sections */}
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

          {/* Hero Section */}
          <section className="mb-40">
            <h1 className="heading mb-8" style={{
              fontSize: 'clamp(60px, 8vw, 80px)',
              fontWeight: 432,
              letterSpacing: '-0.07em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginLeft: 0,
              paddingLeft: 0
            }}>
              Product designer leader<br/>& AI prompt engineer
            </h1>
            <p className="body-text mb-12" style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 424,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              color: 'var(--text-secondary)',
              marginLeft: 0,
              paddingLeft: 0
            }}>
              At the forefront of healthcare innovation, I guide multidisciplinary teams in shaping AI-powered digital products—strategically aligning form and function to deliver intuitive, impactful solutions for clinicians and patients alike.
            </p>
            <div className="flex space-x-4">
                <a href="#projects" className="border px-6 py-3 rounded-md btn-text hover:bg-gray-200 transition-colors" style={{
                  fontSize: '14px',
                  fontWeight: 560,
                  color: '#000000',
                  background: '#ffffff',
                  borderColor: '#000000'
                }}>
                  View Case Studies
                </a>
                <a href="#contact" className="border px-6 py-3 rounded-md btn-text hover:border-gray-500 transition-colors" style={{
                  fontSize: '14px',
                  fontWeight: 560,
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-primary)'
                }}>
                  Get in Touch
                </a>
            </div>
          </section>

          <div className="divider mb-32" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mb-8 p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#projects" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="body-text hover:text-white transition-colors" 
                  style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}
                >
                  Case Studies
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="body-text hover:text-white transition-colors" 
                  style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="body-text hover:text-white transition-colors" 
                  style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}
                >
                  Contact
                </a>
                <a 
                  href="https://www.linkedin.com/in/jyoung2k/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="body-text hover:text-white transition-colors inline-flex items-center" 
                  style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}
                >
                  LinkedIn
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </nav>
            </div>
          )}

          {/* About Section */}
          <section id="about" className="mb-32">
            <h2 className="subheading mb-8" style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 424,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              color: 'var(--text-primary)'
            }}>About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="body-text mb-6" style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 460,
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)'
                }}>
                  My journey began over 25 years ago, fueled by a fascination with how people interact with technology. Early on, I gravitated toward product and user experience design, but it was within the high-stakes world of healthcare that I found my true calling. For 16 years, I specialized in clinical UX design, working closely with doctors, nurses, and patients to reimagine healthcare systems—transforming convoluted workflows into intuitive, life-improving experiences.
                </p>
                <p className="body-text mb-8" style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 460,
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)'
                }}>
                  In recent years, I've become captivated by the possibilities of artificial intelligence. Over the past 3 years, I've immersed myself in the art and science of prompt engineering, exploring how language models can power the next generation of digital tools.
                </p>
                <p className="body-text mb-8" style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 460,
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)'
                }}>
                  Today, I blend human-centered design principles with cutting-edge AI to craft interfaces that not only solve real problems but also delight users—especially in the healthcare domain. My passion lies in making advanced technology accessible, turning complicated systems into something instinctive and inviting, and always keeping people's needs at the heart of every solution.
                </p>
                
                <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>Skills</h3>
                <div className="mb-8">
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Servant Leadership</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>UX Leadership</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Accessibility</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>AI Prompt Engineering</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Clinical UX Design</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Design Systems</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Healthcare UX</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Product Design</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>Prototyping</span>
                  <span className="skill-badge glass hover-lift" style={badgeStyle}>User Research</span>
                </div>
              </div>
                              <div className="border-gradient p-1" style={{
                  position: 'relative',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                  border: '1px solid transparent'
                }}>
                  <div className="p-6 rounded-md h-full" style={{ background: 'var(--bg-secondary)' }}>
                    <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>Experience</h3>
                    <div className="mb-6">
                      <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Principal Clinical Product Designer</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Veteran Affairs • 2016–Present</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Lead (Staff) User Experience/Architect</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Signify Health/CVS Healthcare • 2023–2025</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Principal User Experience, Director of Product Design</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Resilience Lab • 2022–2023</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Principal Product Designer</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Pearl Health • 2021–2022</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Senior Director User Experience</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Bravado Health • 2017–2021</div>
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Total Experience</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>25 years UX • 16 years Clinical • 3 years AI</div>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          <div className="divider mb-32" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>

          {/* Projects Section */}
          <section id="projects" className="mb-32">
            <h2 className="subheading mb-16" style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 424,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              color: 'var(--text-primary)'
            }}>Case Studies</h2>
            
            <div className="grid grid-cols-1 gap-12">
              {/* Project 1 */}
              <div className="border-gradient p-1" style={{
                position: 'relative',
                borderRadius: '0.5rem',
                background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                border: '1px solid transparent'
              }}>
                <div className="p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="project-image mb-6" style={{
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '0.375rem',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'
                  }}></div>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-medium mb-2 md:mb-0" style={{ color: 'var(--text-primary)' }}>AI Powered Workflow to Enhance Standardized Episodes of Care (SEOC)</h3>
                    <span style={{ color: 'var(--text-tertiary)' }}>AI, Healthcare Innovation • 2024–2025</span>
                  </div>
                  <p className="body-text mb-6" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}>
                    Leading a multidisciplinary team, I architected an intuitive solution streamlining the creation and management of SEOCs, driving both clinical and operational improvements.
                  </p>
                  <Link to="/case-study/seoc" className="btn-text" style={{
                    fontSize: '14px',
                    fontWeight: 560,
                    color: 'var(--text-primary)'
                  }}>
                    View Case Study
                  </Link>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="border-gradient p-1" style={{
                position: 'relative',
                borderRadius: '0.5rem',
                background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                border: '1px solid transparent'
              }}>
                <div className="p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="project-image mb-6" style={{
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '0.375rem',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'
                  }}></div>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-medium mb-2 md:mb-0" style={{ color: 'var(--text-primary)' }}>Nebula Design System</h3>
                    <span style={{ color: 'var(--text-tertiary)' }}>Design System, Front-end • 2022</span>
                  </div>
                  <p className="body-text mb-6" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}>
                    A comprehensive design system created for a suite of enterprise applications. Developed component library with documentation and implemented accessibility standards.
                  </p>
                  <Link to="/case-study/nebula" className="btn-text" style={{
                    fontSize: '14px',
                    fontWeight: 560,
                    color: 'var(--text-primary)'
                  }}>
                    View Case Study
                  </Link>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="border-gradient p-1" style={{
                position: 'relative',
                borderRadius: '0.5rem',
                background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                border: '1px solid transparent'
              }}>
                <div className="p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
                  <div className="project-image mb-6" style={{
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '0.375rem',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'
                  }}></div>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-medium mb-2 md:mb-0" style={{ color: 'var(--text-primary)' }}>Prism 3D Experience</h3>
                    <span style={{ color: 'var(--text-tertiary)' }}>3D Design, Interactive Development • 2022</span>
                  </div>
                  <p className="body-text mb-6" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)'
                  }}>
                    An immersive digital experience blending 3D environments with intuitive user interfaces. Built using Three.js and WebGL to create seamless interactions.
                  </p>
                  <Link to="/case-study/prism" className="btn-text" style={{
                    fontSize: '14px',
                    fontWeight: 560,
                    color: 'var(--text-primary)'
                  }}>
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="divider mb-32" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>





          {/* Contact Section */}
          <section id="contact" className="mb-32">
            <h2 className="subheading mb-8" style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 424,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              color: 'var(--text-primary)'
            }}>Let's connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="body-text mb-8" style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 460,
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)'
                }}>
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <a href="mailto:hello@example.com" className="border px-6 py-3 rounded-md btn-text hover:bg-gray-200 transition-colors inline-block" style={{
                  fontSize: '14px',
                  fontWeight: 560,
                  color: '#000000',
                  background: '#ffffff',
                  borderColor: '#000000'
                }}>
                  Get in Touch
                </a>
              </div>
              <div className="border-gradient p-1" style={{
                position: 'relative',
                borderRadius: '0.5rem',
                background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                border: '1px solid transparent'
              }}>
                <div className="p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
                  <h3 className="text-xl font-medium mb-6" style={{ color: 'var(--text-primary)' }}>Contact Information</h3>
                  <div className="mb-4">
                    <div className="mb-1" style={{ color: 'var(--text-tertiary)' }}>Email</div>
                    <a href="mailto:hello@example.com" style={{ color: 'var(--text-primary)' }}>hello@example.com</a>
                  </div>
                  <div className="mb-4">
                    <div className="mb-1" style={{ color: 'var(--text-tertiary)' }}>Location</div>
                    <div style={{ color: 'var(--text-primary)' }}>Orlando, FL</div>
                  </div>
                  <div>
                    <div className="mb-3" style={{ color: 'var(--text-tertiary)' }}>Social</div>
                    <div className="flex space-x-4">
                      <a href="#" style={{ color: 'var(--text-primary)' }} className="hover:text-gray-300">Twitter</a>
                      <a href="https://www.linkedin.com/in/jyoung2k/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }} className="hover:text-gray-300">LinkedIn</a>
                      <a href="#" style={{ color: 'var(--text-primary)' }} className="hover:text-gray-300">Dribbble</a>
                      <a href="https://github.com/JamesYoungUX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }} className="hover:text-gray-300">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer>
            <div className="divider mb-12" style={{
              height: '1px',
              background: 'linear-gradient(to right, var(--border-secondary), var(--border-primary), var(--border-secondary))'
            }}></div>
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-8 md:mb-0">
                <h3 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>James Young</h3>
                <p className="body-text max-w-xs" style={{
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 460,
                  lineHeight: 1.5,
                  color: 'var(--text-tertiary)'
                }}>
                  Product designer and AI prompt engineer with 25 years of UX experience, specializing in healthcare and emerging technologies.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>Contact</h4>
                  <a href="mailto:hello@example.com" className="body-text block mb-2" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-tertiary)'
                  }}>hello@example.com</a>
                </div>
                <div>
                  <h4 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>Social</h4>
                  <a href="https://www.linkedin.com/in/jyoung2k/" target="_blank" rel="noopener noreferrer" className="body-text block mb-2" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-tertiary)'
                  }}>LinkedIn</a>
                  <a href="https://github.com/JamesYoungUX" target="_blank" rel="noopener noreferrer" className="body-text block" style={{
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 460,
                    lineHeight: 1.5,
                    color: 'var(--text-tertiary)'
                  }}>GitHub</a>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center body-text" style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 460,
              lineHeight: 1.5,
              color: 'var(--text-tertiary)'
            }}>
              © 2025 James Young. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 