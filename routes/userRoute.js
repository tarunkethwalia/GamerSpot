const Route = require('express').Router();
const userController = require('../controllers/userController');

Route.post('/SignUp', userController.SignUp);

Route.post('/Login', userController.Login);

module.exports = Route;