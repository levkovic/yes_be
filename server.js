const port = 8080;

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yes_db', { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', function() {
    console.log('Connected to MongoDB');
});

db.on('error', function(err) {
    console.log(err);
});

const app = express();

let Article = require('./models/article');

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, firstName:'John', lastName:'Dou'},
        {id: 2, firstName:'Steve', lastName:'Smith'}
    ];
    res.json(users);
});

app.get('/api/articles', (req, res) => {
    Article.find({}, function(err, articles) {
        res.json(articles);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
