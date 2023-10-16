const express = require('express');
const userrepoRouter = express.Router();
const usersservices = require('../Services/usersservices');

//Repository Pattern
userrepoRouter.get('/read', (req, res) => {
  usersservices.getAllUsers((err, result) => {
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

userrepoRouter.post('/create', (req, res) => {
  const userData = req.body;
  usersservices.createUser(userData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Gagal menambahkan data ke database' });
    } else {
      res.status(201).json({ status: 'success' });
    }
  });
});

userrepoRouter.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const newGender = req.body.gender;
  usersservices.updateUserGender(userId, newGender, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Gagal memperbarui data di database' });
    } else {
      res.status(201).json({ status: 'success' });
    }
  });
});

userrepoRouter.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;
  usersservices.deleteUser(userId, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Gagal menghapus data dari database' });
    } else {
      res.status(201).json({ status: 'success' });
    }
  });
});



module.exports = userrepoRouter;