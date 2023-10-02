import React from 'react';
import { formatNumber } from '../../../utils/formatNumbers';

interface ArtistInfoProps {
  selectedArtist: any | undefined;
}

const ArtistInfoComponent: React.FC<ArtistInfoProps> = ({ selectedArtist }) => {
  return (
    <div className="artist-info">
      <div className="artist-image">
        <img src={selectedArtist?.picture_medium} alt={selectedArtist?.name} />
      </div>
      <div className="artist-text">
        <h1>{selectedArtist?.name}</h1>
        <p>{`${formatNumber(selectedArtist?.nb_fan as number)}`} fans</p>
      </div>
    </div>
  );
};

export default ArtistInfoComponent;
