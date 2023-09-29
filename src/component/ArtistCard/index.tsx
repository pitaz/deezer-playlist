import React from 'react';
import './index.scss';

interface ArtistCardProps {
  imageSrc: string;
  artistName: string;
  numberOfFans: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  imageSrc,
  artistName,
  numberOfFans,
}) => {
  return (
    <div className="artist-card">
      <img
        className="artist-image"
        src={imageSrc}
        alt={artistName}
      />
      <div className="artist-details">
        <h2 className="artist-name">{artistName}</h2>
        <p className="fans-count">{`${numberOfFans} fans`}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
