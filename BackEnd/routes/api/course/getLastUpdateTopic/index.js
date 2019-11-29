var express = require('express');
var getLastUpdateTopic = express.Router();

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 

getLastUpdateTopic.get('/getLastUpdateTopic', (req, res, next) => {//Not parameter
    
    let data;
    
    let sql = 'SELECT * FROM topic ORDER BY LastModifiedDate DESC '+
    ' LIMIT 0,10';    

    //Begin get last update topic
    connection.query(sql, function (error, results, fields) {
        data = {
            LastUpdateTopics: results
        }
        res.send(data);
    });
    //End get last update topic
});

module.exports = getLastUpdateTopic;