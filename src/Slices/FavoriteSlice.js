import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.favoriteMovies.push(action.payload);
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    },
    removeFavoriteMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoritesSlice.actions;
export const selectFavoriteMovies = (state) => state.favorites.favoriteMovies;
export default favoritesSlice.reducer;
