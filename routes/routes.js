const path = require('path');
const apiRoutes = require('./api.routes');

function checkSignIn(req, res, next){
  if(req.session.user){
     next();
  } else {
    //  const err = new Error("Not logged in!");
     res.redirect('/login');
  }
}

renderApp = (res) => res.sendFile(path.join(__dirname, '../client/dist/client/app.html'));
renderLogin = (res, message='') => res.render(path.join(__dirname, '../public/login.ejs'), {message});

module.exports = function(app) {
  require('./auth.routes')(app, checkSignIn);
  app.use('/api', checkSignIn);
  app.use('/api', apiRoutes);
  
  // check signin status before 
  app.get('*', checkSignIn, (req, res) => {
    renderApp(res);
  });  
}