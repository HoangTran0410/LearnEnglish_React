var express = require('express');
var getListCourse = express.Router();

var util = require('../../../../Module/Util/util')
var connection = util.connectMysql(); // Get connection from server my sql 

getListCourse.get('/getListCourse',async (req, res, next) => {
    let data;
    let pageIndex = req.query.pageIndex || 1;
    let pageSize = req.query.pageSize || 10;
    let topicID = req.query.topicID;
    var totalCourse;
    let titleCourse = req.query.title;

    var sql = 'SELECT co.ID CourseID ,co.Title CourseTitle, tp.Title TopicTitle, tp.ID TopicID, co.Picture, co.Level, co.Description, co.WhatWillYouLearn, co.Requirement, COUNT(re.ID) as TotalMember FROM record re JOIN course co  ON co.ID = re.CourseID JOIN topic tp ON tp.ID = co.TopicID ';
    // Begin filter 
    if (topicID) {
        sql = util.andWhere(sql, 'TopicID', '=', topicID);
    }

    if (titleCourse) {
        sql = util.andWhere(sql, 'Title', 'LIKE', '"%' + titleCourse + '%"');
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
    sql += 'GROUP BY co.ID LIMIT ' + pageLimitBegin + ', ' + pageSize;
    //End pagination
    //Begin get course 
    connection.query(sql, function (error, results, fields) {
        if(error){
            console.log('ERROR getlistcourse line 57');
            res.send({
                status : 0,
                error : 400
            })
        }
        else{

            data = {
                listCourse: results,
                total: totalPage
            }
            res.send(data);
        }
    });
    //End
});

module.exports = getListCourse;