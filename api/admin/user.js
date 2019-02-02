var router = require('express').Router();
var users_server = require('../../server/admin/user');
// 查询所有
router.post('/search_user',function(req,res){
    users_server.search(req,res);
    // console.log(1);
})
// 更新
router.post('/update',function(req,res){
    users_server.update(req,res);
})

module.exports = router;