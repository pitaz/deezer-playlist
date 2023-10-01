import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface ArtistsState {
  searchResults: SearchResults;
  selectedArtist: any | null;
  loading: boolean;
  topTracks: any;
  albums: any;
}

export const initialState: ArtistsState = {
  searchResults: {
    data: [],
    next: '',
    total: 0
  },
  selectedArtist: null,
  topTracks: null,
  albums: null,
  loading: false,
};

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    searchArtistsStart(state) {
      state.loading = true;
    },
    searchArtistsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.searchResults = action.payload;
    },
    searchArtistsFailure(state) {
      state.loading = false;
    },
    selectArtist(state, action: PayloadAction<any>) {
      state.selectedArtist = action.payload.data;
    },
    selectArtistTopTracks(state, action: PayloadAction<any>) {
      state.topTracks = action.payload.data;
    },
    selectArtistAlbums(state, action: PayloadAction<any>) {
      state.albums = action.payload.data;
    },
  },
});

export const {
  searchArtistsStart,
  searchArtistsSuccess,
  searchArtistsFailure,
  selectArtist,
  selectArtistTopTracks,
  selectArtistAlbums
} = artistsSlice.actions;

export default artistsSlice.reducer;
