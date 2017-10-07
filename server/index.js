require('dotenv').config({
    path:"./.env"
});
let express = require('express'),
    app = express(),
    path = require('path'), 
    bodyParser = require('body-parser'),
    pokeIndex = require('./routes/pokeIndex');


let port = process.env.PORT || 4000;

//USES



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/pokeIndex', pokeIndex);



//ROUTERS
app.get('/', (req, res) => {
    console.log('Main URL hit')
    res.sendFile(path.resolve('public/views/index.html'))
});


app.listen(port, () => {
console.log('server up on port:', port);
});
