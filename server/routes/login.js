let express = require('express');
let router = express.Router();
let passport = require('../../strategies/passport.strategy');


router.post('/', passport.authenticate('local'), (req, res) => {
    res.send(req.isAuthenticated());
});// end of post

router.delete('/', (req, res) => {
    console.log('Loging out User')
    req.logout();
    res.send(200);
});

router.get('/', (req, res) => { 

    if(req.isAuthenticated()) {
        let email = req.user.email,
            name = req.user.name,
            id = req.user.id;
        res.send({email, name, id})
    } 
    else {
        res.send("Not Authenticated")
    }
    
    
    

    
});//end of get

module.exports = router;


