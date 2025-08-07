import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from './ThemeProvider';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  useTheme();
  const [activeTheme, setActiveTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'system');
  const location = useLocation();

  // Fetch case studies from Firestore
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const db = getFirestore();
        const caseStudiesCollection = collection(db, 'caseStudies');
        const snapshot = await getDocs(caseStudiesCollection);
        
        const studies = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || '',
            company: data.company || '',
            description: data.intro || '', // Using intro as description for home page
            link: `/case-study/${doc.id}`,
            image: data.image || '',
            tags: data.tags || [], // Ensure tags is always an array
            year: data.details?.timeline || '',
            hidden: data.hidden || false, // Track hidden flag
            featured: data.featured || false, // Track featured flag
          };
        }).filter(study => !study.hidden) // Filter out hidden case studies
          .sort((a, b) => {
            // Sort featured case studies first
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            
            // For non-featured case studies, sort by end year (second date in timeline)
            if (!a.featured && !b.featured) {
              const getEndYear = (timeline) => {
                if (!timeline) return 0;
                const parts = timeline.split('–');
                if (parts.length > 1) {
                  return parseInt(parts[1]) || 0;
                }
                return parseInt(timeline) || 0;
              };
              
              const aEndYear = getEndYear(a.year);
              const bEndYear = getEndYear(b.year);
              
              // Sort by end year (newest first)
              return bEndYear - aEndYear;
            }
            
            return a.title.localeCompare(b.title);
          });
        
        setCaseStudies(studies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // Remove local theme management, rely on context

  // MutationObserver to track data-theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setActiveTheme(document.documentElement.getAttribute('data-theme') || 'system');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    // Set initial value
    setActiveTheme(document.documentElement.getAttribute('data-theme') || 'system');
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, caseStudies]); // Added caseStudies dependency

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // badgeStyle moved to CSS class .skill-badge

  // Helper to determine if dark mode is active
  const isDarkMode = activeTheme === 'dark';

  // Get featured and other case studies
  const featured = caseStudies[0];
  const others = caseStudies.slice(1);

  // Show loading state
  if (loading) {
    return (
      <div className="text-gray-300 transition-colors duration-300 font-bricolage m-0 overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
        <div className="content min-h-screen transition-colors duration-300 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-tertiary)] relative z-10">
          <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-16">
            <Header />
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-lg">Loading case studies...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-300 transition-colors duration-300 font-bricolage m-0 overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
      <Helmet>
        <title>James Young | Product Design Leader & AI Prompt Engineer</title>
        <meta name="description" content="At the forefront of healthcare innovation, James Young leads multidisciplinary teams in shaping AI-powered digital products—delivering intuitive, impactful solutions for clinicians and patients alike." />
        <meta property="og:title" content="James Young | Product Design Leader & AI Prompt Engineer" />
        <meta property="og:description" content="At the forefront of healthcare innovation, James Young leads multidisciplinary teams in shaping AI-powered digital products—delivering intuitive, impactful solutions for clinicians and patients alike." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jyoungltd.com/" />
        <meta property="og:image" content="https://jyoungltd.com/Framework_for_Innovation_transparent.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="James Young | Product Design Leader & AI Prompt Engineer" />
        <meta name="twitter:description" content="At the forefront of healthcare innovation, James Young leads multidisciplinary teams in shaping AI-powered digital products—delivering intuitive, impactful solutions for clinicians and patients alike." />
        <meta name="twitter:image" content="https://jyoungltd.com/Framework_for_Innovation_transparent.png" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "James Young Portfolio",
          "url": "https://jyoungltd.com",
          "description": "Portfolio of James Young, a product design leader and AI prompt engineer specializing in healthcare innovation.",
          "author": {
            "@type": "Person",
            "name": "James Young",
            "jobTitle": "Product Design Leader & AI Prompt Engineer",
            "url": "https://jyoungltd.com",
            "sameAs": ["https://www.linkedin.com/in/jyoung2k/"]
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://jyoungltd.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": "https://jyoungltd.com"
              }
            ]
          }
        })}
        </script>
      </Helmet>
      {/* Remove debug bar */}
      {/* Spline background - only render for dark mode or system dark */}
      {isDarkMode ? (
        <div className="spline-container" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <iframe 
            src='https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/' 
            frameBorder='0' 
            width='100%'
            height='100%'
            title="Background Animation"
            aria-hidden="true"
          />
        </div>
      ) : null}
      <div className="content min-h-screen transition-colors duration-300 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-tertiary)] relative z-10">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <section className="mb-40">
            <h1 className="heading mb-8 text-primary ml-0 pl-0">Product design leader<br/>& AI prompt engineer</h1>
            <p className="hero-subtext mb-12 ml-0 pl-0">At the forefront of healthcare innovation, I guide multidisciplinary teams in shaping AI-powered digital products—strategically aligning form and function to deliver intuitive, impactful solutions for clinicians and patients alike.</p>
            <div className="flex space-x-4">
                <a href="#case-studies" className="border px-6 py-3 rounded-md btn-text hover:bg-gray-200 transition-colors" style={{
                  fontSize: '14px',
                  fontWeight: 560,
                  color: '#000000',
                  background: '#ffffff',
                  borderColor: '#000000'
                }}
                  onClick={e => {
                    e.preventDefault();
                    const section = document.getElementById('case-studies');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
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
                  href="#case-studies" 
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
            <h2 className="subheading mb-8 text-primary">About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="body-text mb-6">
                  My journey began over 25 years ago, driven by a deep curiosity about how people interact with technology. I quickly found my way into product and user experience design, but it was within the complex, high-stakes world of healthcare that I discovered where I could make the most impact. For the past 16 years, I&apos;ve led clinical UX initiatives, partnering closely with clinicians and patients to rethink outdated systems and deliver intuitive, life-improving digital experiences.
                </p>
                <p className="body-text mb-8">
                  As a design leader, I&apos;ve built and guided cross-functional teams, shaped product strategy, and helped organizations navigate large-scale transformation efforts—from spinning up new design teams to modernizing legacy healthcare platforms to introducing human-centered design at scale across federal agencies.
                </p>
                <p className="body-text mb-8">
                  In recent years, my focus has expanded to include the rapidly evolving space of artificial intelligence. Over the past 3 years, I&apos;ve immersed myself in prompt engineering and conversational design, exploring how language models can extend the reach of thoughtful design and unlock new modes of interaction.
                </p>
                <p className="body-text mb-8">
                  Today, I bring together human-centered design and emerging AI capabilities to lead the creation of tools that are not only intelligent and efficient, but deeply usable and humane. My passion is building experiences that simplify the complex, empower users, and elevate the standard for what digital healthcare can be.
                </p>
                
                <h3 className="text-xl font-medium mb-4 text-primary">Skills</h3>
                <div className="mb-8 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-2 md:justify-start">
                  <span className="skill-badge glass hover-lift">Servant Leadership</span>
                  <span className="skill-badge glass hover-lift">UX Leadership</span>
                  <span className="skill-badge glass hover-lift">Accessibility</span>
                  <span className="skill-badge glass hover-lift">AI Prompt Engineering</span>
                  <span className="skill-badge glass hover-lift">Clinical UX Design</span>
                  <span className="skill-badge glass hover-lift">Design Systems</span>
                  <span className="skill-badge glass hover-lift">Healthcare UX</span>
                  <span className="skill-badge glass hover-lift">Product Design</span>
                  <span className="skill-badge glass hover-lift">Prototyping</span>
                  <span className="skill-badge glass hover-lift">User Research</span>
                </div>
              </div>
                              <div className="border-gradient p-1" style={{
                  position: 'relative',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                  border: '1px solid transparent'
                }}>
                  <div className="p-6 rounded-md h-full flex flex-col" style={{ background: 'var(--bg-secondary)' }}>
                    <h3 className="text-xl font-medium mb-4 text-primary">Experience</h3>
                    <div className="mb-6">
                      <div className="font-medium text-primary">Principal Clinical Product Designer</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Veteran Affairs • 2016–Present</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium text-primary">Lead (Staff) User Experience/Architect</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Signify Health/CVS Healthcare • 2023–2025</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium text-primary">Principal User Experience, Director of Product Design</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Resilience Lab • 2022–2023</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium text-primary">Principal Product Designer</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Pearl Health • 2021–2022</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium text-primary">Senior Director User Experience</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>Bravado Health • 2017–2021</div>
                    </div>
                    <div className="mb-6">
                      <div className="font-medium text-primary">Total Experience</div>
                      <div style={{ color: 'var(--text-tertiary)' }}>25 years UX • 16 years Clinical UX • 3 years AI</div>
                    </div>
                    <div className="mt-auto">
                      <Link to="/resume" className="inline-block text-blue-600 hover:text-blue-700 transition-colors text-base font-medium underline text-center w-full">
                        View Full Resume →
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          <div className="divider mb-32" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>

          {/* AI & Technical Expertise Section */}
          <section id="ai-expertise" className="mb-32">
            <h2 className="subheading mb-16 text-primary">AI & Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-gradient p-1 rounded-lg" style={{
                position: 'relative',
                borderRadius: '0.5rem',
                background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                border: '1px solid transparent',
                minHeight: 420,
                textDecoration: 'none'
              }}>
                <div className="p-6 rounded-md h-full flex flex-col" style={{ background: 'var(--bg-secondary)' }}>
                  <h3 className="text-xl font-medium mb-4 text-primary">AI Prompt Engineering</h3>
                  <p className="body-text mb-6">
                    I specialize in crafting precise, context-aware prompts that enable large language models (LLMs) to perform complex tasks and generate high-quality, coherent responses. My expertise includes:
                  </p>
                  <ul className="list-disc list-inside mb-6">
                    <li>Prompt design for various LLM applications (e.g., summarization, code generation, creative writing)</li>
                    <li>Optimization of prompt efficiency and effectiveness</li>
                    <li>Design of multi-step prompt chains for complex workflows</li>
                    <li>Evaluation and refinement of prompt outputs</li>
                  </ul>
                                     <p className="body-text">
                     I have experience working with models like GPT-4, Claude, and LLaMA, and have successfully applied these techniques to projects ranging from healthcare documentation to design libraries and documentation.
                   </p>
                </div>
              </div>
                             <div className="border-gradient p-1 rounded-lg" style={{
                 position: 'relative',
                 borderRadius: '0.5rem',
                 background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                 border: '1px solid transparent',
                 minHeight: 420,
                 textDecoration: 'none'
               }}>
                 <div className="p-6 rounded-md h-full flex flex-col" style={{ background: 'var(--bg-secondary)' }}>
                   <h3 className="text-xl font-medium mb-4 text-primary">Product Design Leadership</h3>
                   <p className="body-text mb-6">
                     My experience spans the full spectrum of product design leadership, from strategic vision to hands-on design work, with particular expertise in healthcare and emerging technologies.
                   </p>
                   <ul className="list-disc list-inside mb-6">
                     <li>Strategic product vision and design strategy development</li>
                     <li>Design system creation and governance across large organizations</li>
                     <li>User research methodologies and design thinking processes</li>
                     <li>Cross-functional team leadership and stakeholder management</li>
                   </ul>
                   <p className="body-text">
                     This enables me to guide teams in creating products that are both innovative and deeply user-focused, whether they incorporate AI or other emerging technologies.
                   </p>
                 </div>
               </div>
            </div>
          </section>

          <div className="divider mb-32" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>

          {/* Case Studies Section */}
          <section id="case-studies" className="mb-32">
            <h2 className="subheading mb-16 text-primary">Case Studies</h2>
            {/* Featured Case Study */}
            <Link
              to={featured.link}
              className="block border-gradient p-1 rounded-lg mb-12 flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--border-primary)]"
              style={{
                position: 'relative',
                borderRadius: '0.5rem',
                background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                border: '1px solid transparent',
                minHeight: 420,
                textDecoration: 'none'
              }}
              tabIndex={0}
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
                  <h2 className="text-xl font-medium mb-2 md:mb-0 text-primary" style={{ minHeight: '3rem' }}>{featured.title}</h2>
                </div>
                {/* Featured Case Study tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {featured.tags && featured.tags.map((tag, i) => (
                    <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase" style={{
                      backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 85%)`,
                      color: `hsl(${(i * 137.5) % 360}, 70%, 25%)`,
                      border: `1px solid hsl(${(i * 137.5) % 360}, 70%, 75%)`
                    }}>{tag}</span>
                  ))}
                </div>
                <div className="body-text mb-6 flex-1" dangerouslySetInnerHTML={{ __html: featured.description }} />
                <div className="flex items-center justify-between mt-auto">
                  <span className="btn-text" style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.01em',
                    marginRight: '1.5rem'
                  }}>
                    View Case Study
                  </span>
                  <div className="flex flex-col items-end">
                    <span style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, letterSpacing: '0.01em' }}>{featured.company}</span>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '15px', fontWeight: 500 }}>{featured.year}</span>
                  </div>
                </div>
              </div>
            </Link>
            {/* Remaining Case Studies in 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {others.map((cs, idx) => (
                <Link
                  key={idx}
                  to={cs.link}
                  className="block border-gradient p-1 rounded-lg h-full flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--border-primary)]"
                  style={{
                    position: 'relative',
                    borderRadius: '0.5rem',
                    background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(90deg, var(--border-primary), var(--border-secondary)) border-box',
                    border: '1px solid transparent',
                    minHeight: 420,
                    textDecoration: 'none'
                  }}
                  tabIndex={0}
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
                      <h3 className="text-xl font-medium mb-2 md:mb-0 text-primary" style={{ minHeight: '3rem' }}>{cs.title}</h3>
                    </div>
                    {/* Other Case Studies tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.tags && cs.tags.map((tag, i) => (
                        <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase" style={{
                          backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 85%)`,
                          color: `hsl(${(i * 137.5) % 360}, 70%, 25%)`,
                          border: `1px solid hsl(${(i * 137.5) % 360}, 70%, 75%)`
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div className="body-text mb-6 flex-1 min-h-[80px]" dangerouslySetInnerHTML={{ __html: cs.description }} />
                    <div className="flex items-center justify-between mt-auto">
                      <span className="btn-text" style={{
                        fontSize: '14px',
                        fontWeight: 560,
                        color: 'var(--text-primary)'
                      }}>
                        View Case Study
                      </span>
                      <div className="flex flex-col items-end">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '13px', fontWeight: 500, marginLeft: '1rem' }}>{cs.company}</span>
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '13px', fontWeight: 400 }}>{cs.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="divider mb-32" style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,255,255,0.1), rgba(255,255,255,0.01))'
          }}></div>





          {/* Footer */}
          <Footer />
          {/* Back to Top Button */}
          {showTopBtn && (
            <button
              onClick={handleScrollToTop}
              aria-label="Back to top"
              className="fixed bottom-8 right-8 z-50 bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-primary)] rounded-full shadow-lg p-3 transition-opacity duration-300 hover:bg-[var(--bg-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-primary)]"
              style={{ opacity: showTopBtn ? 1 : 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 