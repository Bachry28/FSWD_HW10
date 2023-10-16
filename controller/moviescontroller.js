// controllers/movieController.js
const MovieModel = require('../models/moviemodel');
const MovieView = require('../views/viewsmovies');

class MovieController {
  static getAllMovies(req, res) {
    MovieModel.getAllMovies((err, result) => {
      if (err) {
        MovieView.renderError(res, { error: 'Gagal mengambil data dari database' });
      } else if (result.rows.length === 0) {
        MovieView.renderNotFound(res);
      } else {
        MovieView.renderMovies(res, result.rows);
      }
    });
  }

  static createMovie(req, res) {
    const dataFilm = req.body;
    MovieModel.createMovie(dataFilm, (err) => {
      if (err) {
        MovieView.renderError(res, err);
      } else {
        MovieView.renderSuccess(res);
      }
    });
  }

  static updateMovieGenres(req, res) {
    const idFilm = req.params.id;
    const genresBaru = req.body.genres;
    MovieModel.updateMovieGenres(idFilm, genresBaru, (err) => {
      if (err) {
        MovieView.renderError(res, err);
      } else {
        MovieView.renderSuccess(res);
      }
    });
  }

  static deleteMovie(req, res) {
    const idFilm = req.params.id;
    MovieModel.deleteMovie(idFilm, (err) => {
      if (err) {
        MovieView.renderError(res, err);
      } else {
        MovieView.renderSuccess(res);
      }
    });
  }
}

module.exports = MovieController;
