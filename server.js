var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
// set view engine as ejs
app.set('view engine', 'ejs');
// set static directories
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client/dist/client'));

// set parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: "somesuperlongsecretkey"}));

// include routes
require('./routes/routes')(app);
app.listen(4000);
console.log('Listening on port 4000...');