var mysql = require('mysql');
function connectMysql(){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'learnenglish'
    });
    return connection;
}
var andWhere = function (sql, option, operator, param) {
    if( sql.indexOf('WHERE') != -1 ){
        sql += ' AND '+option+' '+operator+' '+param;
      
    }
    else {

        sql +=' WHERE '+option+' '+operator+' '+param;
       
    }
    return sql;
    
}


module.exports = {
    connectMysql,
    andWhere
}
// Cac module tien ich
const os =require('os');// Lấy ra những thông tin máy và hdh
const path = require('path')// Cung cấp tính năng định dạng lại đường dẫn thư mục và các chức năng liên quan đến đường dẫn
