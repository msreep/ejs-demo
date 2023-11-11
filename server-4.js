var express = require('express');
var app = express();
const session = require('express-session');
const mongoose = require('mongoose');

const MongoStore = require('connect-mongo');

// configure session middleware
app.use(session({
    secret: 'MySecretCode',
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/test',
    autoRemove: 'interval',
    autoRemoveInterval: 10 // In minutes. Default
  })
}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";
  req.session.mascots = mascots;

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  const mascots2 = req.session.mascots;
  res.render('pages/about-3', 
	{mascots2: mascots2});
});


app.listen(8080);
console.log('Server is listening on port 8080');
