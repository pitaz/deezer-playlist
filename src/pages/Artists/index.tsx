import React from "react";
import './index.scss'
import ArtistCard from "../../component/ArtistCard";

const Artists: React.FC = () => {
  return (
    <div className="artists" data-testid="artist-list">
      {Array.from(Array(10)).map((item, index) => (
        <ArtistCard
          key={index}
          artistName="John Doe"
          imageSrc="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          numberOfFans={10000}
        />
      ))}
    </div>
  );
};

export default Artists;
