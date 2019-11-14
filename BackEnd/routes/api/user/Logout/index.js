var express = require('express');
var logout = express.Router();

logout.get('/logout', function (request, response, next) {
    if (request.session.loggedin) {
        response.send('Please fill password, ' + request.session.username + '!');
    } else {
        response.send('is logout page');
    }
    response.end();
});

module.exports = logout;