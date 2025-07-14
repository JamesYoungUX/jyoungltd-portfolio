import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';

const seocData = {
  title: 'AI Powered Workflow to Enhance Standardized Episodes of Care (SEOC)',
  company: 'Veterans Affairs',
  year: '2024–2025',
  tags: ['AI', 'Healthcare Innovation'],
  intro: 'Leading a multidisciplinary team, I architected an intuitive solution streamlining the creation and management of SEOCs, driving both clinical and operational improvements.',
  image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  platform: 'Web App, Internal Software, AWS Healthcare Generative AI',
  teamList: '1 Product Designer<br/>6 Engineers<br/>1 Data Scientist<br/>1 Business Analyst<br/>1 Product Manager',
  sections: [
    {
      heading: 'Project Overview',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      content: `Transforming complex healthcare processes into approachable, effective digital tools can have a profound impact on both patients and providers. Leveraging AI-driven tools and automation, the solution intelligently streamlined complex decision points and data validation, reducing manual effort and improving accuracy throughout the SEOC lifecycle. In this project, a collaborative, user-centered approach was used to reimagine how standardized care pathways are experienced in a clinical setting. The SEOC process, which operates under congressional oversight, required particular attention to compliance, transparency, and accountability. Through close partnership with VA employees and careful attention to intuitive design, the resulting solution made critical workflows clearer and more adaptable. As a result, teams are able to deliver consistent, high-quality care while also supporting the unique needs of the Veterans Affairs—demonstrating the power of thoughtful digital innovation in healthcare.`
    },
    {
      heading: 'Challenge',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      content: `The management and creation of Standardized Episodes of Care (SEOCs) had become increasingly challenging, relying on fragmented tools—spreadsheets for tracking workflow and an aging platform for publishing content. Because the existing product was developed before design standards were in place, its interface lacked consistency and intuitiveness, posing usability challenges for both clinical and administrative teams. Inefficiencies surfaced as teams manually duplicated features, managed parallel data entry, and wrestled with maintaining accuracy across multiple sources. Recognizing these pain points, I took an active leadership role in envisioning a more cohesive solution. By championing a unified approach to design and workflow integration, I aimed to streamline SEOC management, reduce redundancy, and create a more intuitive experience for users. This shift not only opened the door to operational efficiencies, but also laid the foundation for greater scalability, better data integrity, and an improved user experience going forward.`
    },
    {
      heading: 'Approach',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      content: `To bridge this gap, I engaged directly with clinical stakeholders, including authors, coders (people who assign medical codes to SEOCs) and publishers. Through a series of workshops and interviews, I identified pain points in the existing workflows and gathered insights into the distinct requirements of each pathway. My strategy centered on two key objectives:
      <ul class='list-disc pl-6 mb-2'>
        <li><strong>Creating Intuitive Interfaces:</strong> I translated complex, often detailed medical protocols into clear, actionable digital experiences. Leveraging user-centered design principles, I crafted interface prototypes that distilled clinical pathways into step-by-step guidance for providers at the point of care.</li>
        <li><strong>Supporting Individualized Needs:</strong> While maintaining standardized protocols, I ensured that digital tools allowed flexibility to address unique conditions and preferences. For example, conditional logic and customizable fields enabled authors to adapt care plans without recreating the entire form and easing maintaining established standards.</li>
      </ul>`
    },
    {
      heading: 'Process',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      content: `As the product designer, I led the integration of a robust design system grounded in the United States Web Design System (USWDS) and VA design language. From the beginning, I prioritized scalability, accessibility, and collaboration by building a library of reusable components and design tokens complemented by detailed documentation and accessibility guidelines. To ensure consistent implementation and efficient workflows, I established automated testing protocols, further assuring high standards across all deliverables.
      <div style='text-align:center; margin: 2rem 0;'>
        <img src='/Framework_for_Innovation_transparent.png' alt='Double Diamond design process diagram: Discover, Define, Develop, Deliver' style='max-width:600px; width:100%; height:auto; border-radius:0.5rem; background:var(--bg-primary); margin: 0 auto;' />
      </div>
      <h3 class='text-xl font-semibold mt-6 mb-2' style='color:var(--text-primary)'>Double Diamond Methodology</h3>
      Throughout the process, I embraced the Double Diamond methodology—first focusing on discovery and definition to deeply understand user pain points and product goals, then proceeding to ideation and delivery for effective solution development.
      <ul class='list-disc pl-6 mb-2'>
        <li><strong>Discovery & Definition:</strong> During the divergent thinking phase, I engaged stakeholders and clinical users in co-design workshops, ensuring a breadth of ideas and insights informed our direction.</li>
        <li><strong>Ideation & Delivery:</strong> Prototyping played a key role in our iterative approach. I utilized Axure to quickly build interactive prototypes, allowing clinical and administrative users to visualize and test new workflows early and often. These interactive models provided invaluable feedback on functionality and usability, which I incorporated into high-fidelity designs within Figma.</li>
      </ul>
      In Figma, I documented every component and interaction, creating a single source of truth for both designers and developers. AI-powered algorithms were integrated to assist with workflow automation, predictive analytics, and intelligent recommendations, enabling teams to make faster, data-informed decisions and further enhancing the platform’s efficiency. This design-led, user-centered approach not only resulted in a scalable and accessible design system, but also fostered stronger collaboration across teams and empowered stakeholders to deliver consistent, high-quality care through more intuitive and adaptable SEOC management tools.`
    },
    {
      heading: 'Results',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      content: `<ul class='list-disc pl-5 mb-4'>
        <li>Reduced manual effort by 30%</li>
        <li>Improved usability by 62% and decreased cognitive load, as measured by task completion success and user feedback</li>
        <li>Reduced average time to complete key tasks from 37 minutes to less than 6 minutes</li>
        <li>Greatly improved the complexity and intuitiveness of medical coding SEOCs</li>
        <li>Increased user confidence and trust</li>
      </ul>
      Early feedback from stakeholders highlighted a marked reduction in redundant work and fostered more trust and increased confidence among users. The design system’s robust documentation and reusable components also accelerated future development, enabling teams to quickly adapt and scale the solution as needs evolved. Ultimately, these improvements empowered the VA to deliver more consistent, high-quality care, while freeing up valuable time for both clinicians and administrators to focus on what matters most—serving Veterans.`
    },
    {
      heading: 'Reflections',
      content: `<p>Leading design for the SEOC project was a transformative experience that challenged me to grow as a leader and collaborator. Navigating the complexities of healthcare and technology, I learned the value of patience, empathy, and clear communication. One of the most significant lessons was the importance of engaging stakeholders early and often—co-design workshops and iterative feedback loops ensured the solution truly addressed user needs and organizational goals. Embracing the Double Diamond methodology provided a clear structure for navigating complexity, while the integration of AI-driven tools demonstrated how technology can amplify human expertise and streamline decision-making.</p>
      <p>The project also highlighted the necessity of robust documentation and scalable systems to support long-term growth and adaptability. This experience has shaped how I approach every new challenge—with curiosity, rigor, and a commitment to user-centered design. Ultimately, it deepened my appreciation for the power of thoughtful design, agile teamwork, and the impact that a user-centered, data-informed approach can have on improving care delivery and operational efficiency.</p>`
    }
  ]
};

const SEOCCaseStudy = () => <CaseStudyTemplate {...seocData} />;

export default SEOCCaseStudy; 