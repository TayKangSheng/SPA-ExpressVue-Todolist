const express = require('express')
const router = express.Router()

/* Psuedo Datastructure */
const todolist = {
  1: { text: 'Eat' },
  2: { text: 'Code' },
  3: { text: 'Sleep' },
  4: { text: 'Repeat' }
}
let counter = 4

router.get('/', function (req, res) {
  console.log('GET /todos')
  res.json(todolist)
})

router.get('/:id', function (req, res) {
  console.log('GET /todos/:id')
  res.json(todolist[req.params.id])
})

router.post('/new', function (req, res) {
  console.log('post /todos/new')
  todolist[`${++counter}`] = req.body.todo
  res.json( { id: counter, todo: todolist[`${counter}`] } )
})

router.delete('/:id', function (req, res) {
  console.log('DELETE /todos/:id')
  if (todolist[req.params.id]) {
    delete todolist[req.params.id]
    res.json({ status: 200 })
  } else {
    res.json({ status: 404 })
  }
})

module.exports = router
