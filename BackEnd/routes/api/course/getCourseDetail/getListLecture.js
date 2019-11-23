var express = require('express');
var getListLecture = express.Router();

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 

getListLecture.get('/getListLecture',async (req, res, next) => {//input contain courseID

    
    let courseID = req.query.courseID;


    let sql = 'SELECT *  FROM section se JOIN lecture le ON se.ID = le.SectionID ';    
    // Begin filter lecture   
    if (courseID) {
        sql = util.andWhere(sqlGetLecture,'se.CourseID', '=' , courseID);
    }
    //end filter lecture    

    //Begin get lecture
    connection.query(sql, function (error, results, fields) {
        res.send({
            listLecture: results   
        });
    });
    //End get lecture
});

module.exports = getListLecture;