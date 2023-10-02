import React from 'react';
import { truncateString } from '../../../utils/truncate';

interface AlbumsProps {
  albums: any | undefined;
}

const AlbumsComponent: React.FC<AlbumsProps> = ({ albums }) => {
  return (
    <div className="artist-albums">
      <h2>Albums</h2>
      <ul className="album-lists">
        {albums?.data?.map((album: any, index: number) => (
          <li key={index}>
            <div className="album-card" data-testid="album-card">
              <img src={album.cover_medium} alt={album.cover_medium} />
              <p className="album-title">{truncateString(album.title, 30)}</p>
              <p>{album.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsComponent;
