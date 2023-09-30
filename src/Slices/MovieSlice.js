import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesList: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.moviesList;
export default moviesSlice.reducer;
