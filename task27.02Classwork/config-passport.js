const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const userDB =  {
  id: 1234567,
  email: 'test@test.ua',
  password: '123', 
}

passport.serializeUser(function(user, done) {
  console.log('serialize >>>', user),
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('DEserialize >>>', id);
  const user = (userDB.id === id) ? userDB : false;
  done(null, user);                                          // user or user.id ?
});

passport.use(
  new LocalStrategy({ 
    usernameField: 'email',      // NOT <input name="username"><input name="password">
    passwordField: 'passwd',
  }, 
    function(email, passwd, done) {
      if (email === userDB.email && passwd === userDB.password) {
        return done(null, userDB);   // (err, user)
      } else {
        return done(null, false);
      }
    }
  )
);