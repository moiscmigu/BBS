require('dotenv').config({
    path:"./.env"
});
let express = require('express'),
    app = express(),
    path = require('path'), 
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('../strategies/passport.strategy'), 
    port = process.env.PORT;


let register = require('./routes/register'),
    login = require('./routes/login'),
    newBook = require('./routes/newBook');
    




//USES



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use(session({
	secret: 'secret',
	key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
	resave: 'true',
	saveUninitialized: false,
	cookie: {
		maxage: 60000,
		secure: false
	}
}));

app.use(passport.initialize());
app.use(passport.session());




app.use('/register', register);
app.use('/login', login);
app.use('/newBook', newBook);




//ROUTERS
app.get('/', (req, res) => {
    console.log('Main URL hit');
    console.log('Is the user authenticated:', req.isAuthenticated());
    res.sendFile(path.resolve('public/views/index.html'));
});


app.listen(port, () => {
console.log('server up on port:', port);
});
