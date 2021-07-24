const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myschooldb', 'root', 'zxc999.CC', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize;
