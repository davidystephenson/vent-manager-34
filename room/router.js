const { Router } = require('express')
const Room = require('./model')
const Vent = require('../vent/model')

const router = new Router()

router.get(
  '/room',
  async (request, response, next) => {
    try {
      const rooms = await Room.findAll({
        include: [Vent]
      })

      

      response.send(rooms)
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/room',
  async function (request, response, next) {
    try {
      const room = await Room.create(request.body)
      
      response.send(room)
    } catch (error) {
      next(error)
    }

  }
)

module.exports = router