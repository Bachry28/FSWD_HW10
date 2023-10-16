// models/movieModel.js
const pool = require('../database'); // Impor koneksi database Anda

class MovieModel {
  static getAllMovies(callback) {
    pool.query('SELECT * FROM movies', callback);
  }

  static createMovie(dataFilm, callback) {
    const { id, title, genres, year, photo } = dataFilm;
    pool.query(
      'INSERT INTO movies (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5)',
      [id, title, genres, year, photo],
      callback
    );
  }

  static updateMovieGenres(idFilm, genresBaru, callback) {
    pool.query('UPDATE movies SET genres = $1 WHERE id = $2', [genresBaru, idFilm], callback);
  }

  static deleteMovie(idFilm, callback) {
    pool.query('DELETE FROM movies WHERE id = $1', [idFilm], callback);
  }
}

module.exports = MovieModel;
