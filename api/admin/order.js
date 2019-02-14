var router = require('express').Router();
var order_server = require('../../server/admin/order');
// 添加
router.post('/add_order',function(req,res){
    order_server.add(req,res);
    // console.log(1);
})
// 查找所有 多表
router.post('/search_order',function(req,res){
    order_server.search(req,res);
})
// 查找某一字段 多表
router.post('/search_order_info',function(req,res){
    order_server.search_order_info(req,res);
    // console.log(1);
})
// 更新
router.post('/update_order',function(req,res){
    order_server.update(req,res);
})

module.exports = router;