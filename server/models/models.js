const {DataTypes} = require('sequelize');
const sequelize = require('../db.js');



//Модели

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
});
const Contact = sequelize.define('contact',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false},
    lastname:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING, allowNull: false},
    phone:{type: DataTypes.STRING, allowNull: false},
    userId:{type: DataTypes.INTEGER},
});





// const Purchases = sequelize.define('purchases', {
//     id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
//     paymentId:{type: DataTypes.STRING},
//     status:{type: DataTypes.BOOLEAN},
//     email: {type: DataTypes.STRING},
//     name: {type: DataTypes.STRING},
//     pastname: {type: DataTypes.STRING},
//     country: {type: DataTypes.STRING},
//     city: {type: DataTypes.STRING},
//     street: {type: DataTypes.STRING},
//     home: {type: DataTypes.STRING},
//     comment: {type: DataTypes.STRING},
//     phone: {type: DataTypes.STRING},
//     cast: {type: DataTypes.INTEGER},
    
// })


User.hasMany(Contact);
Contact.belongsTo(User);



let options = {alter: true};

User.create({});
Contact.create({});


User.sync(options);
Contact.sync(options);








//Взаимодействие моделей     // quantity: {type:DataTypes.INTEGER, allowNull: false},







module.exports = {
  User,
  Contact
};
