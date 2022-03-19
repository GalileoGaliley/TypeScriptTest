const jwt = require('jsonwebtoken')


module.exports = function (role) {
    return function (req, res, next) {


        if (req.method === 'OPTIONS') {
            next();
        }
        ;
        try {
            console.log('aaa start'.magenta);
            console.log(req.headers.magenta);
            const token = req.headers.authorization.split(' ')[1];
            console.log('tokenread checkRoloe'.magenta);
            console.log(token.magenta);
            if (!token) {
                return res.status(401).json({message: 'Авторизуйтесьn '})
            }
            console.log('tokenread1'.red);
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded.id.role);
            if (decoded.id.role !== 'ADMIN') {
                console.log('tokenreadERR'.red);
                return res.status(403).json({message: 'У вас нет дуступа!'})

            }

            req.user = decoded;
            console.log(decoded.magenta);
            next()
        } catch (e) {
            res.status(401).json({message: 'Авторизуйтесьr ' + e})
        }
    };
}
