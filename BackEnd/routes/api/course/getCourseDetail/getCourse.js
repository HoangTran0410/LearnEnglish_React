var express = require('express');
var getCourse = express.Router();

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 

getCourse.get('/getCourse', (req, res, next) => {//input contain courseID

    let data;
    
    let courseID = req.query.courseID;

    let sql = 'SELECT *,AVG(ra.Star) as AVGstar FROM course co JOIN rate ra ON co.ID = ra.CourseID ';
    // Begin filter
    if (courseID) {
        sql = util.andWhere(sql, 'co.ID', '=', courseID);
    }
    
    //end filter course      
    //Begin get course 
 
    connection.query(sql, function (error, results, fields) {
        if(error){
            res.end("error");
       //     console.log(sql);
                 
        }
        else{
            res.send({
                course: results   
            });
            
        }
    });
    
   
    
    //End
});

module.exports = getCourse;