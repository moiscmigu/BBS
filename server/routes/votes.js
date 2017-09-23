let express = require('express'),
    router = express.Router(),
    request = require('request'),
    rtg = require('random-token-generator'),
    db = require('./db');
  
   




    
router.post('/', (req, res) => {
    console.log('req.body', req.body.categories)
    var token ='';



    


    rtg.generateKey({
        len: 10, // Generate 16 characters or bytes of data 
        string: true, // Output keys as a hex string 
        strong: false, // Use the crypographically secure randomBytes function 
        retry: true // Retry once on error 
        }, function(err, key) {
                   
            let newVote = {
                title:req.body.title,
                votes:req.body.categories,
                token: key   
            };//end of newVote
            db(newVote).save();
            res.status(200).send(key);
    
    });

    


}); //end of post


module.exports = router;