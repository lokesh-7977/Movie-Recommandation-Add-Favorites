import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Slices/MovieSlice';
import favoritesReducer from './Slices/FavoriteSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});

export default store;
