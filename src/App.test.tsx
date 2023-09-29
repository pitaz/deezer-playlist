// Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Home component', () => {
  render(
      <App />
  );

  const textElement = screen.getByTestId('artist-list');
  expect(textElement).toBeInTheDocument();
});
