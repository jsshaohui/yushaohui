var db = require('./../../database/db');

var users = {
    // 添加
    add: function (req,res) {
        db.insert('ht_roomtype',req.body,function(e){
            res.send(e);
        })
    },
    // 查询所有
    search: function (req,res) {
        db.search('ht_roomtype',function(e){
            res.send(e);
        })
    },
    // 更新
    update: function (req,res) {
        db.update('ht_roomtype',req.body,function(e){
            res.send(e);
        })
    },
    // 删除
    delete: function (req,res) {
        db.deletes('ht_roomtype',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = users;