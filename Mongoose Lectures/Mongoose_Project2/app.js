const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/app_users"

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
// TODO: To tell us that we connected
.then(function(){
    console.log(`Connected to database:  ${url}`)
})
// TODO: Will throw Error is its not connecting
.catch(error => {
    console.log(`Error connecting to database: ${Error}`)
})

let custSchema = new mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String,
    created: {
        type: Date,
        default: Date.now()
    },
    member : {
        type: String,
        required: [ true, "Required!!" ]
    }
})

let custModel = mongoose.model("Customers", custSchema)

// let customer1 = new custModel({
//     username: 'Nancy',
//     age: 22,
//     favorite_pizza: "pepperoni"
// })

let customer2 = new custModel({
    username: 'Tommy',
    favorite_pizza: 'Veggie pizza',
    member: true
})

customer2.save(function(error, result){
    error?
    console.log(`Error from databse with save ${error}`)
    : console.log(`Succesfully saved document: ${result}`)
})
