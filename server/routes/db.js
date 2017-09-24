var mongoose = require ('mongoose');

mongoose.connect("localhost:27017/votingApp");

var votingSchema = new mongoose.Schema({
  title:{type:String, required:true},
  votes: {type:Array, required:true},
  token:{type:String, required:true, unique:true},
  
});

var userModel = mongoose.model('userModel', votingSchema);

module.exports = userModel;