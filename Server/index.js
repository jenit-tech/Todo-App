const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://jenitjosephjose:VTwm29tWn8Yk9ScZ@todolistapp.jilh6.mongodb.net/?retryWrites=true&w=majority&appName=TodoListApp")
.then(() => {
    console.log("connected ")
})
.catch(() => {
    console.log("not connected")
})

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        res.json(error)
    })

})


app.put('/update/:id', (req, res) => {
    const {id} = req.params
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})

