let express = require('express');
let router = express.Router();
let passport = require('../../strategies/passport.strategy');


router.post('/', passport.authenticate('local'), (req, res) => {
    res.send(req.isAuthenticated());
});// end of post

router.delete('/', (req, res) => {
    console.log('loging out the user...');
    req.logout();
    res.send(200);
});

module.exports = router;


