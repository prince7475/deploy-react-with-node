'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/data/', function (req, res) {
   res.send('{"result":"true"}');
});

app.get('*', function (req, res) {
   res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
//# sourceMappingURL=app.js.map