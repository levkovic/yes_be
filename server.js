const express = require('express');
const app = express();
const port = 8080;

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, firstName:'John', lastName:'Dou'},
        {id: 2, firstName:'Steve', lastName:'Smith'}
    ];
    res.json(users)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
