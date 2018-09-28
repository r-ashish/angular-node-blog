const path = require('path');

function checkSignIn(req, res, next){
  if(req.session.user){
     next();
  } else {
     var err = new Error("Not logged in!");
     res.redirect('/login');
  }
}

renderApp = (res) => res.sendFile(path.join(__dirname, '../client/dist/client/app.html'));
renderLogin = (res, message='') => res.render(path.join(__dirname, '../public/login.ejs'), {message});

module.exports = function(app) {
  app.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/');    
  });
  // route for login page [GET]
  app.get('/login', (req, res) => {
    if(req.session.user){
      res.redirect('/');
      return;
    }
    renderLogin(res);
  });

  // route for checking login [POST]
  app.post('/login', (req, res) => {
    // no need to create user model, as just a demo login is required
    if (req.body.username === 'admin' && req.body.password === 'admin') {
      req.session.user = {username: 'admin'};
      res.redirect('/');
    } else {
      renderLogin(res, 'Invalid credentials!');
    }
  });
  
  // check signin status before 
  app.get('*', checkSignIn, (req, res) => {
    renderApp(res);
  });  
}