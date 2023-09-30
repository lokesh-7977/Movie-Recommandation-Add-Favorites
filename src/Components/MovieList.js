import React from 'react';
import '../App.css';

const MovieList = ({ movies, onOpenDetails }) => {

  if (!movies || movies.length === 0 ) {
    return <div className="movie-list">No movies to display, Search For a movie..</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onOpenDetails(movie)}>
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details">
            <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>{movie.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
