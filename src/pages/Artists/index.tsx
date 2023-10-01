import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './index.scss'
import ArtistCard from "../../component/ArtistCard";
import { RootState } from "../../store";
import { fetchArtistInfo } from '../../store/actions/artistsActions';
import Loader from "../../component/Loader";
import { useNavigate, useNavigation } from "react-router-dom";

const Artists: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { searchResults, loading } = useSelector((state: RootState) => state.artists);
  const navigate = useNavigate();

  const handleArtistClick = (artistId: number) => {
    navigate(`/artist/${artistId}`)
  };

  if(loading) {
   return <Loader />;
  }

  return (
    <div className="artists" data-testid="artist-list">
      {searchResults?.data?.map((item: any, index: number) => (
        <ArtistCard
          key={index}
          id={item.artist.id}
          artistName={item.artist.name}
          imageSrc={item.artist.picture_medium}
          title={item.title_short}
          handleClick={() =>handleArtistClick(item.artist.id)}
        />
      ))}
    </div>
  );
};

export default Artists;
