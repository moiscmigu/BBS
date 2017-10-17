let request = require('request'),
    passport = require('../../../strategies/passport.strategy'),
    userBookDB = require('../database/userBooksDB'),
    booksDB = require('../database/abbrDB');



let username = process.env.BIBLEAPIKEY, //api key for bible.org,
    password = process.env.PASSWORD;//password for api key bible.org



function getCorrectAbb(name) {
    return new Promise((resolve, reject) => {
        
        let correctAbb = '';

        //removes white space if string contains it
        if(String(name).includes(" ")) {
          
           name = name.replace(/\s/g, '');
        }
        booksDB.find({}, function(err, abb) {
            for(let i = 0; i < abb.length; i++) {
                 if(String(name).includes(String(abb[i].book))) {
                    correctAbb = abb[i].book;
                    break;
                }
            }//end of for loop
            console.log('This is what i am returning in getCorrectAbb', correctAbb)
           resolve(correctAbb);
         });//end of database search
    });//end of promise
}//end of getCorrectAbb





function getResFromAPI(abb) {
    return new Promise((resolve, reject) => {
        let bibleOrgUrl = "https://bibles.org/v2/books/eng-GNTD:"+abb+"/chapters.js";
      
        let auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
        request.get({
                url: bibleOrgUrl,
                headers: {
                    "Authorization" : auth
                },
            }, function(err, response, body) {
                if(err) {
                    console.log('err');
                    reject(err)
                }

            let bookInfo = JSON.parse(body);
            resolve(bookInfo);
         });//end of request to bible.org
    });
    

}//end of getResFromAPI



function saveToDB(bookObject, user, abb) {
    

    return new Promise((resolve, reject) => {
        let userBookData = filterNewBook(bookObject, user);
        let dataToSave = {
        user: userBookData.user.email,
        book:userBookData.book,
        length:userBookData.lengthOfChaptersInBook,
        bookProgress:0,
        bookFinished:false,
        bookSummary: [],
        abb
    };//end of dataToSave


    userBookDB(dataToSave).save(err => {
                    if(err) {
                     reject('Failed', err)
                    } else {
                      resolve('Done')
                    }
                  });//enf of save to db
    
    });
}//end of saveToDB

//GETS THE DATA WE WANT TO BE ENTERED IN USERS DATABASE
function filterNewBook(bookObject, user) {

    
    
    let lengthOfBook = bookObject.response.chapters.length - 1;

    let apiRes = bookObject.response.chapters[0].parent.book.name;

    let bookInfo = {
        lengthOfChaptersInBook:lengthOfBook,
        book:apiRes,
        user
    };//end of bookInfo

    return bookInfo;

}//end of filterNewBook


//Changes the full name of the book to appropriate abbriviation
module.exports = {
    getCorrectAbb,
    saveToDB,
    getResFromAPI,
    filterNewBook
};//end module.exports




