import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import Header from './Header';

describe('Header', () => {
  test('renders the main navigation link', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(screen.getByText(/James Young/i)).toBeInTheDocument();
  });
}); 