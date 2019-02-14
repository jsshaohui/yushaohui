var homeObj = require('./home');
var registerObj = require('./register');
var loginObj = require('./login');
var personalObj = require('./personal');
var roomListObj = require('./room_list');
var addOrderObj = require('./add_order');


var routerObj = [homeObj,registerObj,loginObj,personalObj,roomListObj,addOrderObj];

module.exports = routerObj;
