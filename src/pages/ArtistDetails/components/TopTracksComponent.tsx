import React from 'react';
import { secondsToMinutesAndSeconds } from '../../../utils/timeFormat';

interface TopTracksProps {
  topTracks: any | undefined;
}

const TopTracksComponent: React.FC<TopTracksProps> = ({ topTracks }) => {
  return (
    <div className="artist-music">
      <h2>Top Tracks</h2>
      <ul>
        {topTracks?.data?.map((track: any, index: number) => (
          <li key={index} className="track-list-row">
            <p>{track.title}</p>
            <p>{secondsToMinutesAndSeconds(track.duration)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracksComponent;
