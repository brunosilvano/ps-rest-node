var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI', {
    useMongoClient: true
});

var Book = require('./models/bookSchema');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/book.routes')(Book); 

app.use('/api/books', bookRouter);

app.listen(port, function () {
    console.log(`Server started at port ${port}`);
});