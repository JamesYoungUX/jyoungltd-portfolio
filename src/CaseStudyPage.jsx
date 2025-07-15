import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyTemplate from './CaseStudyTemplate';
import caseStudies from './caseStudies.json';

function findCaseStudyById(id) {
  return caseStudies.find(cs => cs.id === id);
}

const CaseStudyPage = () => {
  const { id } = useParams();
  const caseStudy = findCaseStudyById(id);

  if (!caseStudy) {
    return (
      <div className="text-center py-32">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-lg">Sorry, we couldn&apos;t find that case study.</p>
      </div>
    );
  }

  return <CaseStudyTemplate {...caseStudy} />;
};

export default CaseStudyPage; 