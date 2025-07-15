import React from 'react';
import CaseStudyTemplate from './CaseStudyTemplate';
import { Helmet } from 'react-helmet-async';

const pearlImage = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'; // Placeholder, replace with actual image if available

const sections = [
  {
    heading: 'Overview',
    content: `When I joined Pearl Health, the company was a small, fast-moving startup with a bold vision: make value-based care work for every independent physician in the country. As one of the first employees (#17) my charge was to bring this vision to life—distilling layers of analytics into tools that clinicians would not only understand, but love. The product needed to break down workflow silos, provide at-a-glance clarity, and inspire trust, both with internal stakeholders and in the field.`
  },
  {
    heading: 'Challenge',
    content: `Launching from zero, we faced the simultaneous challenge of crafting a compelling product vision for providers, investors, and our own internal teams. Without a demo or working prototype, it was hard to convey the transformative power of our approach, so we created one. The design had to instantly communicate value, reduce complexity for clinicians new to value-based care, and create a distinct identity for Pearl in a crowded market—all while scaling rapidly to support fundraising and go-to-market efforts.`
  },
  {
    heading: 'Approach',
    content: `<ul>
      <li><strong>Design Leadership from Day One:</strong> As the founding designer, I led collaborative discovery with clinicians, engineers, and business leaders, mapping out core user journeys, requirements, and business needs.</li>
      <li><strong>Inventing the Pearl Experience:</strong> I established the initial design language—prioritizing clarity, friendliness, and approachability. I invented the hex map visualization, allowing users to see population risk and opportunity at a glance—a concept that quickly became a signature feature of the platform.</li>
      <li><strong>Prototyping to Accelerate Vision and Growth:</strong> With no existing application, I built detailed, interactive Figma and Axure prototypes demonstrating the dashboard, patient flows, and clinical impact. These clickable prototypes became core assets for the sales and growth teams and were instrumental in telling our story to investors.</li>
      <li><strong>Human-Centered Perspective:</strong> Early patient stories and feedback loops ensured the interface not only looked good, but solved real-world pain points for clinicians and their patients.</li>
    </ul>`
  },
  {
    heading: 'Solution',
    content: `The product that emerged was a clinician-focused dashboard, built from my design groundwork, centered on the dynamic hex map and a modular set of UI patterns for risk, outreach, and follow-up. Instead of overwhelming users with data, the interface highlighted the “next best action” for each patient and made population health approachable, actionable, and even enjoyable to navigate.`
  },
  {
    heading: 'Three Patient Stories',
    content: `<ul>
      <li><strong>“Samantha,” 82</strong>, was identified as high risk on the hex map due to a recent hospitalization. Her care team, alerted through our interface, promptly coordinated a follow-up—preventing costly complications.</li>
      <li><strong>“James,” 67</strong>, surfaced for overdue lab work and deteriorating engagement. The clear visual cue inspired a successful nurse outreach that got him back on track with his diabetes care plan.</li>
      <li><strong>“Maria,” 54</strong>, landed in a support-needed segment amid her Medicare transition. Guided by actionable prompts, her provider offered targeted social service referrals, improving her experience and outcomes.</li>
    </ul>`
  },
  {
    heading: 'Outcome',
    content: `<ul>
      <li><strong>Investor and Growth Enablement:</strong> My design prototypes became the foundation for fundraising and early partner demos. These assets were crucial in securing Pearl’s $7M Series A and forming the narrative for a subsequent Series B.</li>
      <li><strong>Sales & Onboarding:</strong> The prototypes were also adopted by sales and growth teams to give prospective clinics a firsthand “look and feel” experience—enabling rapid customer acquisition even before product launch.</li>
      <li><strong>Distinct Identity:</strong> The initial design language and hex map visualization set a new, recognizable standard in value-based care tooling and gave Pearl a strong, differentiated brand in the market.</li>
      <li><strong>Clinical Realities:</strong> The design system scaled from zero to serving real-world clinicians, leading to more targeted, successful patient interventions and measurable improvements in care quality and workflow efficiency.</li>
    </ul>`
  },
  {
    heading: 'Reflections',
    content: `Starting from a blank slate required vision, speed, and empathy. As the first product designer at Pearl Health, I was able to shape not just an application, but the foundation of a business—proving the power of design to accelerate growth, secure investment, and drive better healthcare for patients and physicians alike.<br/><br/>Joining Pearl Health as the first designer in a fast-paced startup environment was both a challenge and a privilege. I had the unique opportunity to shape not only the product’s user experience, but also the company’s design culture from the ground up. Working directly with the C-suite, I helped translate ambitious business goals into a tangible, user-centered application—bridging the gap between vision and execution. This close collaboration enabled rapid iteration, strategic alignment, and a shared sense of ownership that was critical to our success. The experience reinforced my belief in the power of design leadership to drive innovation, accelerate growth, and create meaningful impact for both clinicians and patients.`
  }
];

export default function CaseStudyPearl() {
  return (
    <>
      <Helmet>
        <title>Pearl Health Case Study | James Young - Product Design Leader</title>
        <meta name="description" content="Case study: Pearl Health, transforming value-based care through design-driven innovation, led by James Young." />
      </Helmet>
      <CaseStudyTemplate
        title="Pearl Health: Transforming Value-Based Care Through Design-Driven Innovation"
        company="Pearl Health"
        year="2021–2022"
        tags={["USER EXPERIENCE", "STRATEGY", "LEADERSHIP"]}
        intro="Pearl Health empowers independent primary care providers to thrive in value-based care models, surfacing clinically relevant, actionable insights via a platform that fits seamlessly into their everyday workflows. As the first product designer at Pearl, I played a foundational role—building the initial design language, conceiving the signature hex map patient interface, and helping evolve business strategy through thoughtful, human-centered design."
        image={pearlImage}
        platform="Web, Dashboard"
        sections={sections}
        teamList={"6 Engineers<br/>3 Data Scientists<br/>1 Business Analyst<br/>1 Product Manager"}
    />
    </>
  );
} 