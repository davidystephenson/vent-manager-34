const express = require('express')

const ventRouter = require('./vent/router')

const app = express()

const port = 4000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.use(ventRouter)
app.get('/vent', (request, response) => {
  console.log('app test')
  response.send('app')
})


app.listen(port, onListen)