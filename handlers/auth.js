const db =  require('../models');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const { id, username } = user;

        res.json({ id, username});
    } catch (err) {

    }
}

exports.login = async (req, res, next) => {
    try {

    } catch (err) {

    }
}