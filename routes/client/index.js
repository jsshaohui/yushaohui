var homeObj = require('./home');
var registerObj = require('./register');
var loginObj = require('./login');
var personalObj = require('./personal');


var routerObj = [homeObj,registerObj,loginObj,personalObj];

module.exports = routerObj;
