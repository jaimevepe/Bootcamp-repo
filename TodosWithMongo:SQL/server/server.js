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

app.use(express.static('../client'))



// Connecting to a SQL Database
const { Client } = require('pg');

let connectionObject = {
  host: "pgdb.accsoftwarebootcamp.com",
  database : "accsoftwarebootcamp",
  port: 5432,
  user: "acc",
  password: "accrocks"
}

const client = new Client(connectionObject);

client.connect()
.then(function(){
  console.log(`PG is connected to ${client.databse}`)
})
.catch((err)=>{
  console.log(`Error connecting to ${client.batabase}, err`)
})
// ALL you need to connect to database

app.get("/", function(req, res) {
  res.send("Hello");
});

// Read data
app.get("/todos", function(req, res) {
  let query = `SELECT
                id AS _id,
                description,
                iscomplete AS isComplete
              FROM todos.todos
                ORDER BY todos.id;`
  client.query(query, function(error, result){
    if(error){
          console.log('Error: ', error)
        } else {
          console.log('Found all todos: ', result.rows)
          res.json(result.rows);
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
