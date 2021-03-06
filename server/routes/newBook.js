let express = require('express'),
    request = require('request'),
    newBookFunction = require('./functions/name'),
    userBookDB = require('./database/userBooksDB'),
    passport = require('../../strategies/passport.strategy'),
    router = express.Router();
    

let username = process.env.BIBLEAPIKEY, //api key for bible.org,
    password = process.env.PASSWORD;//password for api key bible.org
    
    
    





router.post('/', (req, res) => {
        let user = req.body.user;
        let book = req.body.book;
        newBookFunction.getCorrectAbb(req.body.book).then(abb => {
            newBookFunction.getResFromAPI(abb).then(response => {
                newBookFunction.saveToDB(response, user, abb).then(results => {
                    console.log('This is the results', results);
                });//end of then
                
                res.send("Doing something...");
            });//end of then
        
    });//end of then
});//end of post


router.get('/', (req, res) => {
    let userEmail = req.user.email;
    userBookDB.find({'user': userEmail}, (err, results) => {
        if(err) {
            console.log('err', err)
            res.send(err);
        } else {
            res.send(results);
        }
    });//end of DB Find

    
});//end of get


router.put('/', (req, res) => {
    console.log('New book URL hit (PUT)', req.body);
    res.sendStatus(200);
});//end of put

router.delete('/:book', (req, res) => {
    let book = req.params.book;
    console.log('book id', book)
    userBookDB.remove({_id:book}, (err) => {
        if(err) {
            res.send(err)
        }
        else {
            res.send('Deleted')
        }
    });///end db remove
});//end of delete


module.exports = router;