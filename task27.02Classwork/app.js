const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const passport = require('passport')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    store: new FileStore(),
    secret: 'ds23$%sdww3f',
    cookie: {
      path: '/',
      httpOnly: true, 
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
  })
)

require('./config-passport');
app.use(passport.initialize());
app.use(passport.session());


//  ** ROUTERS **

app.get('/', (req, res) => {
  console.log('route / req session >>> ', req.session);
  res.send('base page');
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user) {
    if (err) { return next(err); }
    if (!user) { return res.send('incorrect email or password!'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/admin');
    });
  })(req, res, next);
});

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {               // ? 
    next();
  } else {
    return res.redirect('/');
  }
}

app.get('/admin', auth, (req, res) => {
  res.send('admin page');
})

app.post('/logout', auth, (req, res) => {
  req.logOut();
  res.redirect('/');
})

// ** END OF ROUTES **




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})