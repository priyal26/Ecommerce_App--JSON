const Sequelize = require('sequelize');

const sequelize = new Sequelize('ppl', 'root', 'password',
    {
        dialect: 'mysql',
        host: 'localhost'
    });

module.exports = sequelize;
