var express = require('express');
var getProfile = express.Router();
var session = require('express-session');

var util = require('./../../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 
// Use session to checking logined

getProfile.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


getProfile.get('/getProfile', (req, res, next) => {// Contain accountID
    if(req.session.loggedin){

        let data;

        let sql = 'SELECT * FROM account ac ';
        accountID = req.query.accountID;
        if(accountID){
            sql = util.andWhere(sql,'ac.ID','=',accountID);
        }
        //Begin get profile
        connection.query(sql, function (error, results, fields) {
            data = {
                account : results
            }
            res.send(data);
        });
        //End get profile
    }
    else {
        res.send({
            error : "Not login",
            status : 0
        });
    }
});

module.exports = getProfile;