
import { Dispatch } from 'redux';
import axios from 'axios';
import { searchArtistsStart, searchArtistsSuccess, searchArtistsFailure, selectArtist, selectArtistTopTracks, selectArtistAlbums } from '../slices/artistsSlice';

const searchArtistsFromDeezer = async (query: string) => {
  try {
    const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${query}&index=0&limit=10`);
    const data = response;
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const searchArtists = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(searchArtistsStart());
    const artists = await searchArtistsFromDeezer(query);
    dispatch(searchArtistsSuccess(artists));
  } catch (error) {
    dispatch(searchArtistsFailure());
    console.error('Error searching artists:', error);
  }
};

export const handlenext = (url: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(searchArtistsStart());
    const artists = await axios.get(`https://api.allorigins.win/raw?url=${url}`);
    console.log('artists :>> ', artists);
    dispatch(searchArtistsSuccess(artists.data));
  } catch (error) {
    dispatch(searchArtistsFailure());
    console.error('Error searching artists:', error);
  }
};

export const fetchArtistInfo = (artistId: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${artistId}`);
    dispatch(selectArtist(response));
  } catch (error) {
    console.error('Error fetching artist info:', error);
  }
};

export const fetchArtistTop = (artistId: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${artistId}/top?limit=5`);
    dispatch(selectArtistTopTracks(response));
  } catch (error) {
    console.error('Error fetching artist info:', error);
  }
};

export const fetchArtistAlbum = (artistId: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${artistId}/albums?limit=5`);
    dispatch(selectArtistAlbums(response));
  } catch (error) {
    console.error('Error fetching artist info:', error);
  }
};