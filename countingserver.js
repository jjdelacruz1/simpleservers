const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

var counter = 0

app.use(express.static(path.join(__dirname, 'public')));

app.post('/increment', function (req, res, next) {
  counter++
  res.send(`${counter}`)
})

app.post('/decrement', function (req, res, next) {
  counter--
  res.send(`${counter}`)
})

app.post('/reset', function (req, res, next) {
  counter = 0
  res.send(`${counter}`)
})

app.get('/value', function (req, res, next) {
  res.send('This is the final value: ' + counter) 
})

app.listen(PORT)