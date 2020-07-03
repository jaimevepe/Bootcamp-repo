const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000;

app.use(express.static('client'))

// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect
const mongoose = require('mongoose')
const url = 'mongodb://localHost:27017/jm_todo_list'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log(`Connected to ${url} database.`))
  .catch(err => console.log(`Issue connecting to ${url} database: `, err))

// 2) Build blueprints
//    a) Schema
//    b) Model
// let todoSchema = mongoose.Schema({
//   id: Number,
//   description: String,
//   isComplete: Boolean
// })
// NOTE: Should be:
let todoSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, "Must have a description for the todo item."]
  },
  isComplete: {
    type: Boolean,
    default: false
  }
})

let TodoModel = mongoose.model('Todo', todoSchema)

// 3) Build queries
//    a) Read with Mongoose
// NOTE: fat arrow and ternary
// TodoModel.find({})
// .then((error, results)=>{
//   error ?
//     mongoose.disconnect().then(()=> console.log('Error: ', error))
//     : console.log('Found all todos: ', results)
// })

//    b) Create with Mongoose


//    c) Delete with Mongoose
//    d) Update with Mongoose

// let toDoArray = [
//   { id: 1, description: "Call mom", isComplete: false },
//   { id: 2, description: "Buy groceries", isComplete: false },
//   { id: 3, description: "Go to movies", isComplete: false }
// ];

// let num = 4;


app.get("/", function(req, res) {
  // res.send("Hello");
  res.sendfile('index.html');
});

// Read data
app.get("/todos", function(req, res) {
  TodoModel.find({}, function(error, results){
    if(error){
      console.log('Error: ', error)
    } else {
      console.log('Found all todos: ', results)
      res.json(results);
    }
  })
});

// Create data
app.post("/todos", function(req, res) {
  let newTodo = new TodoModel({
      description: req.body.description
  })
  newTodo.save(function(error, result){
    if(error){
      console.log('Error: ', error)
      mongoose.disconnect()
    } else {
      console.log('Saved new todo: ', result)
      res.status(201).json(result);
    }
  })   
});

// Delete data
app.delete("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id;
  console.log(requestedToDoId)
  TodoModel.findByIdAndDelete(requestedToDoId, function(error, result){
    if(error){
      res.status(400).send('Id does not exist for deletion')
    } else {
      res.status(201).send(result)
    }
  })
});

// Update
app.put("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id;
  TodoModel.findById(requestedToDoId, function(error, result){
    if(error){
      res.status(666).send('Id does not exist for updating')
    } else {
      result.isComplete = !result.isComplete
      result.save(function(err, updatedTodo){
        if(err){
          res.status(667).send('Cannot update document')
        } else {
          res.status(202).send(updatedTodo)
        }
      })
      
    }
  })
})
  

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
