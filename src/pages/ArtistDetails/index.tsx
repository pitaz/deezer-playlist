import React, { useState } from "react";
import "./index.scss";

interface ArtistDetailsProps {
  imageSrc: string;
  name: string;
  fans: number;
  albums: string[];
  songs: string[];
}

const ArtistDetails = ({ id }: { id?: string }) => {
  const [artist, setData] = useState<ArtistDetailsProps>();
  return (
    <div className="container" data-testid="artist-details">
      <div className="artist-details-container">
        <div className="artist-info">
          <div className="artist-image">
            <img
              src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={artist?.name}
            />
          </div>
          <div className="artist-text">
            <h1>Jacob Collier</h1>
            <p>382k fans</p>
          </div>
        </div>
        <div className="artist-music">
          <h2>Top Tracks</h2>
          <ul>
            {artist?.albums.map((album, index) => (
              <li key={index}>{album}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="artist-albums">
          <h2>Albums</h2>
          <ul className="album-lists">
            {Array.from(Array(4)).map((album, index) => (
              <li key={index}>
                <div className="album-card" data-testid="album-card">
                  <img src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <p>Album title</p>
                  <p>Album year</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default ArtistDetails;
