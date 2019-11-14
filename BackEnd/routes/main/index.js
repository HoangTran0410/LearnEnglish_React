var express = require('express');
var app = express();

var auth = require('./user/login/auth');

app.use('/auth',auth);
app.get('/',function(req,res){
    res.send('dfa');
    res.end();
})
