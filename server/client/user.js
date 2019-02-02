var db = require('./../../database/db');

var users = {
    // 添加
    add: function (req,res) {
        db.insert('ht_customer',req.body,function(e){
            res.send(e);
        })
    },
    // 查询所有
    search: function (req,res) {
        db.search('ht_customer',function(e){
            res.send(e);
        })
    },
    // 查询所有
    update: function (req,res) {
        db.update('ht_customer',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = users;