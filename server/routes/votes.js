let express = require('express'),
    router = express.Router(),
    request = require('request'),
    rtg = require('random-token-generator'),
    db = require('./db');
  
   




    
router.post('/', (req, res) => {
    let token ='';
    let expDate = req.body.expDate;
    rtg.generateKey({
        len: 4, // Generate 16 characters or bytes of data 
        string: true, // Output keys as a hex string 
        strong: false, // Use the crypographically secure randomBytes function 
        retry: true // Retry once on error 
        }, function(err, key) {
                   
            let newVote = {
                title:req.body.title,
                votes:req.body.categories,
                token: key,
                expDate
            };//end of newVote
            console.log('this is the saved to db', newVote)
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

    let id = req.body.vote._id;
    let index = req.body.card;

    console.log('this is the indezx', index);
    db.findOne({_id:id}, function(err, doc){
        if (err) {
            res.send('there was an err');
        } else {
            console.log('this is the old document', doc);
            doc.votes[index].like = doc.votes[index].like + 1;

            
        }
        console.log('this is the new document', doc);
        db(doc).save();
    })
    res.send(200);
});//end of get


module.exports = router;