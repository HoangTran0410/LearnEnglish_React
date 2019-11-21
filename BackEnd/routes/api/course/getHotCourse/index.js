var express = require('express');
var getHotCourse = express.Router();

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 

getHotCourse.get('/getHotCourse', (req, res, next) => {//Not parameter

    let sql = 'SELECT *,COUNT(re.ID) as TotalMember FROM course co JOIN record re ON co.ID = re.CourseID'+
    ' GROUP BY co.ID'+
    ' ORDER BY TotalMember DESC'+
    ' LIMIT 0,10';    

    //Begin get hot course
    connection.query(sql, function (error, results, fields) {
        if(error){
            res.send({
                status : 0
            });
        }
        else{
            res.send({
                listHotCourse: results,
                status : 1
            });
        }

    });
    //End get hot course
});

module.exports = getHotCourse;