var db = require('./../../database/db');

var room = {
    // 添加
    add: function (req,res) {
        db.insert('ht_room',req.body,function(e){
            res.send(e);
        })
    },
    // 查询所有
    search: function (req,res) {
        db.search('ht_room',function(e){
            res.send(e);
        })
    },
    // 查询某一字段
    search_info: function (req,res) {
        db.search_info('ht_room',req.body,function(e){
            res.send(e);
        })
    },
    // 更新
    update: function (req,res) {
        db.update('ht_room',req.body,function(e){
            res.send(e);
        })
    },
    // 删除
    delete: function (req,res) {
        db.deletes('ht_room',req.body,function(e){
            res.send(e);
        })
    },
    // 多表,room
    search_room: function (req,res) {
        db.search_room(req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = room;