let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bbs');

let booksSchema = new mongoose.Schema({
  
    book:{type:String}
});//end of userSchema

let booksModel = mongoose.model('booksModel', booksSchema);

module.exports = booksModel;