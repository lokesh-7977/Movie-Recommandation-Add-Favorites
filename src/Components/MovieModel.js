import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie, selectFavoriteMovies } from '../Slices/FavoriteSlice';
import '../App.css';

const MovieModel = ({ movie, onClose }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);

  const isMovieInFavorites = favoriteMovies.some(favMovie => favMovie.id === movie.id);

  const handleAddToFavorite = () => {
    if (!isMovieInFavorites) {
      dispatch(addFavoriteMovie(movie));
    }
  };

  const handleRemoveFromFavorite = () => {
    if (isMovieInFavorites) {
      dispatch(removeFavoriteMovie(movie.id));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
          <h2 style={{ fontWeight: 'bold' }}>{movie.title}</h2>
          <p><b>Release Date:</b> {movie.release_date}</p>
          <p><b>Rating:</b> {movie.vote_average}</p>
          <p><b>Overview:</b> {movie.overview}</p>
          {isMovieInFavorites ? (
            <button className='favbtn' onClick={handleRemoveFromFavorite}>Remove from Favorites</button>
          ) : (
            <button className='ubtn' onClick={handleAddToFavorite}>Add to Favorites</button>
          )}
          <button className='close' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default MovieModel;
