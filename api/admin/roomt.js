var router = require('express').Router();
var roomt_server = require('../../server/admin/roomt');
// 添加
router.post('/add_roomt',function(req,res){
    roomt_server.add(req,res);
    // console.log(1);
})
// 查找所有
router.post('/roomt_list',function(req,res){
    roomt_server.search(req,res);
    // console.log(1);
})
// 更新
router.post('/update_roomt',function(req,res){
    roomt_server.update(req,res);
})
// 删除一条
router.post('/delete_roomt',function(req,res){
    roomt_server.delete(req,res);
})

module.exports = router;