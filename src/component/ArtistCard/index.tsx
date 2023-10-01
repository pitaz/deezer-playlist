import React from 'react';
import './index.scss';

interface ArtistCardProps {
  imageSrc: string;
  artistName: string;
  title: string;
  handleClick: (artistId: number) => void;
  id: number
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  imageSrc,
  artistName,
  title,
  handleClick,
  id
}) => {
  return (
    <div className="artist-card" onClick={() => handleClick(id)}>
      <img
        className="artist-image"
        src={imageSrc}
        alt={artistName}
      />
      <div className="artist-details">
        <h2 className="artist-name">{artistName}</h2>
        <p className="fans-count">{title}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
