const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('express-session');
const ejs = require('ejs');
const express = require('express');

const app = express();
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8080);
console.log('8080 is the magic port');
