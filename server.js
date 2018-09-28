var express = require('express');
const path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/login', (req, res) => {
  res.render(path.join(__dirname, '/public/login.ejs'), {message: ''});
})
app.listen(4000);
console.log('Listening on port 4000...');