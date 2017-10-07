let express = require('express'),
    router = express.Router();


router.post('/', (req, res) => {
    console.log('login url hit with ', req.body);
    res.send('Loging in ...');
});


module.exports = router;