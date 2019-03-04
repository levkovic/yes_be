require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const handle = require('./handlers');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, firstName:'John', lastName:'Dou'},
        {id: 2, firstName:'Steve', lastName:'Smith'}
    ];
    res.json(users);
});

app.get('/api/articles', (req, res) => {
    db.Article.find({}, function(err, articles) {
        res.json(articles);
    });
});

app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
