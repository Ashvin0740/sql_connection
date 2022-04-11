const Sequelize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize('ORM','root', process.env.PASS,{
    dialect:"mysql",
    host:"localhost"
});
console.log("connected!");
module.exports = sequelize;
