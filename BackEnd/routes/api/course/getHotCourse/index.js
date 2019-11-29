var express = require('express');
var getHotCourse = express.Router();

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 

getHotCourse.get('/getHotCourse', (req, res, next) => {//Not parameter

    let data;

    let sql = 'SELECT *,COUNT(re.ID) as TotalMember FROM course co JOIN record re ON co.ID = re.CourseID'+
    ' GROUP BY co.ID'+
    ' ORDER BY TotalMember DESC'+
    ' LIMIT 0,10';    

    //Begin get hot course
    connection.query(sql, function (error, results, fields) {
        data = {
            listHotCourse: results
        }
        res.send(data);
    });
    //End get hot course
});

module.exports = getHotCourse;