let bcrypt = require('bcrypt');
let LocalStrategy=require('passport-local').Strategy;
let passport = require('passport');
let db = require('../server/routes/registerDB');


passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password'
  }, function(req, email, password, done) {
    console.log('in the passport',email);

    db.findOne({ 'email':  email}, 'email', function (err, user) {
        if(err) {
            console.log('err', err)
        } else {
            console.log('user',user);
            done(null, user)
        }
        
      })
    
  }));


  passport.serializeUser(function(user, done) {
    console.log('serializing the user', user.id)
    done(null, user.id);
  });


  passport.deserializeUser(function(id, done) {
     
    console.log('deserializeUser the user', id);

    db.findOne({ '_id':  id}, '_id', function (err, results) {
        if(err) {
            return done(null, false, {
                message: 'Incorrect credentials.'
              });
        } else {

            let user = results
            console.log('the user in deserialization', user);
            done(null, user)
        }
        
      })
   
  });


module.exports = passport;