import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { RootState } from "../../store";
import {
  fetchArtistInfo,
  fetchArtistTop,
  fetchArtistAlbum,
} from "../../store/actions/artistsActions";
import { useParams } from "react-router-dom";
import { secondsToMinutesAndSeconds } from "../../utils/timeFormat";
import { formatNumber } from "../../utils/formatNumbers";
import { truncateString } from "../../utils/truncate";
import ArtistInfoComponent from "./components/ArtistInfoComponent";
import TopTracksComponent from "./components/TopTracksComponent";
import AlbumsComponent from "./components/AlbumsComponent";

const ArtistDetails = () => {
  const dispatch = useDispatch<any>();
  const { selectedArtist, loading, topTracks, albums } = useSelector(
    (state: RootState) => state.artists
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchArtistInfo(id));
      dispatch(fetchArtistTop(id));
      dispatch(fetchArtistAlbum(id));
    }
  }, [dispatch]);
  return (
    <div className="container" data-testid="artist-details">
    <div className="artist-details-container">
      <ArtistInfoComponent selectedArtist={selectedArtist} />
      <TopTracksComponent topTracks={topTracks} />
    </div>
    <AlbumsComponent albums={albums} />
  </div>
  );
};

export default ArtistDetails;
