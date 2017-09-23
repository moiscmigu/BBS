let express = require('express'),
    router = express.Router(),
    request = require('request'),
    rtg = require('random-token-generator');
  
   




    
router.post('/', (req, res) => {
    var token ='';
    rtg.generateKey({
        len: 10, // Generate 16 characters or bytes of data 
        string: true, // Output keys as a hex string 
        strong: false, // Use the crypographically secure randomBytes function 
        retry: true // Retry once on error 
        }, function(err, key) {
            if(err) {
                console.log('err while creating token');
            } else {
                console.log('Token Was created!', key);
                token = key;
                
            }

            
    
    });

    console.log('where i want tthe token ', token);


    res.send(200);


}); //end of post


module.exports = router;