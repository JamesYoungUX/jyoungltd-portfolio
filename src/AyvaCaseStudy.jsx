import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';
import { Helmet } from 'react-helmet-async';

const ayvaImage = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'; // Placeholder, replace with actual image if available

const sections = [
  {
    heading: 'Overview',
    content: `When I joined Bravado Health, the healthcare landscape was seeing a significant shift toward patient-centric digital platforms—yet surgical care remained one of the most stressful, fragmented, and analog experiences in medicine. Research showed that gaps in communication, low adherence to pre- and post-operative instructions, and insufficient support systems often led to surgery delays, preventable readmissions, and poor patient satisfaction.<br/><br/>Recognizing these challenges, Bravado Health set out to bridge the gap with Ayva: a platform that would reimagine how patients, their advocates, and care teams interact before and after surgery. Our vision was ambitious—transform complex medical instructions into clear, actionable steps, nurture patient confidence at every stage, and give care teams the oversight to drive timely, outcome-improving interventions.<br/><br/>Crucially, Ayva was designed to expand the circle of care by including not just clinical stakeholders but also patient-designated advocates—empowering friends, family, or neighbors to follow recovery progress and lend support where it matters most. The goal was to humanize and streamline surgery preparation and recovery with technology, making higher-value care accessible and scalable for providers, patients, and their loved ones. As Director of Product Design, I was responsible for translating these strategic priorities into a cohesive, intuitive, and compelling digital experience from the ground up.`
  },
  {
    heading: 'Challenge',
    content: `Surgery can be overwhelming, and patients often struggle to follow complex instructions, leading to avoidable complications or readmissions. Traditional care models failed to deliver real-time feedback, personalized support, or include friends and family as part of the healing process. There was a crucial need to create a platform that would guide patients with empathy, provide actionable insights for case managers to intervene proactively, and enable advocates to track and support loved ones’ surgical recoveries.`
  },
  {
    heading: 'Approach',
    content: `<ul>
      <li><strong>Design Leadership:</strong> As Director, I formed and mentored a multidisciplinary design team, fostering a rapid-prototyping, user-centered environment.</li>
      <li><strong>Comprehensive Journey Mapping:</strong> Through extensive research with patients, clinicians, and case managers, we identified gaps in communication, adherence, and support throughout the surgical timeline.</li>
      <li><strong>End-to-End Prototyping:</strong> Established Ayva’s design language and user interface in Figma, creating high-fidelity interactive prototypes that drove internal alignment and became cornerstone assets for sales, growth, and acquisition conversations.</li>
      <li><strong>Empowering the Whole Circle of Care:</strong> Developed features for case managers to visualize patient adherence and milestones at a glance, enabling timely interventions. Designed an advocate experience—giving designated friends, family, or neighbors access to key patient progress and actionable reminders for both pre- and post-op involvement.</li>
      <li><strong>Business Value Demonstration:</strong> Leveraged prototypes to showcase Ayva’s multi-stakeholder impact in partner, client, and acquisition settings.</li>
    </ul>`
  },
  {
    heading: 'Key Solutions',
    content: `<ul style='margin-left:1.5em; list-style: disc;'>
      <li><strong>Conversational Checklists:</strong> Step-by-step, interactive instructions for patients, tailored to their procedure and timeline.</li>
      <li><strong>Advocate Access:</strong> Patients can invite a trusted friend or family member to follow their progress and receive reminders, expanding the circle of care.</li>
      <li><strong>Real-Time Dashboards:</strong> Case managers monitor patient adherence, milestones, and issues at a glance, enabling timely interventions.</li>
      <li><strong>Secure Messaging:</strong> HIPAA-compliant, two-way communication between patients and care teams for questions, support, and follow-up.</li>
      <li><strong>Educational Modules:</strong> Bite-sized, accessible content to help patients understand their care and recovery process.</li>
      <li><strong>Automated Reminders:</strong> Personalized notifications for medication, appointments, and key recovery steps.</li>
      <li><strong>Accessibility & Empathy:</strong> Designed for clarity, inclusivity, and emotional support throughout the surgical journey.</li>
    </ul>`
  },
  {
    heading: 'Outcome',
    content: `<ul>
      <li><strong>Patient Empowerment:</strong> Patients using Ayva felt informed, supported, and less anxious, leading to improved adherence throughout their surgical journey.</li>
      <li><strong>Case Manager Efficiency:</strong> Care teams were able to spot issues sooner and provide targeted interventions, reducing complications and readmissions.</li>
      <li><strong>Advocate Engagement:</strong> The advocate feature activated a patient’s personal support network, improving outcomes and satisfaction.</li>
      <li><strong>Acquisition Success:</strong> The adoption, engagement rates, and demonstrated value of Ayva were significant contributors to Bravado Health’s acquisition. The design system and workflows supporting multiple stakeholders were frequently highlighted in acquisition discussions.</li>
      <li><strong>Team Culture:</strong> Under my leadership, Ayva’s design team set a new standard for digital health UX, combining clinical rigor, empathy, and agile delivery.</li>
    </ul>`
  },
  {
    heading: 'Reflections',
    content: `The journey of building Ayva with Bravado Health reinforced the impact design can have on patient care and business outcomes. By enabling real-time insights, collaborative care, and advocate empowerment, Ayva advanced the standard for surgical recovery—and became a defining asset in Bravado Health’s success and acquisition.<br/><br/>Guiding a growing team through the uncertainty of the COVID-19 pandemic was a transformative responsibility. I was tasked not only with delivering a high-impact product, but also with cultivating resilience, empathy, and professional growth within my team. Mentoring young designers during this period was especially meaningful—helping them navigate remote collaboration, build confidence, and develop their own voices as contributors to a mission-driven product. This experience deepened my appreciation for the role of leadership in nurturing talent and sustaining momentum, even in the most unpredictable times.`
  }
];

export default function CaseStudyAyva() {
  return (
    <>
      <Helmet>
        <title>Ayva Case Study | James Young - Product Design Leader</title>
        <meta name="description" content="Case study: Ayva, a digital assistant for surgical care, designed by James Young to optimize and humanize pre- and post-operative workflows." />
      </Helmet>
      <CaseStudyTemplate
        title="Ayva: Redesigning Surgical Care With a Digital Assistant"
        company="Bravado Health"
        year="2018–2021"
        tags={["PRODUCT DESIGN", "LEADERSHIP", "HEALTHCARE UX"]}
        intro="Ayva, a product developed by Bravado Health, is a digital platform engineered to optimize and humanize pre- and post-operative surgical care. As Director of Product Design, I built and led a team of five, responsible for developing Ayva’s signature design language, user journey, and engagement strategy. The adoption and success of the Ayva platform played a significant role in Bravado Health’s successful acquisition."
        image={ayvaImage}
        platform="Web, Mobile"
        sections={sections}
        teamList={"4 Product Designers<br/>8 Engineers<br/>1 UX Writer<br/>1 Business Analyst<br/>1 Product Owner<br/>1 Product Manager"}
    />
    </>
  );
} 