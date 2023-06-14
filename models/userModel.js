const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unqique: true},
    password: {type: String, required: true},
    token: String
});

const User = mongoose.model('user',userSchema)

module.exports = {User}