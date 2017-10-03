var express = require('express');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function (req, res) {
        var resJson = { name: 'Bruno' };
        res.json(resJson);
    });

app.use('/api', bookRouter);

app.listen(port, function () {
    console.log(`Server started at port ${port}`);
});