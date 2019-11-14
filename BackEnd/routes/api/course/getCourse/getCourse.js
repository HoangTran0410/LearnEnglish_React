var express = require('express');
var getCourse = express.Router();
var bodyParser = require('body-parser');

var util = require('./../../../../Module/Util/util')
var connection = util.connectMysql(); // Get connection from server my sql 

getCourse.use(bodyParser.urlencoded({
    extended: true
}));
getCourse.use(bodyParser.json());


getCourse.get('/getCourse', (req, res, next) => {
    let data;
    let pageIndex = req.query.pageIndex || 1;
    let pageSize = req.query.pageSize || 10;
    let topicID = req.query.topicID;
    var totalCourse;
    let titleCourse = req.query.title;
    let sqlCountCourse = 'SELECT count(*) as TOTAL  FROM course';

    var sql = 'SELECT * FROM course ';
    // Begin filter topic
    if (topicID) {
        console.log('da vao topic id');
        sql = util.andWhere(sql, 'TopicID', '=', topicID);
    }
    if (titleCourse != '') {
        sql = util.andWhere(sql, 'Title', 'LIKE', '"%' + titleCourse + '%"');
    }

    //end filter topic       
    //Get total row of course
    connection.query(sqlCountCourse, (error, results, field) => {

        if(error) res.send(error);

        totalCourse = results[0].TOTAL;
        // console.log('total course =' + totalCourse);

        let totalPage = Math.ceil((totalCourse) / pageSize);
        // console.log("total page:", totalPage);

        let pageLimitBegin = (pageIndex - 1) * pageSize;
        sql += ' LIMIT ' + pageLimitBegin + ', ' + pageSize;

        //End set panigation
        // console.log(sql);
        connection.query(sql, function (error, results, fields) {
            data = {
                listCourse: results,
                totalPage: totalPage
            }
            res.send(data);
        });
    });
});

module.exports = getCourse;