var mongoose = require ('mongoose');

mongoose.connect("localhost:27017/votingApp");

var votingSchema = new mongoose.Schema({
  title:String,
  votes: Array,
  token:String,
  
});

var userModel = mongoose.model('userModel', votingSchema);

module.exports = userModel;