const Sequelize = require('sequelize') //importing sequelize node modules
const allConfigs = require('../config/sequelize') //importing env variables needed to set up DB connection
const TeamsModel = require('./teams') //importing my anonymous function - this function define a table for my nfl teams
// the same stucture as the table in my database
const Op = Sequelize.Op //sequelize operators

const config = allConfigs['development']

//start up connection
const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

//passing in my connection and an instance of SQL to creates the table for us 
const Teams = TeamsModel(connection, Sequelize)

module.exports = { //export this for our WEB APP Teams
  Teams,
  Op
}