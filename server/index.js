require('dotenv').config({
    path:"./.env"
});
let express = require('express'),
    app = express(),
    path = require('path'), 
    bodyParser = require('body-parser');


let port = process.env.PORT || 3000;

//USES
let votes = require('./routes/votes');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/votes', votes)


//ROUTERS
app.get('/', (req, res) => {
    console.log('Main URL hit')
    res.sendFile(path.resolve('public/views/index.html'))
});

app.post('/', (req, res) => {
    console.log('post to Main URl hit');
    res.sendStatus(200);
})




app.listen(port, () => {
console.log('server up on port:', port);
})
