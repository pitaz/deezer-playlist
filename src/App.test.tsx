// Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Home component', () => {
  render(
      <App />
  );

  const textElement = screen.getByText(/Artist Page/i);
  expect(textElement).toBeInTheDocument();
});
