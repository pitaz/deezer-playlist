import { Dispatch } from 'redux';
import {
  fetchArtistDetailsStart,
  fetchArtistDetailsSuccess,
  fetchArtistDetailsFailure,
} from '../slices/artistDetailsSlice';
import axios from 'axios';

export const fetchArtistDetails = (artistId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchArtistDetailsStart());
    try {
      const response = await axios.get(`DEEZER_ARTIST_DETAILS_API_URL/${artistId}`);
      const artistDetails = response.data; // Adjust this to match your API response structure
      dispatch(fetchArtistDetailsSuccess(artistDetails));
    } catch (error) {
      dispatch(fetchArtistDetailsFailure(error as string));
    }
  };
};
