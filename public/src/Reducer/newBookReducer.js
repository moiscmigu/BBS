import axios from 'axios';


//will finish updating the database for users new book
const uploadNewBook = (bookInfo) => {
   return new Promise((resolve, reject) => {
        axios.put('/newBook', bookInfo).then(res => {
            console.log('Back from the server with ', res)
        });
        resolve("Jojtn")
    });//end of promise
};//enf of uploadNewBook



const newBookReducer = (state=[], action) => { 
    switch(action.type) {
        case "NEWBOOK": 
            let bookChosenInfo = action.payload.data;

            uploadNewBook(bookChosenInfo).then(val => {
                console.log('this is the val', val)
            });
            
            return state;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default newBookReducer;