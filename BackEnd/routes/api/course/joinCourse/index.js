var express = require('express');
var joinCourse = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');

var util = require('../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 
// Use session to checking logined
joinCourse.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized : true
}));

joinCourse.use(bodyParser.urlencoded({
    extended: true
}));
joinCourse.use(bodyParser.json());


joinCourse.post('/joinCourse', (req, res, next) => {
    if(req.session.loggedin){

        let accountID = req.body.accountID;
        let courseID = req.body.courseID;

        let sql = 'INSERT INTO record(AccountID,CourseID,JoinedDate) VALUES(?,?,CURRENT_DATE)';

        //Begin get account
        connection.query(sql,[accountID,courseID], function (error) {
            if(error){

                console.log('loi');
                res.end(error);
                return;
            }
            else{
                res.send({
                    status : 1
                });
            }
            
        });
        
        //End get account
        
    }
    else {
        res.send({
            error : "Not login",
            status : 0
        });
        res.end();
    }
   
});

module.exports = joinCourse;