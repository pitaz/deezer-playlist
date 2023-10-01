import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistInfoComponent from './ArtistInfoComponent'; // Replace with the actual path to your ArtistInfoComponent file

describe('ArtistInfoComponent', () => {
  it('renders artist information correctly', () => {
    const selectedArtistData = {
      name: 'Artist Name',
      picture_medium: 'artist.jpg',
      nb_fan: 10000,
    };

    render(<ArtistInfoComponent selectedArtist={selectedArtistData} />);

    expect(screen.getByText('Artist Name')).toBeInTheDocument();
    const artistImage = screen.getByAltText('Artist Name');
    expect(artistImage).toBeInTheDocument();
    expect(artistImage).toHaveAttribute('src', 'artist.jpg');
    expect(screen.getByText('10.0K fans')).toBeInTheDocument();
  });
});
