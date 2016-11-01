var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

var passport = require('passport');
var authentication = require('./database/authentication');

var landingPage = require('./routes/index');
var addUserPage = require('./routes/addUser');
var p404 = require('./routes/404');
var databaseUser = require('./database/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'frontend/.build'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'frontend/.build', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: ']i[!99~8@4IM~T{9ybAd',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'frontend/.build')));


mongoose.connect('mongodb://localhost/dev', function(err) {
  if (err) {
  	throw err;
  }
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!!
});
// require all database models
fs.readdirSync(__dirname + '/database').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/database/' + filename);
})

// landing page
app.use('/', landingPage);
// register
app.use('/newUser', addUserPage);
app.post('/api/addUser', authentication.registerUser);
//login
app.post('/api/login', authentication.authenticateLocal);
app.post('/api/logout',
  function(req, res){
    req.logout();
    res.status(200).send();
  });
app.get('/api/getCredentials',function(req, res){
  if (req.isAuthenticated()) {
    res.send({user: req.user.username});
  } else {
    res.status(401).send({status: 401, message: 'No user logged in.'});
  }
});
// 404
app.use('*', p404);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
