// This code Runs on the server viw Node.JS
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
// this loads the index.html from ../client folder
// and exposes everything with in the folder to any browser
app.use(express.static('../client')) // ../ will to to the parent folder level, then go down one to find client folder



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

// Read data - GET
app.get("/todos", function(req, res) { //sends through the URL/anyone can see it
  let query = `SELECT
                id AS _id,
                description,
                iscomplete AS "isComplete"
              FROM todos.todos
                ORDER BY todos.id;`
  client.query(query, function(error, result){
    if(error){
          console.log('Error: ', error)
        } else {
          console.log('Found all todos: ', result.rows) // .rows is to get only the rows
          res.json(result.rows);
        }
      })
  });


// Create data - POST
app.post("/todos", function(req, res) { // POST you cant see in the URL
  let newTodo = req.body.description; //req.body lets us get data from the browser/body
  if(!newTodo) {
    res.status(411).send({code: 666, message: 'Empty todo received'}) // will throw error if a blank todo is inserted
  };
  let query = `INSERT INTO todos.todos
                (description, iscomplete, user_id)
              VALUES('${newTodo}', false, 2)
              RETURNING id AS _id, description, iscomplete`;
  // Query will allow new data to be entered into the todo database
  client.query(query, (err, todo) =>{
    if(err){
      console.log('Error: ', err);
    }
    console.log('Inserted Todo: ', todo.rows[0]);
    res.send(todo.rows[0]);
  })
})
  
// Delete data
app.delete("/todos/:id", (req, res) => {
  // Query will allow Data to be DELETED from SQL DB
  let query = `DELETE FROM todos.todos
                WHERE todos.id = ${req.params.id}`;
                              // req.params.id 
  client.query(query, (err, result)=>{
    if(err){
      console.log(err.stack);
      res.end()
    }
    console.log('Item has been deleted from DB: ', result);
    res.send(result);
  })
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let query = `UPDATE todos.todos
                SET iscomplete = NOT iscomplete
              WHERE id = ${req.params.id}`;
     // query will allow UPDATES to SQL DB
  client.query(query, (err, result)=>{
    if(err){
      console.log('Error from UPDATE: ', err.stack)
      res.end()
    }
    console.log('Updated iscomplete for : ', result)
    res.send(result);
  })
});
  

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
