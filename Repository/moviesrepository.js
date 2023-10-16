// repositories/movieRepository.js
const pool = require('../database'); // Import your database connection

class MoviesRepository {
  static getAllMovies(callback) {
    pool.query('SELECT * FROM movies', callback);
  }

  static createMovie(movieData, callback) {
    const { id, title, genres, year, photo } = movieData;
    pool.query(
      'INSERT INTO movies (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5)',
      [id, title, genres, year, photo],
      callback
    );
  }

  static updateMovieGenres(movieId, newGenres, callback) {
    pool.query('UPDATE movies SET genres = $1 WHERE id = $2', [newGenres, movieId], callback);
  }

  static deleteMovie(movieId, callback) {
    pool.query('DELETE FROM movies WHERE id = $1', [movieId], callback);
  }
}

module.exports = MoviesRepository;
