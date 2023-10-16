// controllers/movieController.js
const UserModel = require('../models/usermodel');
const UserView = require('../views/viewsuser');

class UserController {
  static getAllUsers(req, res) {
    UserModel.getAllUsers((err, result) => {
      if (err) {
        UserView.renderError(res, { error: 'Gagal mengambil data dari database' });
      } else if (result.rows.length === 0) {
        UserView.renderNotFound(res);
      } else {
        UserView.renderUser(res, result.rows);
      }
    });
  }

  static createUser(req, res) {
    const datausers = req.body;
    UserModel.createUser(datausers, (err) => {
      if (err) {
        UserView.renderError(res, err);
      } else {
        UserView.renderSuccess(res);
      }
    });
  }

  static updateUserGender(req, res) {
    const idUsers = req.params.id;
    const genderBaru = req.body.gender;
    UserModel.updateUserGender(idUsers, genderBaru, (err) => {
      if (err) {
        UserView.renderError(res, err);
      } else {
        UserView.renderSuccess(res);
      }
    });
  }

  static deleteUser(req, res) {
    const idUser = req.params.id;
    UserModel.deleteUser(idUser, (err) => {
      if (err) {
        UserView.renderError(res, err);
      } else {
        UserView.renderSuccess(res);
      }
    });
  }
}

module.exports = UserController;
