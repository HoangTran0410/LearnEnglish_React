var express = require('express');
var app = express();
const cors = require('cors');

var routes = require('./routes');

routes(app);
app.listen(3001,(error) => {
    if(error) {
        throw error;
        return;
    }
    console.log('App running on port localhost:3001');
});