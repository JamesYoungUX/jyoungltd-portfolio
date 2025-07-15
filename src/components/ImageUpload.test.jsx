import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageUpload from './ImageUpload';

describe('ImageUpload', () => {
  test('renders the upload heading', () => {
    render(<ImageUpload />);
    expect(screen.getByText(/Image Upload/i)).toBeInTheDocument();
  });
}); 