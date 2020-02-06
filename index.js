const express = require('express')
const cors = require('cors')

const ventRouter = require('./vent/router')
const roomRouter = require('./room/router')

const app = express()

const port = 4000

function onListen () {
  console.log(`Listening on :${port}`)
}

const corsMiddleware = cors()
app.use(corsMiddleware)

const jsonMiddleware = express.json()
app.use(jsonMiddleware)

app.use(ventRouter)
app.use(roomRouter)

app.listen(port, onListen)