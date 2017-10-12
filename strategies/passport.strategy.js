let bcrypt = require('bcrypt');
let LocalStrategy=require('passport-local').Strategy;
let passport = require('passport');
let db = require('../server/routes/database/registerDB');


passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password'
  }, function(req, email, password, done) {
    console.log('in the passport',email);

    db.findOne({ 'email':  email}, 'email', function (err, user) {
        if(err) {
        } else {
            done(null, user)
        }
        
      })
    
  }));//end of passport Local Strategy


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });//end of serialazation


  passport.deserializeUser(function(id, done) {
     

    db.findOne({ '_id':  id}, function (err, results) {
        if(err) {
            return done(null, false, {
                message: 'Incorrect credentials.'
              });
        } else {

            let user = results
            done(null, user)
        }
        
      })
   
  });//end of deserialazation


module.exports = passport;