var express = require('express');
var getHotCourse = express.Router();

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 
var mysql = require('../../../../Module/Mysql/getData/index')
getHotCourse.get('/getHotCourse',async(req, res, next) => {//Not parameter

    let sql = 'SELECT *,COUNT(re.ID) as TotalMember FROM course co JOIN record re ON co.ID = re.CourseID'+
    ' GROUP BY co.ID'+
    ' ORDER BY TotalMember DESC'+
    ' LIMIT 0,10';    

    //Begin get hot course
    let result = await mysql.getData(sql);
    
    res.send({
        listHotCourse : result
    })
    //End get hot course
});

module.exports = getHotCourse;