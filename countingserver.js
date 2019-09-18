const express = require('express')
const app = express()

var counter = 0

app.post('/increment', function (req, res, next) {
  counter++
  res.send('This is the new count added: ' + counter)
})

app.post('/decrement', function (req, res, next) {
  counter--
  res.send('This is the new count subtracted: ' + counter)
})

app.get('/value', function (req, res, next) {
  res.send('This is the final value: ' + counter)
})

app.listen(3000)