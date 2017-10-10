require('dotenv').config({
    path:"./.env"
});
let express = require('express'),
    app = express(),
    path = require('path'), 
    bodyParser = require('body-parser'),
    register = require('./routes/register'),
    login = require('./routes/login'),
    session = require('express-session'),
    passport = require('../strategies/passport.strategy');
    


let port = process.env.PORT || 4000;

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




//ROUTERS
app.get('/', (req, res) => {
    console.log('Main URL hit');
    console.log('the passport user', req.isAuthenticated())
    res.sendFile(path.resolve('public/views/index.html'))
});


app.listen(port, () => {
console.log('server up on port:', port);
});
