var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var usersController = require('../controllers/users');
var router = express.Router();
var User = require('../models/user');

router.route('/')
  .get(usersController.homePage)
  .post(usersController.addUser)