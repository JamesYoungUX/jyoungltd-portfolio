import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  test('renders children', () => {
    render(
      <ThemeProvider>
        <div>Theme Test</div>
      </ThemeProvider>
    );
    expect(screen.getByText(/Theme Test/i)).toBeInTheDocument();
  });
}); 