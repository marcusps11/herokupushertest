var mongoose = require('mongoose');
var Schema = mongoose.Schema


var mailSchema = new mongoose.Schema({
  email: String,
  name: String,
  msg: String


})

var Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;
