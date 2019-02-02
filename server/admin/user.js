var db = require('./../../database/db');

var users = {
    // 查询所有
    search: function (req,res) {
        db.search('ht_admin',function(e){
            res.send(e);
        })
    },
    // 查询所有
    update: function (req,res) {
        db.update('ht_admin',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = users;