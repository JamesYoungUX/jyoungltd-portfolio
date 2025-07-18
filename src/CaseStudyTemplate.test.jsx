/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CaseStudyTemplate from './CaseStudyTemplate';

// Mock react-router-dom hooks
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({ pathname: '/' }),
    Link: (props) => <a {...props} />
  };
});

// Mock Firestore
jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(),
    doc: jest.fn(),
    getDoc: jest.fn(() => Promise.resolve({
      exists: () => true,
      data: () => ({
        title: 'Mock Case Study',
        company: 'Mock Company',
        tags: ['MOCK'],
        intro: 'Mock intro',
        image: '',
        details: {
          teamMembers: '1 Mock Designer',
          methodologies: 'Mock Methodology',
          platform: 'Mock Platform',
          role: 'Mock Role',
          timeline: '2023'
        },
        sections: {
          'Project Overview': { content: 'Mock Overview', images: [] },
          'Challenge': { content: '', images: [] },
          'Approach': { content: '', images: [] },
          'Process': { content: '', images: [] },
          'Key Solutions': { content: '', images: [] },
          'Reflections': { content: '', images: [] }
        }
      })
    }))
  };
});

describe('CaseStudyTemplate (Firestore)', () => {
  test('renders the case study title from Firestore', async () => {
    render(
      <MemoryRouter>
        <CaseStudyTemplate id="mock-id" />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/Mock Case Study/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Mock Company/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Overview/i)).toBeInTheDocument();
  });
}); 