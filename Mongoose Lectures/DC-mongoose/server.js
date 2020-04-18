const mongoose = require('mongoose')

const url = 'mongodb://localHost:27017/marvel'

mongoose.connect(url, {useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log('connected'))
.catch()

// TODO: Schema 
let charSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: [true, "Alias is required!!!!!"]
    },
    fname: String,
    lname: String,
    nemesis: String,
    hero: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

//TODO: MODEL
let charModel = mongoose.model('Character', charSchema)

// TODO: Creating Characters
let char1 = new charModel({
    alias: 'Spider-man',
    fname: 'Peter',
    lname: 'Parker',
    nemesis: 'Green Goblin',
    hero: true
 }
 )
 let char2 = new charModel({
    alias: 'Captain America',
    fname: 'Steve',
    lname: 'Rogers',
    nemesis: 'Red Skull'
 }
 )
 let char3 = new charModel({
    alias: 'Black Widow',
    fname: 'Natasha',
    lname: 'Romanoff',
    nemesis: 'Taskmaster'
 }
 )
 let char4 = new charModel({
    alias: 'Green Goblin',
    fname: 'Norman',
    lname: 'Osborn',
    nemesis: 'Spider-man',
    hero: false
 }
 )
 let char5 = new charModel({
    alias: 'Taskmaster',
    nemesis: 'Black Widow',
    hero: 'yes'
 }
 )
 let char6 = new charModel({
    alias: 'Hulk',
    fname: 'Bruce',
    lname: 'Banner',
    nemesis: 'Abomination',
    hero: true
 }
 )
 let char7 = new charModel({
    alias: 'Titania',
    nemesis: 'She-Hulk',
    hero: false
 }
 )
//  char7.save((err, result)=>{
//      err ?
//         console.log(err.message)
//         : console.log('Saved: ', result)
//  })