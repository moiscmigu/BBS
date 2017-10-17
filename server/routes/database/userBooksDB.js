let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bbs');

let userBookSchema = new mongoose.Schema({
    user:{type:String, required:true, unique:false},
    book:{type:String, require:true, unique:true},
    length:Number,
    bookProgress:Number,
    bookFinished:Boolean,
    bookSummary:Array,
    abb:String

});//end of userSchema

let userBookModel = mongoose.model('userBookModel', userBookSchema);

module.exports = userBookModel;


