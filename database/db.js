var mysql = require('mysql');
var db_config = require('./db_config');

// 创建数据池
var pool = mysql.createPool(db_config);

var query = (sql, callback) => {
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log('连接错误');
            return
        } else {
            conn.query(sql, function (err, result) {
                if (err) {
                    console.log('sql error');
                } else {
                    callback(result);
                }
            })
        }
    })
}
// 格式化返回数据
function format_data(code, msg, data = []) {
    var obj = {
        code: code,
        msg: msg,
        data: data,
    }
    var json = JSON.stringify(obj);
    return json;
}
// 插入
function insert(tabname, data, callback) {
    // 数据处理
    let k = '';
    let v = '';
    for (let i in data) {
        k += i + ',';
        v += `'${data[i]}'` + ',';
    }
    k = k.substring(0, k.length - 1);
    v = v.substring(0, v.length - 1)
    // sql语句
    var sql = `insert into \`${tabname}\` (${k}) values (${v})`;
    query(sql, function (result) {
        var json = '';
        if (result) {
            json = format_data(0, '新增数据成功');
        } else {
            json = format_data(1, '新增数据失败');
        }
        callback(json);
    });
}
// 查询所有
function search(tabname, callback) {
    // // sql语句
    var sql = `select * from \`${tabname}\``;
    query(sql, function (result) {
        var json = '';
        if (result) {
            json = format_data(0, '新增查询成功', result);
        } else {
            json = format_data(1, '新增查询失败');
        }
        callback(json);
    });
}
// 分页查询
function search_limit(tabname, callback) {
    // // sql语句
    var sql = `select * from \`${tabname}\``;
    query(sql, function (result) {
        var json = '';
        if (result) {
            json = format_data(0, '新增查询成功', result);
        } else {
            json = format_data(1, '新增查询失败');
        }
        callback(json);
    });
}
// 根据某些字段查找
function search_info(tabname, data, callback) {
    let where_ = '';
    for (let i in data) {
        where_ += `${i}='${data[i]}' and `;
    }
    where_ += '1';
    let sql = `select * from \`${tabname}\` where ${where_}`;
    query(sql, function (result) {
        var json = '';
        if (result) {
            json = format_data(0, '新增查询成功', result);
        } else {
            json = format_data(1, '新增查询失败');
        }
        callback(json);
    });
}
// 更新数据
function update(tabname,data,callback){
    let set_ = where_ = '';
    where_ = 'id='+data['id']; //where条件
    delete data.id;  //删除对象中的id
    // 拼接修改字段字段
    for(let i in data){
        set_ += `${i}='${data[i]}',`;
    }
    let xx = set_.lastIndexOf(',');
    let aa = set_.substr(0,xx);

    let sql = `update \`${tabname}\` set ${aa} where ${where_}`;
    console.log(sql);
    query(sql, function (result) {
        var json = '';
        if (result) {
            json = format_data(0, '数据更新成功', result);
        } else {
            json = format_data(1, '数据更新失败');
        }
        callback(json);
    });
} 
// 删除一条数据
function deletes(tabname,data,callback){
    let where_ = `id=${data['id']}`;
    let sql = `DELETE FROM \`${tabname}\` WHERE ${where_}`;
    // 
    query(sql, function (result) {
        var json = '';
        if (result) {
            json = format_data(0, '数据删除成功');
        } else {
            json = format_data(1, '数据删除失败');
        }
        callback(json);
    });
}


module.exports = {
    insert,
    search,
    search_info,
    update,
    deletes,
    search_limit,
}



// sql
// 1.倒序  SELECT * FROM `article` ORDER BY id DESC
// 2.多表联查带倒序   SELECT a.id,a.title,a.author,a.spec,a.content,b.typename as tname from `article` a JOIN `type` b on a.typeid=b.id ORDER by a.id DESC

