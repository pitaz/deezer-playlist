import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumsComponent from './AlbumsComponent'; // Replace with the actual path to your AlbumsComponent file

describe('AlbumsComponent', () => {
  it('renders the album list correctly', () => {
    const albumsData = {
      data: [
        {
          title: 'Album 1',
          cover_medium: 'album1.jpg',
          release_date: '2023-01-01',
        },
        {
          title: 'Album 2',
          cover_medium: 'album2.jpg',
          release_date: '2023-02-01',
        },
      ],
    };

    render(<AlbumsComponent albums={albumsData} />);

    expect(screen.getByText('Album 1')).toBeInTheDocument();
    expect(screen.getByText('Album 2')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('2023-02-01')).toBeInTheDocument();
  });

});
