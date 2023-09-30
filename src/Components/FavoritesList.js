import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import Modal from './MovieModel';

const FavoritesList = () => {
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      {favoriteMovies.length === 0 ? (
        <div className="no-favorites-message">No favorites selected.</div>
      ) : (
        <div className="favorites-grid">
          {favoriteMovies.map((movie) => (
            <div key={movie.id} className="favorite-movie" onClick={() => handleMovieClick(movie)}>
              <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
              <p className="movie-title">{movie.title}</p>
            </div>
          ))}
        </div>
      )}
      {selectedMovie && <Modal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
};

export default FavoritesList;
