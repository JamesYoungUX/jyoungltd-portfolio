import React from 'react';
import { render, screen } from '@testing-library/react';
import CaseStudyTemplate from './CaseStudyTemplate';

describe('CaseStudyTemplate', () => {
  test('renders the case study title', () => {
    render(
      <CaseStudyTemplate
        title="Test Case Study"
        company="Test Company"
        year="2023"
        tags={['TAG1']}
        intro="Intro text"
        image=""
        sections={[]}
        platform="Web"
        teamList="1 Designer"
      />
    );
    expect(screen.getByText(/Test Case Study/i)).toBeInTheDocument();
  });
}); 