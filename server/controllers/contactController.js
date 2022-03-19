const {Contact} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const {colors} = require('colors')

const jwt = require('jsonwebtoken')
const decodeJWT = (token)=>{
    return jwt.decode(token);
}
class ContactController {
    async create (req, res, next) {
        try {
            let { name, lastname, email, phone, token} = req.body;
            console.log(req.body);
            console.log(token)
            let userId = jwt.decode(token).id.id
            console.log(userId)
            const contact = await Contact.create({name, lastname, email, phone, userId});

            return res.json(contact);
        }catch (err){
            next(ApiError.badRequest(err.message));
        }

    };
    async remove (req, res, next) {
        try {
            let {token, id} = req.body;
         
            let userId = jwt.decode(token).id.id
            console.log(userId)
            const contact = await Contact.destroy({where:{id:id, userId: userId}});

            return res.json(contact);
        }catch (err){
            next(ApiError.badRequest(err.message));
        }

    };


    async getAll (req, res) {
        //тут всё прекрасно не трогай запросы
            
            console.log('getContakt')
            let {token} = req.body;
            let userId = jwt.decode(token).id.id
            let contact = await Contact.findAndCountAll({userId:userId})
        
            console.log(contact)
        return res.json(contact)


    };

};


module.exports = new ContactController();
