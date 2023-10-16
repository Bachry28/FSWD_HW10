// services/movieService.js
const MoviesRepository = require('../Repository/moviesrepository');

class moviesservices {
  static getAllMovies(callback) {
    MoviesRepository.getAllMovies(callback);
  }

  static createMovie(movieData, callback) {
    MoviesRepository.createMovie(movieData, callback);
  }

  static updateMovieGenres(movieId, newGenres, callback) {
    MoviesRepository.updateMovieGenres(movieId, newGenres, callback);
  }

  static deleteMovie(movieId, callback) {
    MoviesRepository.deleteMovie(movieId, callback);
  }
}

module.exports = moviesservices;
