var express = require('express');
var getListCourse = express.Router();

var util = require('../../../../Module/Util/util')
var connection = util.connectMysql(); // Get connection from server my sql 

getListCourse.get('/getListCourse',async (req, res, next) => {
    let data;
    let pageIndex = req.query.pageIndex || 1;
    let pageSize = req.query.pageSize || 10;
    let topicID = req.query.topicID;
    let courseID = req.query.courseID;
    var totalCourse;
    let titleCourse = req.query.title;

    var sql = 'SELECT * FROM course ';
    // Begin filter 
    if (topicID) {
        sql = util.andWhere(sql, 'TopicID', '=', topicID);
    }

    if (titleCourse) {
        sql = util.andWhere(sql, 'Title', 'LIKE', '"%' + titleCourse + '%"');
    }

    if (courseID) {
        sql = util.andWhere(sql, 'ID', '=', courseID);
    }

    //end filter course       
    //Get total row of course
    function getTotalCourse(){

        return new Promise(function(resolve,reject){
    
            connection.query(sql, (error, results, field) => {

            if(error) res.send(error);
                
            resolve(results.length);
            });
        });
    }
    //End get total row of course
    totalCourse = await getTotalCourse();

     console.log(totalCourse);
    //Begin pagination
    let totalPage = Math.ceil((totalCourse) / pageSize);
    // console.log("total page:", totalPage);
    let pageLimitBegin = (pageIndex - 1) * pageSize;
    sql += ' LIMIT ' + pageLimitBegin + ', ' + pageSize;
    //End pagination
    //Begin get course 
    connection.query(sql, function (error, results, fields) {
        data = {
            listCourse: results,
            totalPage: totalPage
        }
        res.send(data);
    });
    //End
});

module.exports = getListCourse;