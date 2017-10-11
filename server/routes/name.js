let request = require('request'),
    booksDB = require('./abbrDB');







//Changes the full name of the book to appropriate abbriviation
module.exports = (name) => {

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
                    console.log('found', correctAbb);
                    
                    
                     
                 } else {
                    
                 }
              
            }//end of for loop
           console.log('in the db block', correctAbb);
           resolve(correctAbb);
         });
        
    });

    
};//end of name funciton
