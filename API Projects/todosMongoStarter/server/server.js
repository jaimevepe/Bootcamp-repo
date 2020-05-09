const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000;




// TODO: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect
let url = 'mongodb://localhost:27017/jv_todo_list'
const mongoose = require('mongoose');

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
  console.log(`Connected to database: ${url}`)
})
.catch(error =>{
  console.log('Error: ', error)
})


// 2) Build blueprints
//    a) Schema
//    b) Model
let todoSchema = mongoose.Schema({
  description: {
    type: String,
    required: [ true, 'Description REQUIRED!']
  },
  isComplete: {
    type: Boolean,
    default: false
  }
})
// name collection "items"
let todoModel = mongoose.model("Item", todoSchema);



// 3) Build queries
//    a) Read with Mongoose
//    b) Create with Mongoose
//    c) Delete with Mongoose
//    d) Update with Mongoose

app.get("/", function(req, res) {
  res.send("Hello");
});

// Read data - GET
app.get("/todos", function(req, res) {
  // .find() is Read/GET on CRUD
  todoModel.find({}, function(error, results){ // Results because you will get multiple documents
    if(error){
      console.log(`Error: ${error}`)
    } else {
      console.log(`Results .find: ${results}`)
      res.json(results);
    }
  })
});

// Create data - POST
app.post("/todos", function(req, res) {
    let newTodo = new todoModel({
      description: req.body.description
    })

    newTodo.save(function(error, results){
    if(error){
      console.log(error)
    } else {
      console.log("New Todo: ", newTodo)
      console.log("Saved Results: ", results)
        res.status(201).json(results);
    }
  })
});

// Delete data - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id // id was coming back undefined - Needed to go back to script.js and add _ to id (_id: line 14)
  console.log("resquested Todo Id: ", requestedToDoId)
  todoModel.findByIdAndDelete(requestedToDoId, function(error, result){
    if(error){
      console.log(error)
      res.status(400).send('Id does not exist for deletion')
    } else {
      console.log(`Deleted Todo: ${result}`)
      res.status(201).send(result)
    }
  })
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id
  todoModel.findById(requestedToDoId, function(error, result){ // TODO: findById will look for an existing ID
    if(error){
      console.log(error)
      res.status(404).send({code: 666, message:'ID does not exist for updating'}) // code: 666 is a custom code
    } else {
      console.log(`Updated Todo: ${result}`)
      result.isComplete = !result.isComplete // To toggle the boolean true or false on the todo item
      result.save(function(err, updatedResult){ // save the toggle update
        if(err){
          console.log(`Error with save: ${err}`)
        } else {
          console.log(`Updated Result: ${updatedResult}`)
          res.status(202).send(updatedResult)
        }
      })
    }
  })
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
