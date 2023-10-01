import React from 'react';
import { render, screen } from '@testing-library/react';
import TopTracksComponent from './TopTracksComponent'; // Replace with the actual path to your TopTracksComponent file

describe('TopTracksComponent', () => {
  it('renders top tracks correctly', () => {
    const topTracksData = {
      data: [
        {
          title: 'Track 1',
          duration: 180,
        },
        {
          title: 'Track 2',
          duration: 240,
        },
      ],
    };

    render(<TopTracksComponent topTracks={topTracksData} />);
    expect(screen.getByText('Track 1')).toBeInTheDocument();
    expect(screen.getByText('Track 2')).toBeInTheDocument();
    expect(screen.getByText('03:00')).toBeInTheDocument();
    expect(screen.getByText('04:00')).toBeInTheDocument();
  });
});
