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
        const user = await db.User.findOne({username: req.body.username});
        const { id, username } = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            res.json({id, username});
        } else {
             throw new Error('Invalid Username/Password');
        }

    } catch (err) {
        next(err);
    }
}