import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
// Import Firestore from Firebase client SDK
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// NOTE: Make sure Firebase is initialized in your app before using this component.
// import '../firebase'; // <-- Uncomment and set up your Firebase initialization if not already done

const SECTION_KEYS = [
  'Project Overview',
  'Challenge',
  'Approach',
  'Process',
  'Key Solutions',
  'Reflections'
];

const CaseStudyTemplate = ({ id }) => {
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, 'caseStudies', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCaseStudy(docSnap.data());
        } else {
          setError('Case study not found.');
        }
      } catch (err) {
        setError('Error fetching case study.');
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudy();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!caseStudy) return null;

  const { title, company, tags = [], intro, image, details = {}, sections = {} } = caseStudy;
  const {
    teamMembers = '',
    methodologies = '',
    platform = '',
    role = '',
    timeline = ''
  } = details;

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
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-16">
          <Header />
          <h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h1>
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-4 mt-2">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase" style={{
                    backgroundColor: `hsl(${(i * 137.5) % 360}, 70%, 85%)`,
                    color: `hsl(${(i * 137.5) % 360}, 70%, 25%)`,
                    border: `1px solid hsl(${(i * 137.5) % 360}, 70%, 75%)`
                  }}>{tag}</span>
                ))}
              </div>
            <div className="flex flex-col items-end">
              <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.15rem' }}>{company}</span>
            </div>
          </div>
          {/* Project Details Box */}
          <div className="mb-10 p-6 rounded-md" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
            <div
              className="grid gap-6"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1.2fr',
                gridTemplateRows: 'auto auto',
                gridGap: '1.5rem',
              }}
            >
              {/* Row 1 */}
              <div style={{ gridColumn: '1', gridRow: '1' }}>
                <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Role</div>
                <div style={{ color: 'var(--text-secondary)' }}>{role.split(',').map((item, i) => (<span key={i}>{item.trim()}<br /></span>))}</div>
              </div>
              <div style={{ gridColumn: '2', gridRow: '1' }}>
                <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Platform</div>
                <div style={{ color: 'var(--text-secondary)' }}>{platform.split(',').map((item, i) => (<span key={i}>{item.trim()}<br /></span>))}</div>
              </div>
              {/* Team (far right, spans both rows, aligned to top) */}
              <div style={{ gridColumn: '3', gridRow: '1 / span 2', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Team</div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {teamMembers.split(',').map((member, i) => (
                    <span key={i}>{member.trim()}<br /></span>
                  ))}
                </div>
              </div>
              {/* Row 2 */}
              <div style={{ gridColumn: '1', gridRow: '2' }}>
                <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Methodologies</div>
                <div style={{ color: 'var(--text-secondary)' }}>{methodologies.split(',').map((item, i) => (<span key={i}>{item.trim()}<br /></span>))}</div>
              </div>
              <div style={{ gridColumn: '2', gridRow: '2' }}>
                <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Timeline</div>
                <div style={{ color: 'var(--text-secondary)' }}><span style={{ color: 'var(--text-tertiary)' }}>{timeline}</span></div>
              </div>
            </div>
          </div>
          {intro && <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>{intro}</p>}
          {image && (
            <div className="mb-12">
              <img src={image} alt={title} className="w-full h-56 object-cover rounded-md" />
            </div>
          )}
          {/* Render all sections in order */}
          {sections && Array.isArray(sections) ? (
            sections.map((section, index) => (
              <section className="mb-12" key={index}>
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{section.heading}</h2>
                
                {/* Render images if they exist */}
                {section.images && section.images.length > 0 && (
                  <div className="mb-6">
                    <div className={`grid gap-4 ${
                      section.images.length === 1 ? 'grid-cols-1' :
                      section.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                      section.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                      'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                    }`}>
                      {section.images.map((img, i) => (
                        <div key={i} className="aspect-video">
                          <img
                            src={img}
                            alt={`${section.heading} image ${i + 1}`}
                            className="w-full h-full object-cover rounded-md"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Render content */}
                {section.content && (
                  <div 
                    className="prose prose-lg max-w-none" 
                    style={{ 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6'
                    }}
                    dangerouslySetInnerHTML={{ 
                      __html: section.content.replace(/&lt;/g, '<').replace(/&gt;/g, '>') 
                    }} 
                  />
                )}
              </section>
            ))
          ) : (
            // Fallback for old object structure
            SECTION_KEYS.map((key) => {
              const section = sections[key] || { content: '', images: [] };
              return (
                <section className="mb-12" key={key}>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{key}</h2>
                  
                  {/* Render images if they exist */}
                  {section.images && section.images.length > 0 && (
                    <div className="mb-6">
                      <div className={`grid gap-4 ${
                        section.images.length === 1 ? 'grid-cols-1' :
                        section.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                        section.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                      }`}>
                        {section.images.map((img, i) => (
                          <div key={i} className="aspect-video">
                            <img
                              src={img}
                              alt={`${key} image ${i + 1}`}
                              className="w-full h-full object-cover rounded-md"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render content */}
                  {section.content && (
                    <div 
                      className="prose prose-lg max-w-none" 
                      style={{ 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}
                      dangerouslySetInnerHTML={{ 
                        __html: section.content.replace(/&lt;/g, '<').replace(/&gt;/g, '>') 
                      }} 
                    />
                  )}
                </section>
              );
            })
          )}
        </div>
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

CaseStudyTemplate.propTypes = {
  id: PropTypes.string.isRequired
};

export default CaseStudyTemplate; 