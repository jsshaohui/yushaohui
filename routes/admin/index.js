var loginObj = require('./login');
var homeObj = require('./home');
var userListObj = require('./users');
var updatePwObj = require('./update_pw');
var addRoomtObj = require('./add_roomt');
var roomtListObj = require('./roomt_list');
var addroomObj = require('./add_room');
var roomListObj = require('./room_list');
var hallEnterObj = require('./hall_enter');
var addOrderObj = require('./add_order');
var orderListObj = require('./order_list');
var orderCountObj = require('./order_count');


var routerObj = [
    loginObj,homeObj,userListObj,updatePwObj,addRoomtObj,roomtListObj,addroomObj,roomListObj,hallEnterObj,addOrderObj,orderListObj,orderCountObj
];

module.exports = routerObj;
