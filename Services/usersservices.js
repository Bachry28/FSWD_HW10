// services/movieService.js
const UsersRepository = require('../Repository/usersreposity');

class usersservice {
  static getAllUsers(callback) {
    MoviesRepository.getAllUsers(callback);
  }

  static createUser(userData, callback) {
    MoviesRepository.createUser(userData, callback);
  }

  static updateUserGender(userId, newGender, callback) {
    MoviesRepository.updateUserGender(userId, newGender, callback);
  }

  static deleteUser(userId, callback) {
    MoviesRepository.deleteUser(userId, callback);
  }
}

module.exports = usersservice;
