const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');

const app = express();
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

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
app.listen(4000);
console.log('Listening on port 4000...');