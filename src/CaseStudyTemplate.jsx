import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const CaseStudyTemplate = ({
  title,
  company,
  year,
  tags = [],
  intro,
  image,
  sections = [],
  platform = '',
  teamList = '',
  role = 'Lead Product Designer\nConsultation\nFacilitation',
  methodology = 'Agile\nScrum'
}) => (
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
        <Header />
        <h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h1>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4 mt-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="inline-block bg-white/10 text-[var(--text-primary)] px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-[var(--border-primary)]">{tag}</span>
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
              <div style={{ color: 'var(--text-secondary)' }}>{role.split('\n').map((item, i) => (<span key={i}>{item}<br/></span>))}</div>
            </div>
            <div style={{ gridColumn: '2', gridRow: '1' }}>
              <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Platform</div>
              <div style={{ color: 'var(--text-secondary)' }}>{platform.split(',').map((item, i) => (<span key={i}>{item.trim()}<br/></span>))}</div>
            </div>
            {/* Team (far right, spans both rows, aligned to top) */}
            <div style={{ gridColumn: '3', gridRow: '1 / span 2', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Team</div>
              <div style={{ color: 'var(--text-secondary)' }}>
                {teamList.split(',').map((member, i) => (
                  <span key={i}>{member.trim()}<br/></span>
                ))}
              </div>
            </div>
            {/* Row 2 */}
            <div style={{ gridColumn: '1', gridRow: '2' }}>
              <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Methodology</div>
              <div style={{ color: 'var(--text-secondary)' }}>{methodology.split('\n').map((item, i) => (<span key={i}>{item}<br/></span>))}</div>
            </div>
            <div style={{ gridColumn: '2', gridRow: '2' }}>
              <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Time</div>
              <div style={{ color: 'var(--text-secondary)' }}><span style={{ color: 'var(--text-tertiary)' }}>{year}</span></div>
            </div>
          </div>
        </div>
        {intro && <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>{intro}</p>}
        {image && (
          <div className="mb-12">
            <img src={image} alt={title} className="w-full h-56 object-cover rounded-md" />
          </div>
        )}
        {/* Render all sections */}
        {sections.map((section, idx) => (
          <section className="mb-8" key={idx}>
            {section.image && (
              <img
                src={section.image}
                alt={section.heading}
                className="w-full h-56 object-cover rounded-md mb-6"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{section.heading}</h2>
            {/*
              WARNING: Only use dangerouslySetInnerHTML with trusted, static content.
              Never use with user-generated content to avoid XSS vulnerabilities.
            */}
            <div style={{ color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))}
      </div>
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4">
        <Footer />
      </div>
    </div>
  </div>
);

export const caseStudyPropTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  intro: PropTypes.string,
  image: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.string
    })
  ),
  platform: PropTypes.string,
  teamList: PropTypes.string,
  role: PropTypes.string,
  methodology: PropTypes.string
};

CaseStudyTemplate.propTypes = caseStudyPropTypes;

export default CaseStudyTemplate; 