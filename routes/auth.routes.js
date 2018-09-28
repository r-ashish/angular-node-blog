module.exports = function(app, checkSignIn) {
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
}