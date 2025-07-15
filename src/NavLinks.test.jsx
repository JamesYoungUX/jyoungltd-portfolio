import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavLinks from './NavLinks';

describe('NavLinks', () => {
  test('renders the Home link', () => {
    render(
      <BrowserRouter>
        <NavLinks />
      </BrowserRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
}); 