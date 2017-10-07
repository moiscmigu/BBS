let express = require('express'),
    router = express.Router(),
    request = require('request');


router.get('/', (req, res) => {
    console.log('pokeIndex url hit');

    request.get("http://pokeapi.co/api/v2/pokemon/bulbasaur/", (err, response) => {
        console.log('this is the respomnse', response)
        res.send(response);
    }); //end of request

});


module.exports = router;