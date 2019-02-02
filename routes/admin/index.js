var loginObj = require('./login');
var homeObj = require('./home');
var userListObj = require('./users');
var updatePwObj = require('./update_pw');


var routerObj = [loginObj,homeObj,userListObj,updatePwObj];

module.exports = routerObj;
