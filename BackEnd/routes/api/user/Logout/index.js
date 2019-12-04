var express = require('express');
var logout = express.Router();

logout.get('/logout', function (request, response, next) {
     
    if (request.session.loggedin) {
       request.session.destroy();
       response.send({
           status : 1
       })
    } else {
        response.send({
            messeage : "Not login",
            status : 0
        });
    }
    
    response.end();
});

module.exports = logout;