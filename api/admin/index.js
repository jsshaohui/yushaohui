
var usersRouter = require('./user');
var roomtRouter = require('./roomt');
var roomRouter = require('./room');
var orderRouter = require('./order');

var objRouter = {
    '/user':usersRouter,
    '/roomt':roomtRouter,
    '/room':roomRouter,
    '/order':orderRouter,
}

module.exports = objRouter;