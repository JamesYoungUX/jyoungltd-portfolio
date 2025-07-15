import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';
import { Helmet } from 'react-helmet-async';

const resilienceData = {
  title: 'Automating Patient-Therapist Alignment in the COVID-19 Recovery Era',
  company: 'Resilience Lab',
  year: '2022-2023',
  tags: ['UX RESEARCH', 'PRODUCT DESIGN', 'STRATEGY', 'LEADERSHIP', 'DESIGN LEADERSHIP'],
  intro: 'Resilience Lab is a modern therapy collective leveraging data and design to deliver collaborative, high-quality mental healthcare. As pandemic restrictions eased and patient needs evolved, the company needed to automate and personalize back office operations to keep pace with growth and ensure clients found the right therapeutic match, whether virtual or in-person.',
  image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  platform: 'Web App, Internal Tool',
  teamList: '1 Product Designer<br/>4 Engineers<br/>1 Data Scientist<br/>1 Product Manager',
  sections: [
    {
      heading: 'Overview',
      content: `Resilience Lab is a modern therapy collective leveraging data and design to deliver collaborative, high-quality mental healthcare. As pandemic restrictions eased and patient needs evolved, the company needed to automate and personalize back office operations to keep pace with growth and ensure clients found the right therapeutic match, whether virtual or in-person.`
    },
    {
      heading: 'Challenge',
      content: `The widening reach of hybrid care models introduced new complexity. Patient needs, therapist expertise, licensure by state, insurance network compatibility, and evolving preferences overwhelmed manual systems. Slow or imprecise matches impacted patient engagement and internal efficiency, while administrative teams faced escalating workloads.`
    },
    {
      heading: 'Approach',
      content: `Guided by double diamond methodology, I led a cross-functional process to research, ideate, prototype, and deliver a new matching engine:<br/><br/>
<strong>Discovery:</strong> Interviewed stakeholders across intake, therapy, and administration to identify friction points. Diagrams of existing processes revealed critical breakdowns in the alignment workflow.<br/>
<strong>Ideation & Prototyping:</strong> Documented and prioritized matching criteria: location, specialty, modality, insurance, caseload, preferences, and diversity goals. Created wireframes and interactive prototypes in Figma, iteratively tested in real-world intake scenarios.<br/>
<strong>Engineering Partnership:</strong> Collaborated with backend teams on algorithm logic and data flows. Built user-friendly dashboards for administrators to monitor and refine assignments.<br/>
<strong>Strategic Storytelling:</strong> Leveraged Axure and Figma prototypes to clearly articulate system vision and ROI during board meetings and fundraising rounds, ensuring executive alignment.`
    },
    {
      heading: 'Key Solution',
      content: `The automated system now algorithmically matches patients and therapists based on real-time criteria, instantly surfacing recommended pairings and reducing assignment times from days to minutes. Administrators have transparency and oversight with dashboards to intervene or customize as needed. Feedback loops allow continual refinement based on match success.`
    },
    {
      heading: 'Outcome',
      content: `<ul style='margin-left:1.5em; list-style: disc;'>
  <li><strong>Efficiency:</strong> Back office team capacity increased dramatically, allowing Resilience Lab to meet surging demand without bottlenecks or burnout.</li>
  <li><strong>Personalized Care:</strong> Patients are more seamlessly aligned to clinicians suited to their preferences, specialty needs, and logistical constraints.</li>
  <li><strong>Scalability:</strong> The system equips Resilience Lab to grow sustainably, handling large volumes of new patients with minimal additional admin resources.</li>
  <li><strong>Business Impact:</strong> As design leadership, I used high-fidelity interactive prototypes to convey product vision and workflow transformation, directly supporting the company’s successful $14 million Series A funding round.</li>
</ul>`
    },
    {
      heading: 'Reflections',
      content: `This initiative illustrated how design and prototyping can do more than deliver user-centric systems—they can be instrumental in securing stakeholder confidence, unlocking funding, and fueling company growth. By coupling thoughtful automation with strategic storytelling, I helped Resilience Lab rapidly scale its mission of bringing better mental healthcare to all, at the moment it was most needed.`
    }
  ]
};

const ResilienceCaseStudy = () => (
  <>
    <Helmet>
      <title>Resilience Lab Case Study | James Young - Product Design Leader</title>
      <meta name="description" content="Case study: Resilience Lab, automating patient-therapist alignment in the COVID-19 recovery era, led by James Young." />
    </Helmet>
    <CaseStudyTemplate
      {...resilienceData}
      role={"Design Leadership\nPrincipal Product Designer\nConsultation"}
      methodology={"Double Diamond\nAgile\nScrum"}
    />
  </>
);

export default ResilienceCaseStudy; 