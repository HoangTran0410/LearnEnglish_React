var util = require('../../Util/util')
var connection = util.connectMysql() // Get connection from server my sql 
//Begin get data
var getData = function(sql){
    return new Promise(function(resolve,reject){
    
        connection.query(sql, function (error, results, fields) {
        if(error){
            console.log('ERROR at '+sql)
            results = -1
        }

            resolve(results)
        })
    })
    

}

module.exports = {
    getData
    }