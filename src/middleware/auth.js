const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res, next) => {
    if(!req.header('Authorization')){ return res.status(401).send({ error: 'Not authorized' }) }
    const token = req.header('Authorization').replace('Bearer ', '');

    jwt.verify(token, process.env.JWT_KEY, async function(err, decoded) {
        if(err){
            res.status(401).send({ error: 'Not authorized to access this resource' });
        }else{
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
            if (!user) {
                throw new Error();
            }
            req.user = user;
            req.token = token;
            next()
        }
    });

}
module.exports = auth