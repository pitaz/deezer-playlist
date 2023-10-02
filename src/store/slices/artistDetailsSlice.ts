
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';

interface ArtistDetails {
  id: number;
  name: string;
}

interface ArtistDetailsState {
  artist: ArtistDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: ArtistDetailsState = {
  artist: null,
  loading: false,
  error: null,
};

const artistDetailsSlice = createSlice({
  name: 'artistDetails',
  initialState,
  reducers: {
    fetchArtistDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchArtistDetailsSuccess(state, action: PayloadAction<ArtistDetails>) {
      state.loading = false;
      state.artist = action.payload;
    },
    fetchArtistDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchArtistDetailsStart,
  fetchArtistDetailsSuccess,
  fetchArtistDetailsFailure,
} = artistDetailsSlice.actions;

export const selectArtistDetails = (state: RootState) => state.artistDetails.artist;
export const selectArtistDetailsLoading = (state: RootState) => state.artistDetails.loading;
export const selectArtistDetailsError = (state: RootState) => state.artistDetails.error;

export default artistDetailsSlice.reducer;
