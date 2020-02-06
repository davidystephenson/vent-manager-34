const express = require('express')
const Vent = require('./model')

const { Router } = express
// const Router = express.Router

const router = new Router()

// app.get
router.get(
  '/vent', // list of all vents (REST)
  async function (request, response, next) {
    // request - object with properties about what was sent from client
    // response - object with methods that send data to the client
    // next - function that advances through middleware (handle errors)

    // Vent
    //   .findAll()
    //   .then(vents => {
    //     response.send(vents)
    //   })
    //   .then(() => {
    //     console.log('done')
    //   })
    //   .catch(next)
    //   // .catch(x => {
    //   //   next(x) 
    //   // })
    
    try {
      const vents = await Vent.findAll()
      response.send(vents)
      console.log('done')
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router