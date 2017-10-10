let bcrypt = require('bcrypt'),
    LocalStrategy = require('passport-local').Strategy,
    passport = require('passport'),
    db = require('./registerDB');


passport.use('local', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) {
    console.log('the email and password', email, password);
    db.findOne({'email': email}, function(err, user) {
        if(err) {
            console.log('err during finOne', err);
            return err;
        }
        if (!user)
        return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

    // if the user is found but the password is wrong
    if (!user.validPassword(password))
        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

    // all is well, return successful user
    return done(null, user);
    })
}
))

passport.serializeUser(function(user, done) {
    console.log('serialixe user', user)
    done(null, user);
  });
  
  
  module.exports = passport;
  
