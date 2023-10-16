// models/movieModel.js
const pool = require('../database'); // Impor koneksi database Anda

class UserModel {
  static getAllUsers(callback) {
    pool.query('SELECT * FROM users', callback);
  }

  static createUser(dataUser, callback) {
    const { id, email, gender, password, role } = dataUser;
    pool.query(
      'INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5)',
      [id, email, gender, password, role],
      callback
    );
  }

  static updateUserGender(idUser, genderBaru, callback) {
    pool.query('UPDATE users SET gender = $1 WHERE id = $2', [genderBaru, idUser], callback);
  }

  static deleteUser(idUser, callback) {
    pool.query('DELETE FROM users WHERE id = $1', [idUser], callback);
  }
}

module.exports = UserModel;
