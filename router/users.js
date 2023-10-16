const express = require('express');
const userRouter = express.Router();
const UserController = require('../controller/userscontroller');

//MVC Pattern
userRouter.get('/read', UserController.getAllUsers);
userRouter.post('/create', UserController.createUser);
userRouter.put('/update/:id', UserController.updateUserGender);
userRouter.delete('/delete/:id', UserController.deleteUser);





module.exports = userRouter;