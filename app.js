const express = require('express')

const app = express()

app.get('/', function(require, response, nextFn) {
  response.send('Hey I am working!')
  nextFn()
})

app.get('/ping', function (require, response, nextFn) {
  response.send("PONG This should work")
  nextFn()
})

app.listen(3000)