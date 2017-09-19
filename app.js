var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use('/', function (req, res) {
    res.end('This is the root route.');
});

app.listen(port, function () {
    console.log(`Server started at port ${port}`);
});