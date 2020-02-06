const Sequelize = require('sequelize')
const db = require('../db')
const Room = require('../room/model')

const Vent = db.define(
  'vent',
  {
    open: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }
)

Vent.belongsTo(Room)
Room.hasMany(Vent)

module.exports = Vent