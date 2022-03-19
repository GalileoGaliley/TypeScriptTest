const jwt = require('jsonwebtoken')


module.exports = function (req, res, next){
    console.log('aaaaaaa'.magenta)
    if (req.method === 'OPTIONS'){
        next();
    };
    try {
        console.log('try in middlewareAuth'.magenta)
        const token = req.headers.authorization.split( ' ')[1];
        if (!token){
            console.log('401 adnjhbp'.magenta)
            return res.status(401).json({message: ' не Авторизуйтесь'});

        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next()
    }catch (e){
        res.status(401).json({message: 'Авторизуйтесь'})
    }
}