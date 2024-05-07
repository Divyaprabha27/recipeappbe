const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    passwordHash: String,
});
module.exports = mongoose.model('User',userSchema,'users');