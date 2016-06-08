var User = require('../models/user');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

function addUser(req,res){
 var newUser = new User(req.body);
  newUser.save(function(err){
    if(err){console.log(err)}
      else
        res.redirect('/');
  })
}

function indexUsers(req , res){
  var users = User.find({}, function (err , users){
    res.json(users)
  })
}

module.exports = {
  addUser: addUser,
  indexUsers : indexUsers
}

