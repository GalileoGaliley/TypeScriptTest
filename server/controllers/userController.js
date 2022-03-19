const {User} = require('../models/models.js');
const jwt = require('jsonwebtoken')
const ApiError = require("../error/ApiError.js");
const bcrypt = require('bcrypt');
const {colors} = require('colors');

const generateJWT = (id, email,login, role)=>{
    return jwt.sign(
        {id, email,login, role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    );
}
class userController {
    async registration (req, res, next) {
    const {login, email, password, role} = req.body;
        console.log('запрос принят'.magenta);
        console.log(req.body);
        if (!email || !password || !login){
            return next(ApiError.badRequest('вы не ввели email или password'));
        };

        if (login.length < 8 || password.length < 8) {
          return next(ApiError.badRequest('login и пароль должны быть не короче восьми символов'));;
        }



        console.log('проверка на наличие пройдена'.magenta);
        const loginCandidate = await User.findOne({where: {login}});
        const emailCandidate = await User.findOne({where: {email}});


        if (emailCandidate){
            return next(ApiError.badRequest({message: 'Пользователь с таким email уже существует'}));
        };
        if (loginCandidate){
            return next(ApiError.badRequest('Пользователь с таким login уже существует'));
        };


    

        const hashPassword = await bcrypt.hash(password, 5);
  
        const user = await User.create({email, login, role, password: hashPassword});

        console.log('2'.magenta);

        const token = generateJWT({id: user.id}, email, role)

        return res.json({token, code: 500})
    };



    async login (req, res, next) {
        const {loginOrEmail, password} = req.body;

        if (loginOrEmail == false){
            return next(ApiError.badRequest('Введите логин или Email'));
        };
        if (!password){
            return next(ApiError.badRequest('Введите пароль'));
        };
        const userLoginInDB = await User.findOne({where:{login:loginOrEmail}});
        const userEmailInDB = await User.findOne({where:{email:loginOrEmail}});

        let user = userLoginInDB;
        if (!userLoginInDB){
            if (!userEmailInDB){
                return next(ApiError.internal('Такого пользователя нет!'))
            }
            user = userEmailInDB;

        }

        let userPassword = bcrypt.compareSync(password, user.password);
        if (!userPassword){
          return next(ApiError.badRequest("Неверный пароль"))
        };


        const token = generateJWT(user.dataValues);

        return res.json({token: token, code: 500});
    };



    async check (req, res, next) {
        console.log('dadada usercontroller auth'.magenta);
        const token = generateJWT(req.user.id, req.user.email, req.user.role);
        console.log(req.user.red)
        return res.json({token})
    };
};


module.exports = new userController();





// const ApiError = require('../error/ApiError');
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const {User, Basket} = require('../models/models')
// const {colors} = require('colors');
//
// const generateJwt = (id, email, role) => {
//     return jwt.sign(
//         {id, email, role},
//         process.env.SECRET_KEY,
//         {expiresIn: '24h'}
//     )
// }
//
// class UserController {
//     async registration(req, res, next) {
//         const {email, password, role} = req.body
//         console.log(req.body.magenta)
//         if (!email || !password) {
//             return next(ApiError.badRequest('Некорректный email или password'))
//         }
//         const candidate = await User.findOne({where: {email}})
//         if (candidate) {
//             return next(ApiError.badRequest('Пользователь с таким email уже существует'))
//         }
//         const hashPassword = await bcrypt.hash(password, 5)
//         const user = await User.create({email, role, password: hashPassword})
//         const basket = await Basket.create({userId: user.id})
//         const token = generateJwt(user.id, user.email, user.role)
//         return res.json({token})
//     }
//
//     async login(req, res, next) {
//         const {email, password} = req.body
//         console.log('Тело запроса'.red);
//         console.log(req.body);
//         console.log('Тело запроса'.red);
//         const user = await User.findOne({where: {email}})
//         if (!user) {
//             return next(ApiError.internal('Пользователь не найден'))
//         }
//         let comparePassword = bcrypt.compareSync(password, user.password)
//         if (!comparePassword) {
//             return next(ApiError.internal('Указан неверный пароль'))
//         }
//         const token = generateJwt(user.id, user.email, user.role)
//         return res.json({token})
//     }
//
//     async check(req, res, next) {
//         const token = generateJwt(req.user.id, req.user.email, req.user.role)
//         console.log('chek'.red);
//         console.log(req.red);
//         console.log('chek'.red);
//         return res.json({token});
//     }
// }

// module.exports = new UserController()
