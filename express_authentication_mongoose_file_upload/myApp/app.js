var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//routers make by me 
const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promoRouter');
const leadersRouter = require('./routes/leaderRouter');
//to established monogo db
const mongoose= require('mongoose');
//dishes model import (database - script)
const Dishes = require('./models/dishes');
//passport
var passport = require('passport');
var authenticate = require('./authentication/authentication');

//jwt
var config = require('./config/config');

//session is configured
var session = require('express-session');
var FileStore = require('session-file-store')(session);

//after jwt
const url = config.mongoUrl;
//const url = 'mongodb://localhost:27017/sample';
const connect = mongoose.connect(url);

connect.then((db)=>{
console.log('Connnected correctly');
},(error)=>{
  console.log(error);
});

var app = express();

app.use(passport.initialize());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//call to route page -> if there isa any request include- {'/dishes'}
app.use('/dishes', dishRouter);
app.use('/promotions',promotionsRouter);
app.use('/leaders',leadersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
