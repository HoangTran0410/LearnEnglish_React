var express = require('express');
var editProfile = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');

var util = require('./../../../../../Module/Util/util');
var connection = util.connectMysql(); // Get connection from server my sql 
// Use session to checking logined

editProfile.use(bodyParser.urlencoded({
    extended: true
}));
editProfile.use(bodyParser.json());

editProfile.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


editProfile.post('/editProfile', (req, res, next) => {// Contain profile of account
    if(true){
        let accountID = req.body.accountID;
        let fullName = req.body.fullName;
        let email = req.body.email;
        let registerDate = req.body.registerDate;
        let birthday = req.body.birthday;

        if ( ( fullName || email || birthday ) && accountID) {
            var sql = 'UPDATE account SET FullName = ?, Birthday = ?, Email = ? WHERE ID = ?';

            var values =  [fullName, birthday, email, accountID];
            connection.query(sql, values, function (error, results) {
                if (error) {
                    res.end('error');
                }
                else {
                    res.send({
                    status : 1
                    });
                }
            console.log("1 record updated");
            });
        
        }

    }
});

module.exports = editProfile;