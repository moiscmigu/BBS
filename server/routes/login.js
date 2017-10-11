let express = require('express');
let router = express.Router();
let passport = require('../../strategies/passport.strategy');


router.post('/', passport.authenticate('local'), (req, res) => {
    console.log('login in the user');
    res.send(req.isAuthenticated());
});// end of post

router.delete('/', (req, res) => {
    console.log('Loging out User')
    req.logout();
    res.send(200);
});

router.get('/', (req, res) => { 
    console.log('Giving user information');
    res.send(req.user)
});//end of get

module.exports = router;


