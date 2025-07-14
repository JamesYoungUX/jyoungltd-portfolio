import React, { useRef } from 'react';
import Header from './Header';
import { useReactToPrint } from 'react-to-print';

const ResumeContent = React.forwardRef(function ResumeContent(props, ref) {
  return (
    <div ref={ref}>
      <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>A. James Young</h1>
      <div className="mb-2">Product designer leader & AI prompt engineer</div>
      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Professional Summary</h2>
        <p>
          Product design leader with a servant leadership mindset, known for empowering teams and driving product strategy. Expert at aligning design, research, and business goals to deliver innovative, user-centered solutions. Skilled in building collaborative cultures, mentoring talent, and guiding cross-functional teams to create impactful digital experiences.
        </p>
      </section>
      {/* Areas of Expertise */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Areas of Expertise</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 list-disc pl-5">
          <li>Servant Leadership</li>
          <li>UX Leadership</li>
          <li>Accessibility</li>
          <li>AI Prompt Engineering</li>
          <li>Clinical UX Design</li>
          <li>Design Systems</li>
          <li>Healthcare UX</li>
          <li>Product Design</li>
          <li>Prototyping</li>
          <li>User Research</li>
        </ul>
      </section>
      {/* Technical Proficiencies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Technical Proficiencies</h2>
        <div className="mb-2"><strong>Tools:</strong> Figma, Sketch, Neurons, Adobe XD, Axure</div>
        <div><strong>Methodologies:</strong> Double Diamond, Design Thinking, Atomic Design, SCRUM, Kanban</div>
      </section>
      {/* Career Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Career Experience</h2>
        <div className="mb-6">
          <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Signify Health/CVS, Dallas</div>
          <div className="italic mb-1">Lead (Staff) User Experience/Architect – Remote | 2023 - 2024</div>
          <ul className="list-disc pl-5">
            <li>Led UX strategy for CVS ACO, empowering cross-functional teams to deliver innovative, user-centered healthcare solutions. Drove the design of intuitive interfaces and workflows that streamlined clinical operations, enhanced patient engagement, and advanced value-based care initiatives.</li>
            <li>Drove the design of intuitive interfaces and workflows that streamlined clinical operations, enhanced patient engagement, and advanced value-based care initiatives.</li>
            <li>Championed accessibility initiatives, collaborating with engineering and QA to embed inclusive design principles and ensure products were usable by all, including those with disabilities.</li>
            <li>Developed and maintained comprehensive design libraries and revisions for products.</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Resilience Lab, New York City</div>
          <div className="italic mb-1">Senior Principal User Experience/Architect - Remote | 2022 – 2023</div>
          <ul className="list-disc pl-5">
            <li>Built and scaled the product design team from the ground up as the first product hire at a Series A startup, recruiting and mentoring designers, UX writers, and researchers.</li>
            <li>Spearheaded the development of a comprehensive Axure prototype, enabling effective demos for research, technical briefings, and board presentations.</li>
            <li>Established and maintained design libraries and component systems, introducing design tokens to streamline collaboration and eliminate engineering ambiguities.</li>
            <li>Fostered a collaborative, high-performance culture focused on continuous improvement and user-centered design.</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Pearl Health, Boston, NYC</div>
          <div className="italic mb-1">Senior Principal User Experience - Remote | 2021 – 2022</div>
          <ul className="list-disc pl-5">
            <li>Established the product design function as the first design hire, defining vision, requirements, and success criteria in close partnership with senior leadership.</li>
            <li>Shaped user experience strategy through information architecture, process flows, wireframes, and user research, effectively communicating solutions to stakeholders at all levels.</li>
            <li>Elevated product quality by leading three UX research projects and delivering detailed UI specifications that drove final design decisions.</li>
            <li>Created a comprehensive Axure prototype that became essential for sales, research, and board presentations, earning strong stakeholder support.</li>
            <li>Enabled successful project launches by crafting persuasive design narratives and guiding early build phases.</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Bravado Health, West Palm Beach</div>
          <div className="italic mb-1">Senior Director User Experience - Remote | 2017 – 2021</div>
          <ul className="list-disc pl-5">
            <li>Directed UX strategy and delivery across multiple products, overseeing research, design, and talent development to drive user satisfaction and business results.</li>
            <li>Orchestrated the end-to-end design of three successful products (Ayva, EQIP, Ayva Treat5), ensuring high functionality and user appeal.</li>
            <li>Boosted engagement and usability by partnering with voice and gamification experts to deliver innovative, intuitive experiences.</li>
            <li>Maintained design excellence and consistency by developing and managing a comprehensive design library.</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-medium" style={{ color: 'var(--text-primary)' }}>VetsEZ, San Diego</div>
          <div className="italic mb-1">UX Consultant - Remote | 2018</div>
          <ul className="list-disc pl-5">
            <li>Advised the VA on 508 compliance and accessibility, delivering solutions that improved usability for veterans with disabilities.</li>
            <li>Designed and tested prototypes through collaborative brainstorming, wireframing, and iterative development to achieve optimal user experiences.</li>
            <li>Championed inclusive design, ensuring applications met the needs of all users through close partnership with VA stakeholders.</li>
          </ul>
        </div>
      </section>
      {/* Additional Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Additional Experience</h2>
        <ul className="list-disc pl-5">
          <li>Paid Mentor at Springboard, Remote, 2016 - 2021</li>
          <li>Principal UX Architect (Consultant) at Press Ganey, Chicago – Remote, 2015 - 2017</li>
          <li>Lead Interaction Designer (Consultant) at Humana, Chicago – Remote, 2013 – 2015</li>
          <li>Sr. User Experience Architect (Consultant) at Lextech Global Services, Chicago – Remote, 2013</li>
          <li>Sr. User Experience Architect (Consultant) at Grainger, Chicago – Hybrid, 2012 – 2013</li>
          <li>Sr. User Experience Architect (Consultant) at Harpo Productions (Oprah), Chicago, 2008 - 2010</li>
        </ul>
      </section>
    </div>
  );
});

const Resume = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'A_James_Young_Resume',
  });

  return (
    <div className="resume-page" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", margin: 0, padding: 0, background: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-16">
        <Header />
        <div className="mb-8 no-print">
          <div className="mt-2">
            <button
              className="border px-4 py-2 rounded-md btn-text hover:bg-gray-200 transition-colors"
              style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              onClick={handlePrint}
            >
              Download PDF Resume
            </button>
          </div>
        </div>
        <ResumeContent ref={componentRef} />
      </div>
    </div>
  );
};

export default Resume; 