let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bbs');

let userSchema = new mongoose.Schema({
    name:{type:String, required:true, unique:false},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:false}
});//end of userSchema

let userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;