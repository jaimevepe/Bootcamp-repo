const express = require('express')
const app = express()
​
app.get('/', (req, res)=> {
    res.send('I am the root route')
})
​
app.get('/user/:name/money/:num/password/:pw', (req, res) =>{
    let {name, num, pw} = req.params //Destructuring
    let message = `Hello ${name}. You have $${num} in your account. And your password is: ${pw}`;
    let message2 = num > 100 ?  // Ternary Operator
                    `May I borrow $${num/2}?` :
                    "You like living on the edge?"
    res.send(`${message} <br> ${message2}`)
})
​
app.listen(3000, ()=>{
    console.log(`App listening on port 3000`)
})