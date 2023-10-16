// views/movieView.js
class MovieView {
    static renderMovies(res, movies) {
      res.json(movies);
    }
  
    static renderSuccess(res) {
      res.status(201).json({ status: 'success' });
    }
  
    static renderError(res, error) {
      console.error(error);
      res.status(500).json(error);
    }
  
    static renderNotFound(res) {
      res.status(404).json({ error: 'Film tidak ditemukan' });
    }
  }
  
  module.exports = MovieView;
  