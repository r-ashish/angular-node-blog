const path = require('path');

function checkSignIn(req, res, next){
  if(req.session.user){
     next();
  } else {
     var err = new Error("Not logged in!");
     res.redirect('/login');
  }
}

module.exports = function(app) {
  app.get('/login', (req, res) => {
    if(req.session.user){
      res.redirect('/');
      return;
    }
    res.render(path.join(__dirname, '../public/login.ejs'), {message: ''});
  });

  app.post('/login', (req, res) => {
    // no need to create user model, as just a demo login is required
    if (req.body.username === 'admin' && req.body.password === 'admin') {
      req.session.user = {username: 'admin'};
      res.redirect('/');
    } else {
      res.render(path.join(__dirname, '../public/login.ejs'), {message: 'Invalid credentials!'});
    }
  });
  
  app.get('*', checkSignIn, (req, res) => {
    res.send('hi');
  });  
}