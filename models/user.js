var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: false
  }
})

var User = mongoose.model('User', userSchema);
module.exports = User; 