import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie, selectFavoriteMovies } from './Slices/FavoriteSlice';
import MovieList from './Components/MovieList';
import MovieModal from './Components/MovieModel';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesList from './Components/FavoritesList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);

  const handleSearch = async (query) => {
    const apiKey = 'f2a0ef0dd7753ac7d96c839322528b95';

    if (query.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        const movies = response.data.results;
        setMovies(movies);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    } else {
      setMovies([]);
    }
  };

  const handleAddToFavorite = (movie) => {
    dispatch(addFavoriteMovie(movie));
  };

  const handleRemoveFromFavorite = (movie) => {
    dispatch(removeFavoriteMovie(movie));
  };

  const handleOpenDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <input
                  className='search-input'
                  type="text"
                  placeholder="Search for movies..."
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <MovieList
                  movies={movies}
                  favoriteMovies={favoriteMovies}
                  onOpenDetails={handleOpenDetails}
                  onAddToFavorite={handleAddToFavorite}
                  onRemoveFromFavorite={handleRemoveFromFavorite}
                />
                {selectedMovie && (
                  <MovieModal
                    movie={selectedMovie}
                    onClose={handleCloseDetails}
                  />
                )}
              </div>
            }
          /> 
          <Route path="/favorites" element={<FavoritesList/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
