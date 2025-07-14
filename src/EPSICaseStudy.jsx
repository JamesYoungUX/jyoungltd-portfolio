import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const epsiData = {
  title: 'AI-Powered Healthcare Dashboard Form Intake (EPSI)',
  company: 'Veterans Affairs',
  year: '2022–2025',
  tags: ['AI', 'HEALTHCARE UX', 'PRODUCT DESIGN'],
  intro: `Enterprise Precision Scanning and Indexing (EPSI) is a secure, web-based platform developed for the Veterans Health Administration to facilitate the seamless intake and management of patient records received as faxes and converted to PDF files from external care providers. The application equips authorized VA personnel with the tools to efficiently attach submitted documents to the correct patient profile within the Veterans Health Information Systems and Technology Architecture (VistA). Throughout this process, EPSI not only supports rigorous data verification and secure storage protocols but also automates document retention and disposal in full alignment with federal privacy requirements. By bridging external records and VA systems, EPSI ensures that critical health information is accurately captured, easily accessible to care teams, and protected at every stage of its lifecycle.`,
  image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  platform: 'Web App, Internal Software, AWS Healthcare Generative AI',
  teamList: '1 Product Designer<br/>5 Engineers<br/>1 Data Scientist<br/>1 Business Analyst<br/>1 Product Manager',
  sections: [
    {
      heading: 'Project Overview',
      content: `<span style='font-weight:600;'>Enterprise Precision Scanning and Indexing (EPSI)</span> is a web-based solution designed for the Veterans Health Administration to streamline the intake, organization, and secure transfer of PDF medical documents from community care providers into Veteran patient records. Given the sensitive nature of the data managed—encompassing Personally Identifiable Information (PII) and Protected Health Information (PHI)—the product demands not only functional excellence but also a privacy-first design approach that instills trust, efficiency, and accessibility for staff and Veterans alike.`
    },
    {
      heading: 'Challenge',
      content: `Before EPSI, clinical records from external providers were managed through outdated systems and spreadsheet-based manual workflows. This resulted in workflow bottlenecks, data integrity risks, inconsistent user experiences, and elevated privacy and security concerns. The primary design challenge was to digitize and modernize this process while safeguarding privacy, minimizing retention of sensitive information, and upholding strict federal standards for data security and access.`
    },
    {
      heading: 'Process',
      content: `As the product designer, I guided the team through the double diamond methodology—exploring divergent ideas and building convergent solutions. My human-centered, iterative design process included:
<ul style='margin-left:1.5em;'>
  <li><strong>User Research:</strong> I interviewed VHA staff (indexers, administrators, privacy officers) to map existing pain points in the document intake and indexing workflow.</li>
  <li><strong>Prototyping & Validation:</strong> Using Axure, I rapidly iterated on interactive prototypes, enabling usability testing with actual end users. This surfaced real-world concerns, such as information overload and the critical need for verification at each workflow stage.</li>
  <li><strong>Design Systems & Methodology:</strong> I standardized UI components in Figma, aligning with US Web Design System (USWDS) and VA-specific guidelines. Every element—buttons, data entry forms, confirmation screens—was stress-tested for accessibility and privacy compliance.</li>
  <li><strong>Privacy by Design:</strong> Collaborating with security and privacy officers, I baked privacy controls into the UX, such as clear user roles, audit logs, automated purging of sensitive data, and inline guidance about privacy responsibilities.</li>
  <li><strong>Documentation & Onboarding:</strong> I authored accessible documentation and workflow guides to facilitate smooth onboarding of new users and support ongoing compliance.</li>
</ul>`
    },
    {
      heading: 'Key Solutions',
      content: `<ul style='margin-left:1.5em; list-style: disc;'>
  <li>Streamlined, end-to-end digital workflow for secure intake, indexing, and transfer of external PDF health records.</li>
  <li>Minimal-click design: users can quickly scan for details and complete tasks accurately, reducing time and effort.</li>
  <li>Role-based access and comprehensive audit trails to ensure privacy and accountability.</li>
  <li>Automated data validation and confirmation steps to prevent errors before upload.</li>
  <li>Integrated OCR and generative AI for fast, accurate document parsing and data extraction.</li>
  <li>Flexible user flows that adapt to different document types and staff needs.</li>
  <li>"Pick your adventure" prompt writing, enabling flexible workflow guidance tailored to user needs and document types.</li>
  <li>Accessible, privacy-first interface aligned with VA and USWDS standards.</li>
  <li>All forms are screen-reader accessible and meet WCAG 2.1 AA standards.</li>
</ul>`
    },
    {
      heading: 'Results',
      content: `EPSI delivered measurable improvements in efficiency, accuracy, and compliance for VHA staff and workflows.<br/><ul style='margin-left:1.5em;'>
  <li>Reduced manual data entry workload by 40%, enabling staff to complete more tasks within the allotted time.</li>
  <li>Improved data accuracy and reduced misidentification errors by implementing multi-factor verification and automated checks.</li>
  <li>Decreased average time to index and transfer documents by over 60% compared to previous manual workflows.</li>
  <li>Ensured 100% compliance with federal privacy and retention requirements through automated purging and audit trails.</li>
  <li>Received positive user feedback for ease of use, clarity of workflow, and increased confidence in data handling.</li>
</ul>`
    },
    {
      heading: 'Reflections',
      content: `<p>Designing EPSI was a powerful reminder of the responsibility that comes with handling sensitive health information. The project challenged me to balance innovation with privacy, ensuring that every design decision protected both data and dignity. Collaborating with privacy officers and end users deepened my appreciation for the complexities of healthcare workflows and the importance of clear, accessible interfaces. Ultimately, EPSI reinforced my belief that great design is not just about efficiency or aesthetics, but about building trust and empowering people—both staff and Veterans—at every step of the journey.</p>`
    }
  ]
};

const EPSICaseStudy = () => <CaseStudyTemplate {...epsiData} />;

export default EPSICaseStudy; 