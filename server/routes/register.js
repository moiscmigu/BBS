let express = require('express'),
    router = express.Router(),
    registerDB = require('./registerDB'),
    bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    let name = req.body.name,
        password = req.body.password,
        email = req.body.email;
        console.log('say something')
    
        bcrypt.genSalt(12, function(err, salt) {
            if (err) {
              console.log('salt err:', err);
              res.sendStatus(400);
            } else {
              console.log('salt:', salt);
              bcrypt.hash(password, salt, function(err, hash) {
                if (err) {
                  console.log('hash err:', err);
                  res.sendStatus(400);
                } else {
                  let newUser = {
                    name:name, 
                    password:hash, 
                    email:email
                  };
                  registerDB(newUser).save();
                  res.send(200);
                }
              }); 
            }
          });
});


module.exports = router;