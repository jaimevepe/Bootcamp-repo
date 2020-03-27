const express = require('express');
const app = express();

app.set('views engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
    res.send('I am the Root Route!');
});

app.get('/messages', (req, res) => {
    const messages = [
        { name: "Jim", message: "I'm a cartoonist." },
        { name: "Jane", message: "How about pasta for dinner?" },
        { name: "Gary", message: "I like my pasta with butter." }
    ]
    res.render('messages.ejs', { messages })
});


app.listen(3000, () => {
    console.log("On Port 3000!!!")
});