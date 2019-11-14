var express = require('express');
var auth = express.Router();
var crypto = require('crypto-js');
var fs = require('fs'); // Module file stream
//var auth = express();
var util = require('../../../../Module/Util/util');

const connection = util.connectMysql();
const fileSecret = fs.readFileSync('./routes/api/user/secret.json'); 
const secret = JSON.parse(fileSecret);
var session = require('express-session');
var bodyParser = require('body-parser');

auth.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

auth.use(bodyParser.urlencoded({
    extended: true
}));
auth.use(bodyParser.json());

auth.post('/auth', function (request, response, next) {
    console.log('Da vao auth');  
    var userName = request.body.userName;
    var passWord = request.body.passWord;

    console.log(userName);
    if (userName && passWord) {

        connection.query('SELECT * FROM account WHERE UserName = ?', [userName], function (error, results, fields) {
            // Get list bytes encoded
            var bytes = crypto.AES.decrypt(results[0].Password, secret.EncodePass);
            
            // Parse 
            var decodePass = bytes.toString(crypto.enc.Utf8);
            if (results.length > 0 && decodePass===decodePass) {
                request.session.loggedin = true;
                request.session.username = userName;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

auth.get('/home', function (request, response, next) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.writeHead('200', {'Content-Type': 'text/html'});
        var formHtml = '<form action="/register" method="post">'+
        'Full name:<br>'+
        '<input type="text" id="fullname" name="fullName" value="Full name">'+
      '<br>'+
      'UserName:<br>'+
      '<input type="text" name="userName" value="User name">'+
      '<br><br>'+
      'password:<br>'+
      '<input type="password" name="passWord" value="ti123">'+
      '<br><br>'+
      'email:<br>'+
      '<input type="text" name="email" value="email@123">'+
      '<br><br>'+
      'Register Date:<br>'+
      '<input type="date" name="registerDate" value="">'+
      '<br><br>'+
      'Birthday:<br>'+
      '<input type="date" name="birthday" value="">'+
      '<br><br>'+

        '<input type="submit">'+
        '</form>';
        response.write(formHtml);
    return response.end();
    }
    response.end();
});
//auth.listen(3000);
module.exports = auth;