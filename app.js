var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require('morgan');
var mongoose = require('mongoose');
var router = express.Router();
var favicon = require('serve-favicon');
var Mail = require('./models/mail');
var sendgrid = require('sendgrid')("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");
var email = new sendgrid.Email();
var port = process.env.PORT || 3000;
var databaseURL = process.env.MONGOLAB_URI || 'mongodb://localhost/forestroad';

mongoose.connect(databaseURL);

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.post('/marcus',function(req, res) {
  var msg = {
    to:       'marcusps1@gmail.com',
    from:     req.body.email,
    subject:  'Hello World',
    text:     req.body.msg
  };

  sendgrid.send(msg, function(err, msg) {
  console.log(msg)
    if (err) {
      res.json(err);
    } else {
      res.json({
        data: msg,
        status: 'success'
      });
    }
  });
});

app.get('/', function(req,res){
  res.render('index')
});


app.listen(port, function(){
  console.log('listening on port 3000')
});
