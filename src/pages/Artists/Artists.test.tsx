import React from 'react';
import { render, screen } from '@testing-library/react';
import Artists from './';

jest.mock('../../component/ArtistCard', () => () => <div data-testid="mock-artist-card" />);

test('renders Artists component with 10 ArtistCard components', () => {
  render(<Artists />);

  const artistsComponent = screen.getByTestId('artist-list');
  expect(artistsComponent).toBeInTheDocument();

  const artistCards = screen.getAllByTestId('mock-artist-card');
  expect(artistCards).toHaveLength(10);
});
