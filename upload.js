const express = require('express');
const uploadRouter = express.Router();
const multer = require('multer');
const path = require('path');
const pool = require('./database'); // Pastikan untuk mengimpor 'pool' dari berkas database.js

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'upload'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: diskStorage });

uploadRouter.post('/file', multer({ storage: diskStorage }).single('photo'), (req, res) => {
    const file = req.file;
    console.log(file);
    res.json({ status: 'success', photo: `/file/${file.filename}` });
});

uploadRouter.put('/photo/:id', multer({ storage: diskStorage }).single('photo'), (req, res) => {
    const id = req.params.id; // Cara yang benar untuk mengambil ID dari URL
  
    // Periksa apakah file telah diunggah
    if (!req.file) {
      res.status(400).json({
        status: false,
        data: 'File foto tidak ditemukan.',
      });
    } else {
      // Gunakan req.file.buffer untuk mengakses data file yang diunggah
      const photoData = req.file.buffer;
      
      // URL lengkap, termasuk protokol (http) dan domain (localhost:8080)
      const baseUrl = 'http://localhost:8080';
      
      // Menyusun URL lengkap berdasarkan basePath dan nama file
      const filePath = baseUrl + `/upload/${req.file.filename}`;
  
      // Lakukan kueri SQL dengan parameter yang aman
      pool.query('UPDATE movies SET photo = $1 WHERE id = $2', [filePath, id], (err, result) => {
        if (err) {
          console.error('Kesalahan dalam kueri SQL:', err);
          res.status(500).json({
            status: false,
            data: 'Terjadi kesalahan dalam kueri SQL: ' + err.message,
          });
        } else {
          // Penanganan yang sukses
          console.log('Data foto berhasil diunggah dan kueri SQL berhasil dieksekusi.');
          res.status(200).json({
            status: true,
            data: 'File foto berhasil diunggah dan kueri SQL berhasil dieksekusi.',
          });
        }
      });
    }
  });
  
  

module.exports = uploadRouter;
