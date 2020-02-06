const Sequelize = require('sequelize')
const db = require('../db')

const Vent = db.define(
  'vent',
  {
    location: Sequelize.STRING,
    open: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }
)

module.exports = Vent