var router = require('express').Router();
var users_server = require('../../server/client/user');
// 添加新顾客
router.post('/add_users',function(req,res){
    users_server.add(req,res);
    // console.log(1);
})
// 查找顾客数据
router.post('/search_users',function(req,res){
    users_server.search(req,res);
})

// 更新顾客数据
router.post('/update_users',function(req,res){
    users_server.update(req,res);
})

module.exports = router;