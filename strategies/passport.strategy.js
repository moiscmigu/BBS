let bcrypt = require('bcrypt');
let LocalStrategy=require('passport-local').Strategy;
let passport = require('passport');
let db = require('../server/routes/database/registerDB');



passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password',
    
  }, function(req, email, password, done) {
    
    db.findOne({ 'email':  email}, function (err, user) {
        if(err) {
            done(null, false, {
                          message: 'Incorrect credentials.'
                        });
        } else {
            bcrypt.compare(password, user.password, function(err, isMatch) {
                if (err) {
                } else {
                    if (isMatch === false) {
                        done(null, false, {
                          message: 'Incorrect credentials.'
                        });
                    } else if (isMatch) {
                        done(null, user);

                    }
                }
            });
            
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