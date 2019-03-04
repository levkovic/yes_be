const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, { useNewUrlParser: true });

module.exports.User = require('./user');
module.exports.Article = require('./article');