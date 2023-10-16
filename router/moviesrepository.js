
const express = require('express');
const movierepoRouter = express.Router();
const moviesservices = require('../Services/moviesservices');

//Reposity Pattern
movierepoRouter.get('/read', (req, res) => {
  moviesservices.getAllMovies((err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Gagal mengambil data dari database' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Film tidak ditemukan' });
    }

    res.json(result.rows);
  });
});

movierepoRouter.post('/create', (req, res) => {
  const movieData = req.body;
  moviesservices.createMovie(movieData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Gagal menambahkan data ke database' });
    } else {
      res.status(201).json({ status: 'success' });
    }
  });
});

movierepoRouter.put('/update/:id', (req, res) => {
  const movieId = req.params.id;
  const newGenres = req.body.genres;
  moviesservices.updateMovieGenres(movieId, newGenres, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Gagal memperbarui data di database' });
    } else {
      res.status(201).json({ status: 'success' });
    }
  });
});

movierepoRouter.delete('/delete/:id', (req, res) => {
  const movieId = req.params.id;
  moviesservices.deleteMovie(movieId, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Gagal menghapus data dari database' });
    } else {
      res.status(201).json({ status: 'success' });
    }
  });
});

module.exports = movierepoRouter;
