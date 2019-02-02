var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/admin/index'); //后台页面路由
var clientRouter = require('./routes/client/index'); //前台页面路由

var adminapiRouter = require('./api/admin/index'); //后台api路由
var clientapiRouter = require('./api/client/index'); //前台api路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 后台页面路由挂载
for(var i in indexRouter){
  app.use('/admin',indexRouter[i]);
}
// 前台页面路由挂载
for(var i in clientRouter){
  app.use('/client',clientRouter[i]);
}

// 后台api
for(var i in adminapiRouter){
  app.use('/api/admin'+i,adminapiRouter[i]);
}
// 前台api
for(var i in clientapiRouter){
  app.use('/api/client'+i,clientapiRouter[i]);
}


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
