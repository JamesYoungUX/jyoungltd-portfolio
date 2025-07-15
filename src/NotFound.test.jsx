import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  test('renders the 404 heading', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
}); 