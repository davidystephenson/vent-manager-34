const express = require('express')

const Vent = require('./vent/model.js')

const app = express()

const port = 4000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port, onListen)