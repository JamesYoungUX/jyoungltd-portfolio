import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders the copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/James Young. All rights reserved./i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
}); 