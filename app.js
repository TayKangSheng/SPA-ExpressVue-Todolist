const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Controllers */
const todoController = require('./controllers/todoController')

/* Routes */
app.use('/api/todos', todoController)

app.get('/page', function (req, res) {
  res.sendFile(path.join(__dirname, 'page.html'))
})

/* Put ALL ROUTES above this middleware */
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html')) 
})

app.listen(port, function () {
  console.log('Vue-Express SPA is running on ' + port)
})
