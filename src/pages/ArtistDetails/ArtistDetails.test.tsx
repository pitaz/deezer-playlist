// ArtistDetails.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistDetails from './';

test('renders ArtistDetails component with content', () => {
  render(<ArtistDetails />);

  const artistDetailsComponent = screen.getByTestId('artist-details');
  expect(artistDetailsComponent).toBeInTheDocument();

  const artistNameElement = screen.getByText('Jacob Collier');
  expect(artistNameElement).toBeInTheDocument();

  const fansCountElement = screen.getByText('382k fans');
  expect(fansCountElement).toBeInTheDocument();

  const topTracksHeader = screen.getByText('Top Tracks');
  expect(topTracksHeader).toBeInTheDocument();

  const albumsHeader = screen.getByText('Albums');
  expect(albumsHeader).toBeInTheDocument();

  const albumCards = screen.getAllByTestId('album-card');
  expect(albumCards).toHaveLength(4);
});
