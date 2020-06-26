const express = require('express');
const app = express();

const morgan = require('morgan')
app.use(morgan('dev'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const cors = require('cors');
app.use(cors());

app.use(express.static('./client'))

const port = process.env.PORT || 3000

const toDoArray = [
    {
        id: 1,
        description: 'Call Mom',
        isComplete: false
    },
    {
        id: 2,
        description: 'Buy Groceries',
        isComplete: false
    },
    {
        id: 3,
        description: 'Go to Movies',
        isComplete: false
    }
]

let prevId = 4;

// app.get('/', function(req, res){
//     res.send('Welcome to my ToDo API!')
// });

app.get('/todos', function(req, res) {
    res.send(toDoArray);
   
})

app.post('/todos', (req, res) => {
    const newTodo = {
        id: prevId++,
        description: req.body.description,
        isComplete: false
    }
    toDoArray.push(newTodo);
    // console.log(toDoArray)
    res.status(201).send(newTodo)
})

app.delete('/todos/:todoid', function(req, res) {
    let requestedTodoId = parseInt(req.params.todoid);
    let requestedToDoIndex = toDoArray.findIndex(todo => {
        return todo.id === requestedTodoId;
    })
    if (requestedToDoIndex !== -1 ){
        toDoArray.splice(requestedToDoIndex, 1);
        res.send(toDoArray);
    } else {
        res.status(400).send(`Todo with id: ${requestedTodoId} does not exist`);
    } 
})

app.put('/todos/:todoid', function(req, res) {
    let requestedTodoId = parseInt(req.params.todoid);
    let requestedToDo = toDoArray.find(todo => {
        return todo.id === requestedTodoId;
    })
    if (requestedToDo !== undefined) {
        requestedToDo.isComplete = !requestedToDo.isComplete;
        res.send(requestedToDo)
    } else {
        res.status(400).send(`Todo with id: ${requestedTodoId} does not exist`);
    }
})

// app.listen(port, function(){
//     console.log(`App is listening on port ${port}`);
// })

module.exports = app;
module.exports.toDoArray = toDoArray;

