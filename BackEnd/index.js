var express = require('express');
var app = express();

var routes = require('./routes');

routes(app);
app.listen(3001);