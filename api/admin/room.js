var router = require('express').Router();
var room_server = require('../../server/admin/room');
// 添加
router.post('/add_room',function(req,res){
    room_server.add(req,res);
    // console.log(1);
})
// 查找所有
router.post('/room_list',function(req,res){
    room_server.search(req,res);
    // console.log(1);
})
// 查找某一字段
router.post('/room_list_info',function(req,res){
    room_server.search_info(req,res);
    // console.log(1);
})
// 更新
router.post('/update_room',function(req,res){
    room_server.update(req,res);
})
// 删除一条
router.post('/delete_room',function(req,res){
    room_server.delete(req,res);
})
// 多表，room
router.post('/search_room',function(req,res){
    room_server.search_room(req,res);
})

module.exports = router;