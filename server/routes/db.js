var mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_URI);



var votingSchema = new mongoose.Schema({
  title:{type:String, required:true},
  votes: {type:Array, required:true},
  token:{type:String, required:true, unique:true},
  expDate:{type:String, required:true, unique:false},
  
});

var userModel = mongoose.model('userModel', votingSchema);

module.exports = userModel;