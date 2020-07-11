const mongoose =              require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


let UserSchema = new mongoose.Schema ({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose); // Plugin connects to mongoose

module.exports = mongoose.model('User', UserSchema);