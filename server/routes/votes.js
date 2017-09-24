let express = require('express'),
    router = express.Router(),
    request = require('request'),
    rtg = require('random-token-generator'),
    db = require('./db');
  
   




    
router.post('/', (req, res) => {
    let token ='';
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

router.get('/:search' , (req, res) => {
    let search = req.params.search
    console.log('votes url hit', search);

    db.find({'token' : new RegExp(search, 'i')}, function(err, vote) {
        if (err) {
            console.log('err', err);
            res.send(500);
        }
        else {
            console.log('search was succesful', vote);
            res.status(200).send(vote);
        }
    });
});//end of get

router.put('/' , (req, res) => {
    console.log('PUT URL HIT', req.body);
    res.send(200);
});//end of get


module.exports = router;