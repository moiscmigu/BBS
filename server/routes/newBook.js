let express = require('express'),
    request = require('request'),
    router = express.Router(),
    username = process.env.BIBLEAPIKEY, //api key for bible.org,
    password = process.env.PASSWORD,
    selectCorrectBook = require('./name');
    
    



function filterNewBook(api) {
    //GETS THE DATA WE WANT TO BE ENTERED IN USERS DATABASE
    let lengthOfBook = api.response.chapters.length - 1;
    let nameOfBook;

    let apiRes = api.response.chapters[0].parent.book.name;

   




    let bookInfo = {
        lengthOfChaptersInBook:lengthOfBook,
        book:apiRes
    };//end of bookInfo

    return bookInfo;

}//end of filterNewBook


router.post('/', (req, res) => {
    
   
    selectCorrectBook(req.body.book).then(val => {
        console.log('the val', val)
        let bibleOrgUrl = "https://bibles.org/v2/books/eng-GNTD:"+val+"/chapters.js";
        console.log(bibleOrgUrl)
           
         let auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
         request.get({
                 url: bibleOrgUrl,
                 headers: {
                     "Authorization" : auth
                 },
             }, function(err, response, body) {
     
     
         
     
         let bookInfo = JSON.parse(body);
     
         
         res.send(filterNewBook(bookInfo));
         });//end of request to bible.org
         
        
    });

    
    
});//end of post


router.get('/', (req, res) => {
    console.log('New book URL hit (GET)');
    res.sendStatus(200);
});//end of get


router.put('/', (req, res) => {
    console.log('New book URL hit (PUT)');
    res.sendStatus(200);
})//end of put


module.exports = router;