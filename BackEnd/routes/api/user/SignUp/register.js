
var express = require('express');
var register = express.Router();
var fs = require('fs'); // Module file stream
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');
var crypto = require('crypto-js');

var util = require('./../../../../Module/Util/util')
var connection = util.connectMysql();// Get connection from server my sql 
//const path = 'C:\\Users\\Minh Hieu\\Desktop\\myweb\\public\\img\\avatar\\'; Path file then uploaded
//var formidable = require('formidable'); // Module get file upload from form
const fileSecret = fs.readFileSync('./routes/api/user/secret.json'); // Read file cotain pass secret
const secret = JSON.parse(fileSecret);

register.use(bodyParser.urlencoded({
    extended: true
}));
register.use(bodyParser.json());
register.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

register.post('/register', function (req, res, next) {

    var userName = req.body.userName;
    var passWord = req.body.passWord;
    var fullName = req.body.fullName;
    var email = req.body.email;
    var birthday = req.body.birthday;
    //Begin Encode password
    var encodePassWord = crypto.AES.encrypt(passWord, secret.EncodePass).toString();
    //End 
    if (userName && passWord && fullName && email && birthday) {
        var sql = 'INSERT INTO account(`UserName`, `Password`, `FullName`, `Birthday`, `Email`, `RegisterDate`, `Status`) VALUES (?,?,?,?,?,CURRENT_DATE,?)';
        var values =
            [userName, encodePassWord, fullName, birthday, email, 0];
        connection.query(sql, values, function (error, results) {
            if (error) {
                res.send({
                    status : 0
                });
                return;
            };
            console.log("1 record inserted");
        });

    }
    res.send({
        status : 1
    });
});

module.exports = register;
// var form = new formidable.IncomingForm();

    // form.parse(req,function (err, fields, files) {     
    //     var oldpath = files.filetoupload.path;
    //     var newpath = path + files.filetoupload.name;
    //     console.log(newpath);
    //     fs.rename(oldpath, newpath, function (err) {
    //       if (err) throw err;
    //       res.end("ERROR");
    //     });
    //    res.end("UPLOADED"); 
    //   }); 