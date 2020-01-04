'use strict';

var express = require('express');
var path = require('path');

var app = express();

var DIST_DIR = path.join(__dirname, '../public'); // NEW

app.use(express.static(DIST_DIR));

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('*', function (req, res) {
    res.sendFile(path.resolve('src/public/index.html'));
});
app.get('/test', function (req, res) {
    console.log('here');
    res.sendFile(path.resolve('src/public/index.html'));
});
var index = app.listen(3000, function () {});