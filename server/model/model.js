const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    usn:String,
    name:String,
    email:String,
    gender:String,
    dob:String,
    status:String
})

const Userdb = mongoose.model('Userdb',schema);
module.exports = Userdb;