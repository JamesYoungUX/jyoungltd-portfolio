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
          {/* Project Details / Quick Facts */}
          <div className="mb-12 flex flex-col md:flex-row-reverse gap-6 p-6 rounded-md" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
            {/* Team Formation on the left */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Team</div>
              <ul className="list-none pl-0" style={{ color: 'var(--text-secondary)', margin: 0 }}>
                <li>6 Engineers</li>
                <li>2 Security</li>
                <li>1 Database Administrator</li>
                <li>1 Business Analyst</li>
                <li>1 Product Manager</li>
              </ul>
            </div>
            {/* 2x2 grid on the right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              <div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Role</div>
                <div style={{ color: 'var(--text-secondary)' }}>Lead Product Designer<br/>Consultation<br/>Facilitation</div>
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Platform</div>
                <div style={{ color: 'var(--text-secondary)' }}>Web App, Internal Software</div>
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Methodology</div>
                <div style={{ color: 'var(--text-secondary)' }}>Agile, Scrum</div>
              </div>
              <div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Time</div>
                <div style={{ color: 'var(--text-secondary)' }}>2024–2025</div>
              </div>
            </div>
          </div>
          {/* Key Contributions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Key Contributions</h3>
            <ul className="list-disc pl-5" style={{ color: 'var(--text-secondary)' }}>
              <li>Facilitated co-design workshops with clinical and administrative stakeholders</li>
              <li>Developed a scalable design system with 20+ reusable components</li>
              <li>Integrated AI-driven workflow automation and predictive analytics</li>
              <li>Established robust documentation and accessibility guidelines</li>
              <li>Designed task-oriented pages that guide users to focus on their highest priorities, reducing average time to complete key tasks from 37 minutes to less than 6 minutes</li>
            </ul>
          </div>
          <section className="mb-8">
            {/* Unsplash image for Project Overview */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Healthcare teamwork"
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Project Overview</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Transforming complex healthcare processes into approachable, effective digital tools can have a profound impact on both patients and providers. Leveraging AI-driven tools and automation, the solution intelligently streamlined complex decision points and data validation, reducing manual effort and improving accuracy throughout the SEOC lifecycle. In this project, a collaborative, user-centered approach was used to reimagine how standardized care pathways are experienced in a clinical setting. The SEOC process, which operates under congressional oversight, required particular attention to compliance, transparency, and accountability. Through close partnership with VA employees and careful attention to intuitive design, the resulting solution made critical workflows clearer and more adaptable. As a result, teams are able to deliver consistent, high-quality care while also supporting the unique needs of the Veterans Affairs—demonstrating the power of thoughtful digital innovation in healthcare.
            </p>
          </section>
          <section className="mb-8">
            {/* Unsplash image for Challenge */}
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
              alt="Doctors discussing patient care"
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Challenge</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              The management and creation of Standardized Episodes of Care (SEOCs) had become increasingly challenging, relying on fragmented tools—spreadsheets for tracking workflow and an aging platform for publishing content. Because the existing product was developed before design standards were in place, its interface lacked consistency and intuitiveness, posing usability challenges for both clinical and administrative teams. Inefficiencies surfaced as teams manually duplicated features, managed parallel data entry, and wrestled with maintaining accuracy across multiple sources. Recognizing these pain points, I took an active leadership role in envisioning a more cohesive solution. By championing a unified approach to design and workflow integration, I aimed to streamline SEOC management, reduce redundancy, and create a more intuitive experience for users. This shift not only opened the door to operational efficiencies, but also laid the foundation for greater scalability, better data integrity, and an improved user experience going forward.
            </p>
          </section>
          <section className="mb-8">
            {/* Unsplash image for Approach */}
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
              alt="Design approach collaboration"
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Approach</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              To bridge this gap, I engaged directly with clinical stakeholders, including authors, coders (people who assign medical codes to SEOCs) and publishers. Through a series of workshops and interviews, I identified pain points in the existing workflows and gathered insights into the distinct requirements of each pathway. My strategy centered on two key objectives:
            </p>
            <ul className="list-disc pl-6 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li><strong>Creating Intuitive Interfaces:</strong> I translated complex, often detailed medical protocols into clear, actionable digital experiences. Leveraging user-centered design principles, I crafted interface prototypes that distilled clinical pathways into step-by-step guidance for providers at the point of care.</li>
              <li><strong>Supporting Individualized Needs:</strong> While maintaining standardized protocols, I ensured that digital tools allowed flexibility to address unique conditions and preferences. For example, conditional logic and customizable fields enabled authors to adapt care plans without recreating the entire form and easing maintaining established standards.</li>
            </ul>
          </section>
          <section className="mb-8">
            {/* Unsplash image for Process */}
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
              alt="Design process illustration"
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Process</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              As the product designer, I led the integration of a robust design system grounded in the United States Web Design System (USWDS) and VA design language. From the beginning, I prioritized scalability, accessibility, and collaboration by building a library of reusable components and design tokens complemented by detailed documentation and accessibility guidelines. To ensure consistent implementation and efficient workflows, I established automated testing protocols, further assuring high standards across all deliverables.
            </p>
            <img
              src="/Framework_for_Innovation_transparent.png"
              alt="Double Diamond design process diagram: Discover, Define, Develop, Deliver"
              className="mx-auto mb-6 mt-10" style={{ maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '0.5rem', background: 'var(--bg-primary)' }}
            />
            <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--text-primary)' }}>Double Diamond Methodology</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Throughout the process, I embraced the Double Diamond methodology—first focusing on discovery and definition to deeply understand user pain points and product goals, then proceeding to ideation and delivery for effective solution development.
            </p>
            <ul className="list-disc pl-6 mb-2" style={{ color: 'var(--text-secondary)' }}>
              <li><strong>Discovery & Definition:</strong> During the divergent thinking phase, I engaged stakeholders and clinical users in co-design workshops, ensuring a breadth of ideas and insights informed our direction.</li>
              <li><strong>Ideation & Delivery:</strong> Prototyping played a key role in our iterative approach. I utilized Axure to quickly build interactive prototypes, allowing clinical and administrative users to visualize and test new workflows early and often. These interactive models provided invaluable feedback on functionality and usability, which I incorporated into high-fidelity designs within Figma.</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)' }}>
              In Figma, I documented every component and interaction, creating a single source of truth for both designers and developers. AI-powered algorithms were integrated to assist with workflow automation, predictive analytics, and intelligent recommendations, enabling teams to make faster, data-informed decisions and further enhancing the platform’s efficiency. This design-led, user-centered approach not only resulted in a scalable and accessible design system, but also fostered stronger collaboration across teams and empowered stakeholders to deliver consistent, high-quality care through more intuitive and adaptable SEOC management tools.
            </p>
          </section>
          <section className="mb-8">
            {/* Unsplash image for Results */}
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
              alt="Results and outcomes"
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Results</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              The new SEOC management solution delivered significantly faster and more accurate workflows for clinical and administrative teams. By consolidating fragmented tools into a unified, intuitive platform, users were able to complete key tasks in less time and with fewer errors. Automated validation and standardized components reduced manual data entry mistakes, while clear, accessible interfaces improved user confidence and satisfaction.
            </p>
            <ul className="list-disc pl-5 mb-4" style={{ color: 'var(--text-secondary)' }}>
              <li>Reduced manual effort by 30%</li>
              <li>Improved usability by 62% and decreased cognitive load, as measured by task completion success and user feedback</li>
              <li>Reduced average time to complete key tasks from 37 minutes to less than 6 minutes</li>
              <li>Greatly improved the complexity and intuitiveness of medical coding SEOCs</li>
              <li>Increased user confidence and trust</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)' }}>
              Early feedback from stakeholders highlighted a marked reduction in redundant work and fostered more trust and increased confidence among users. The design system’s robust documentation and reusable components also accelerated future development, enabling teams to quickly adapt and scale the solution as needs evolved. Ultimately, these improvements empowered the VA to deliver more consistent, high-quality care, while freeing up valuable time for both clinicians and administrators to focus on what matters most—serving Veterans.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Reflections</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Leading design for the SEOC project was a transformative experience that challenged me to grow as a leader and collaborator. Navigating the complexities of healthcare and technology, I learned the value of patience, empathy, and clear communication. One of the most significant lessons was the importance of engaging stakeholders early and often—co-design workshops and iterative feedback loops ensured the solution truly addressed user needs and organizational goals. Embracing the Double Diamond methodology provided a clear structure for navigating complexity, while the integration of AI-driven tools demonstrated how technology can amplify human expertise and streamline decision-making.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              The project also highlighted the necessity of robust documentation and scalable systems to support long-term growth and adaptability. This experience has shaped how I approach every new challenge—with curiosity, rigor, and a commitment to user-centered design. Ultimately, it deepened my appreciation for the power of thoughtful design, agile teamwork, and the impact that a user-centered, data-informed approach can have on improving care delivery and operational efficiency.
            </p>
          </section>
          {/* Back to Case Studies button */}
          <div className="mt-12 text-center">
            <a href="/case-studies" className="btn-text px-6 py-3 rounded-md border" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-primary)', fontWeight: 560, fontSize: '16px', textDecoration: 'none' }}>
              ← Back to Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOCCaseStudy; 