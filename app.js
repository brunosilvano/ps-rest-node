var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI', {
    useMongoClient: true
});

var Book = require('./models/bookSchema');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function (req, res) {
        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function (err, books) {
            if (err) res.status(500).send(err);
            else {
                res.json(books);
            }
        });
    });

bookRouter.route('/books/:bookId')
    .get(function (req, res) {
        Book.findById(req.params.bookId, function (err, book) {
            if (err) res.status(500).send(err);
            else {
                res.json(book);
            }
        });
    });

app.use('/api', bookRouter);

app.listen(port, function () {
    console.log(`Server started at port ${port}`);
});