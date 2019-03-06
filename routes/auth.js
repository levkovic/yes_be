const router = require('express').Router();

const handlers = require('../handlers');

router.post('/register', handlers.register);
//router.post('/login');

module.exports = router;