// Navbar.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '.';

test('renders Navbar component', () => {
  render(<Navbar />);
  
  const navbarElement = screen.getByTestId('navbar');
  const logoElement = screen.getByText('Deezer');
  const searchInput = screen.getByPlaceholderText('Search');
  
  expect(navbarElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
