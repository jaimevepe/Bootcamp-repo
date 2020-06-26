const express =                require('express');
const app = express();

const bodyparser =             require('body-parser');
const mongoose =               require('mongoose');
const passport =               require('passport');
const LocalStrategy =          require('passport-local');
const passportLocalMongoose =  require('passport-local-mongoose');

var UserModel = require('./models/user'); // imported Schema/model from models/user.js

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret: "Blah blah blah", 
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

//------connecting to mongo-------//
const db = 'mongodb://localhost/passport_Demo'
mongoose.connect(db, { userNewUrlParser: true, useUnifiedTopology: true })

app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/newsfeed", isLoggedIn, (req, res) => { // isLoggedIn is the function in the bottom
    res.render("newsfeed.ejs")
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs")
});

app.post("/signup", (req, res) => {
    var newUser = new UserModel({username: req.body.username}); // will get stored in the model for mongoose
    UserModel.register(newUser, req.body.password, (err, user) => { // will resgister the new username and pass to be able to log in
        if(err){
            console.log(err); // if there is an error
            return res.render('signup.ejs') // it will return you to the signup to restart
        } else {
            passport.authenticate("local")(req, res, function(){ // local = "local strategy"
                res.redirect("/newsfeed"); // if no error, you will be sign in and take you to the newsfeed page
            }) 
        }
    })
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
});

app.post("/login", passport.authenticate('local', 
    {
        successRedirect: "/newsfeed", // if logged in youll go to newsfeed
        failureRedirect: "/login"  // if not able to log in, then youll go to the login
    }), function(req, res){
        console.log("A port request has been made!")
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect('/');
})

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
// isAuthenticated is built in Passport method
// Its checks to see if a user is logged in
// next() tells it to move into the next step

app.listen(port, () => {
    console.log("App listening on port: ", port)
});