var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var usersController = require('../controllers/users');
var router = express.Router();
var User = require('../models/user');
var twitterController = require('../controllers/twitterController');
var instagramController = require('../controllers/instagramController');




router.route('/twitter')
.get(twitterController.getTweets)

router.route('/instagram')
.get(instagramController.authorize_user);

router.route('/instagram/callback')
.get(instagramController.handleauth);

module.exports = router